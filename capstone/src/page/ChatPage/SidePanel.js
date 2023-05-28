import React from 'react';
import { IoIosChatboxes } from 'react-icons/io';
import { FaRegSmile } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

function SidePanel() {
  return (
    <div
        style={{
            backgroundColor: "rgb(234, 243, 230)",
            padding: '2rem',
            minHeight: '100vh',
            color: 'black',
            minWidth: '275px'
        }}
    >
        <div>
            <h3 style={{marginBottom:'30px'}}>
                <IoIosChatboxes />{" "} 채팅
            </h3>
        </div>
        <div>
            <Dropdown>
                <Dropdown.Toggle
                    style={{ background: 'transparent', border: '0px', color: 'black', }}
                    id="dropdown-basic">
                    {/* {user && user.displayName} */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item > {/*onClick={handleLogout}*/}
                        로그아웃
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <FaRegSmile style={{ marginRight: 3 }} />  DIRECT MESSAGES
            </span>
        </div>
    </div>
  )
}

export default SidePanel