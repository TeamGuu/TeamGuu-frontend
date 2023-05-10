import React, { useEffect, useState } from "react";
import {Link,  useNavigate} from "react-router-dom";
import axios from 'axios';
//style
import styles from "./LoginPage.module.css";

// const User={
//     eamil: 'test@example.com',
//     password: 'test2323@@@',
// }


function LoginPage(props){

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [emailnValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);

    const [notAllow,setNotAllow] = useState(true);

    const handleEmail=(e)=>{ //올바른 이메일 주소 형식으로 텍스트 입력할경우 경고문이 사라짐
        setEmail(e.target.value);
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        if(regex.test(email)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    const handlePassword = (e) =>{//올바른 비밀번호 형식으로 패스워드를 입력할 경우 경고문이 사라짐
        setPassword(e.target.value);
        const regex=
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\- _=+]).{8,20}$/;
        if(regex.test(password)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }

    }
    //버튼 활성화 여부, 이메일과 비밀번호가 형식에 맞게 입력된다면 버튼이 활성화된다.
    useEffect(()=>{
        if(emailnValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailnValid,pwValid]);


    const onClickConfirmButton = (e) => {

        e.preventDefault();
        
        const userData ={
            username: email,
            password: password
        }

        axios.post('http://www.teamguu.p-e.kr/api/auth/sign-in', userData)
        .then((res)=>{ //성공하면 res에 토큰을 받을 수 있다. 토큰을 받으면 로그인에 성공했다는 뜻 -> 토큰을 전역변수로 저장하고 서버에 요청할 때마다 헤더에 넣어서 준다.
           localStorage.setItem('accessToken',res.data.result.accessToken); //.token이 기본이지만 api명세서에 accesstoken라고 나와있으므로 이름 바꿔주었음
            alert('로그인 성공');
           console.log(res);
           console.log(res.data.result.accessToken);
           navigate('/');
        }).catch(error=>{
           // alert('로그인 실패');
            console.log(error);
            throw new Error(error);
        });
    }

    return(
        <div className={styles.page}>
            <div className={styles.titleWrap}>
                <b>로그인</b> | Login
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.inputTitle}>ID</div>
                <div className={styles.inputWrap}>
                    <input 
                        type='text'
                        className={styles.input}
                        placeholder="아이디를 입력하세요"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className={styles.errorMessageWrap}>
                    {
                        !emailnValid && email.length > 0 &&(//이메일이 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                            <div style={{color:"#cf0000"}}>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>

                <div style={{ marginTop:"40px" }} className={styles.inputTitle}>Password</div>
                <div style={{ marginTop:"-45px" }} className={styles.inputWrap}>
                    <input 
                        type='password'
                        className={styles.input}
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div className={styles.errorMessageWrap}>
                    {
                        !pwValid && password.length > 0 &&(//비밀번호가 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                            <div style={{color:"#cf0000"}}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                    }   
                </div>
            </div>

            <div className={styles.confirmWrap}>
                <button type="submit" onClick={onClickConfirmButton} disabled={notAllow} className={styles.confirmButton}>로그인</button>
            </div>

            <div className={styles.bottomBtn}>
                <div className={styles.findIDPWTxt}> 
                    <Link to="/page/FindIDPage" style={{ textDecoration: "none", color: "black"}}>
                        ID/PW찾기
                    </Link>
                </div>
                <div className={styles.JoinTxt}>    
                    <Link to="/page/JoinPage" style={{ textDecoration: "none", color: "black"}}>
                        회원가입
                    </Link>
                </div>
            </div>                
        </div>
    );
}

export default LoginPage;
