import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

//style
import styles from "./FindPWPage.module.css";

export default function FindPWPage(){

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [verifyCodeValid, setVerifyCodeValid] = useState(false);

    const [notAllow,setNotAllow] = useState(true);

    const handleId=(e)=>{ //아이디 영어로(일단 이렇게만 하고 나중에 아이디 확인 작업)
        setId(e.target.value);
        const regex = /^[a-zA-Z]+$/; 
        if(regex.test(id)){
            setIdValid(true);
        }else{
            setIdValid(false);
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
        if(idValid && emailValid && verifyCodeValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[idValid, emailValid, verifyCodeValid]);

    return(
        <div>
            <div className={styles.topBtn}>
                <table className={styles.iDPWBtn}>
                    <tbody>
                        <tr>
                            <td className={styles.findIDBtn}>
                                <Link to="/page/FindIDPage" style={{ textDecoration : "none", color: "black" }}>
                                    ID 찾기
                                </Link>
                            </td>
                            <td className={styles.findPWBtn}>
                                <Link to="/page/FindIDPage" style={{ textDecoration : "none", color: "black" }}>
                                    PW 찾기
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.findPWWrap}>
                <div className={styles.id}>아이디</div>
                <div className={styles.inputWrap}>
                    <input 
                        type='id'
                        className={styles.input}
                        placeholder="아이디를 입력하세요"
                        value={id}
                        onChange={handleId}
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
            <div className={styles.confirmPWBtn}>패스워드 찾기 →</div>
                
        </div>
    );
}

