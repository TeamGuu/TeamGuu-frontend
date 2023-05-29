import React from 'react'
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import { useSelector } from 'react-redux';
import { getAuth } from "firebase/auth";

function ChatPage() {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
        console.log("user",user);
    }else{
        console.log("갈!");
    }
    
    // const currentUser = useSelector(state => state.user.currentUser)
    // console.log("currentuser",currentUser);
    // const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '300px' }}>
                <SidePanel
                    key={user && user.uid}
                />
            </div>
            <div style={{ width: '100%' }}>
                <MainPanel
                    // key={currentChatRoom && currentChatRoom.id}
                />
            </div>
        </div>
    )
}

export default ChatPage
