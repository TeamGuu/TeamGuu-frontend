import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, set } from 'firebase/database';
import { setCurrentChatRoom } from '../../redux/actions/chatRoom_action';
import { setUser } from '../../redux/actions/user_action';

function ChatPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // receiverUserEmail과 senderUserEmail 값 가져오기
  const receiverUserEmail = queryParams.get("receiverUserEmail");
  const senderUserEmail = queryParams.get("senderUserEmail");

  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentChatRoom = useSelector((state) => state.chatRoom.currentChatRoom);

  useEffect(() => {
    const fetchChatRoom = async () => {
      if (user) {
        console.log('현재 user 정보 가져오기 성공', user);
        dispatch(setUser(user));
      } else {
        console.log('현재 user 정보 가져오기 실패');
      }

      if (!currentChatRoom) {
        try {
          const database = getDatabase();
          const chatRoomsRef = ref(database, 'chatRooms');
          const newChatRoomRef = push(chatRoomsRef);
          const newChatRoomId = newChatRoomRef.key;

          const chatRoomData = {
            id: newChatRoomId,
            name: 'My Chat Room',
            receiverUserEmail,
            senderUserEmail,
          };

          set(newChatRoomRef, chatRoomData)
            .then(() => {
              console.log('chatRooms에 채팅 방 정보 추가 성공');
              dispatch(setCurrentChatRoom(chatRoomData));
            })
            .catch((error) => {
              console.error('chatRooms에 채팅 방 정보 추가 실패:', error);
            });
        } catch (error) {
          console.error('채팅 방 정보 가져오기 실패:', error);
        }
      }
    };

    fetchChatRoom();
  }, [user, currentChatRoom, dispatch, receiverUserEmail, senderUserEmail]);

  console.log('currentUser:', currentUser);
  console.log('currentChatRoom:', currentChatRoom);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '300px' }}>
        <SidePanel />
      </div>
      <div style={{ width: 'calc(100% - 300px)' }}>
        <MainPanel />
      </div>
    </div>
  );
}

export default ChatPage;
