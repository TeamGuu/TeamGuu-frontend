import React, { useEffect, useState } from "react";
import "../style/Login.css";
import {Link} from "react-router-dom";
const User={
    eamil: 'test@example.com',
    password: 'test2323@@@',
}


export default function LoginPage(){

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


    const onClickConfirmButton = () => {
        if(email === User.eamil && password === User.password){
            alert('로그인에 성공했습니다.');
        }else{
            alert('등록되지않은 회원입니다.');
        }
    }

    return(
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input 
                        type='text'
                        className="input"
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="errorMessageWrap">
                    {
                        !emailnValid && email.length > 0 &&(//이메일이 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>

                <div style={{marginTop:"26px"}} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input 
                        type='password'
                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div className="errorMessageWrap">
                    {
                        !pwValid && password.length > 0 &&(//비밀번호가 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                    }   
                </div>
            </div>

            <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">확인</button>
            </div>
            <div>
                <Link to="/page/FindIDPW">
                    <button >ID/PW찾기</button>
                </Link>
                
                <Link to="/page/JoinPage">
                        <button>회원가입</button>
                </Link>
            </div>
        </div>
    );
}