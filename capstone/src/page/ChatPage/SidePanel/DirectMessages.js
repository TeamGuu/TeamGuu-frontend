import React, { Component } from 'react'
import { FaRegSmile } from 'react-icons/fa';
import firebase from '../../../firebase';
import { connect } from 'react-redux';
import {
    setCurrentChatRoom, setPrivateChatRoom
} from '../../../redux/actions/chatRoom_action';
import { getDatabase, ref, onChildAdded } from "firebase/database";

export class DirectMessages extends Component {

    state = {
        usersRef: ref(getDatabase(), "users"),
        users: [],
        // activeChatRoom: ""
    }

    componentDidMount() {
        const { user } = this.props;
        if (user) {
          console.log("여기까진 오냐?");
          this.addUsersListeners(user.uid);
        }
    }
      

    addUsersListeners = (currentUserId) => {
        const { usersRef } = this.state;

        let usersArray = [];

        onChildAdded(usersRef,  DataSnapshot => {
            if (currentUserId !== DataSnapshot.key) { //내이름 빼고
                // console.log('DataSnapshot.val()',DataSnapshot.val());
                let user = DataSnapshot.val();
                user["uid"] = DataSnapshot.key;
                // user["status"] = "offline";
                usersArray.push(user)
                console.log("usersArray",usersArray); //여기는 정상적으로 나온다.
                this.setState({ users: usersArray })
            }
        })
    }

    getChatRoomId = (userId) => {
        const currentUserId = this.props.user.uid

        return userId > currentUserId
            ? `${userId}/${currentUserId}`
            : `${currentUserId}/${userId}`
    }

    changeChatRoom = (user) => {
        const chatRoomId = this.getChatRoomId(user.uid);
        const chatRoomData = {
            id: chatRoomId,
            name: user.name
        }
    
        this.props.dispatch(setCurrentChatRoom(chatRoomData));
        this.props.dispatch(setPrivateChatRoom(true));
        this.setActiveChatRoom(user.uid);
    }
    

    setActiveChatRoom = (userId) => {
        this.setState({ activeChatRoom: userId })
    }


    renderDirectMessages = users =>
        users.length > 0 &&
        users.map(user => (
            <li key={user.uid}
                style={{
                    // backgroundColor: user.uid === this.state.activeChatRoom
                    //     && "#ffffff95",
                    height:"35px",
                    lineHeight:"35px"
                }}
                onClick={() => this.changeChatRoom(user)}>
                # {user.name}
            </li>
        ))

    render() {
        const { users } = this.state;
        return (
            <div>
                <span style={{ alignItems: 'center', marginLeft:"20px" }}>
                    <FaRegSmile style={{ marginRight: 3 }} />  DIRECT MESSAGES({users.length})
                </span>

                <ul style={{ listStyleType: 'none', padding: "10px", cursor:"pointer" }}>
                    {this.renderDirectMessages(users)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps)(DirectMessages);
