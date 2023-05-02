import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

//style
import styles from "./FindIDPage.module.css";

export default function FindIDPage(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');

    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [verifyCodeValid, setVerifyCodeValid] = useState(false);

    const [notAllow,setNotAllow] = useState(true);

    const handleName=(e)=>{ //이름은 한글로
        setName(e.target.value);
        const regex = /^[가-힣]+$/; 
        if(regex.test(name)){
            setNameValid(true);
        }else{
            setNameValid(false);
        }
    }

    const handleEmail=(e)=>{ //이메일 형식 ㄱㄱ
        setEmail(e.target.value);
        const regex=
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        if(regex.test(email)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    const handleVerifyCode=(e)=>{ //인증번호 일치 확인(지금은 그냥 숫자만 확인)
        setVerifyCode(e.target.value);
        const regex=
        /^[0-9]+$/;
        if(regex.test(verifyCode)){
            setVerifyCodeValid(true);
        }else{
            setVerifyCodeValid(false);
        }
    }

    useEffect(()=>{
        if(nameValid && emailValid && verifyCodeValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[nameValid, emailValid, verifyCodeValid]);

    return(
        <div>
            <div className={styles.topBtn}>
                <table className={styles.iDPWBtn}>
                    <tbody>
                        <tr>
                            <Link to="/page/FindIDPage" style={{ textDecoration : "none", color: "black" }}>
                                <td className={styles.findIDBtn}>
                                    ID 찾기
                                </td>
                            </Link>                            
                            <Link to="/page/FindPWPage" style={{ textDecoration : "none", color: "black" }}>
                                <td className={styles.findPWBtn}>                                
                                    PW 찾기
                                </td>
                            </Link>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.findIDWrap}>
                <div className={styles.name}>이름</div>
                <div className={styles.inputWrap}>
                    <input 
                        type='name'
                        className={styles.input}
                        placeholder="이름을 입력하세요"
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <br/>
                <div className={styles.email} style={{marginTop:"40px"}}>이메일</div>
                <div className={styles.inputWrap}>
                    <input 
                        type='email'
                        className={styles.input}
                        placeholder="이메일을 입력하세요"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className={styles.verifyCodeBtn}>인증번호 받기</div>
                <div className={styles.verifyCode}>인증번호</div>
                <div className={styles.inputWrap}>
                    <input 
                        type='verifyCode'
                        className={styles.input}
                        placeholder="6자리 숫자를 입력하세요"
                        value={verifyCode}
                        onChange={handleVerifyCode}
                    />
                </div>
            </div>
            <div className={styles.confirmIDBtn}>아이디 찾기 →</div>
                
        </div>
    );
}

