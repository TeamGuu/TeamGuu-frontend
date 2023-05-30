import React, { Component } from 'react';
import { FaRegSmile } from 'react-icons/fa';
import firebase from '../../../firebase';
import { connect } from 'react-redux';
import {
  setCurrentChatRoom,
  setPrivateChatRoom,
} from '../../../redux/actions/chatRoom_action';
import { getDatabase, ref, onChildAdded } from 'firebase/database';

class DirectMessages extends Component {
  state = {
    usersRef: ref(getDatabase(), 'users'),
    users: [],
  };

  componentDidMount() {
    const { user } = this.props;
    if (user) {
      this.addUsersListeners(user.uid);
    }
  }

  addUsersListeners = (currentUserId) => {
    const { usersRef } = this.state;

    onChildAdded(usersRef, (DataSnapshot) => {
      if (currentUserId !== DataSnapshot.key) {
        let user = DataSnapshot.val();
        user['uid'] = DataSnapshot.key;
        this.setState((prevState) => ({
          users: [...prevState.users, user],
        }));
      }
    });
  };

  changeChatRoom = (user) => {
    const chatRoomId = this.getChatRoomId(user.uid);
    const chatRoomData = {
      id: chatRoomId,
      name: user.name,
    };

    this.props.dispatch(setCurrentChatRoom(chatRoomData));
    this.props.dispatch(setPrivateChatRoom(true));
  };

  getChatRoomId = (userId) => {
    const { user } = this.props;
    return userId > user.uid
      ? `${userId}/${user.uid}`
      : `${user.uid}/${userId}`;
  };

  renderDirectMessages = (users) =>
    users.length > 0 &&
    users.map((user) => (
      <li
        key={user.uid}
        style={{
          height: '35px',
          lineHeight: '35px',
          marginLeft: '20px',
          cursor: 'pointer',
        }}
        onClick={() => this.changeChatRoom(user)}
      >
        # {user.name}
      </li>
    ));

  render() {
    const { users } = this.state;
    return (
      <div>
        <span style={{ alignItems: 'center', marginLeft: '20px' }}>
          <FaRegSmile style={{ marginRight: 3 }} /> DIRECT MESSAGES(
          {users.length})
        </span>

        <ul style={{ listStyleType: 'none', padding: '10px' }}>
          {this.renderDirectMessages(users)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(DirectMessages);
