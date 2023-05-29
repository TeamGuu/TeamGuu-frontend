import React from 'react'
import { IoIosChatboxes } from 'react-icons/io';
import { getAuth } from "firebase/auth";

function UserPanel() {
    const auth = getAuth();
    const user = auth.currentUser; //현재 로그인 한 회원 정보

    return (
        <div>
            {/* Logo */}
            <h3 style={{marginBottom:'30px', marginLeft:"20px"}}>
                <IoIosChatboxes />{" "} 채팅
            </h3>

            <div style={{ float: 'left', width:"220px", marginBottom: '30px', marginLeft: "40px" }}>
                <div
                    style={{ background: 'transparent', border: '0px', 
                        color: 'black', fontSize:"20px", fontWeight:"bold" }}
                    id="dropdown-basic">
                    {user && user.displayName}
                </div>
            </div>
        </div>
    )
}

export default UserPanel
