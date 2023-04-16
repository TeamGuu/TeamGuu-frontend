//회원가입 페이지
import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
//import "../style/JoinPage.css";

const JoinPage=(props)=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [eachPassword,setEachPassword] = useState('');
    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');


    const [emailnValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);
    const [eachValid,setEachValid] = useState(false);

    //셀렉트 박스
    // 상수 데이터
    // 년
    const YEAR = [];

    const nowYear = new Date().getFullYear();
    for (let i = 1980; i <= nowYear; i++) {
    YEAR.push(i);
    }

    // 월
    const MONTH = [];

    for (let i = 1; i <= 12; i++) {
    let m = String(i).padStart(2, '0');
    MONTH.push(m);
    }

    // 일
    const DAY = [];
    for (let i = 1; i <= 31; i++) {
    let d = String(i).padStart(2, '0');
    DAY.push(d);
    }

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

    const handleEachPassword =(e)=>{//기존 비밀번호와 확인 비밀번호가 같으면 경고문이 사라짐
        setEachPassword(e.target.value);
        const regex=
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\- _=+]).{8,20}$/;
        if(regex.test(eachPassword)){
            setEachValid(true);
        }
        else{
            setEachValid(false);
        }
    }

    const handleName =(e)=>{
        setName(e.target.value);
    }

    const handlePhoneNumber =(e)=>{
        setPhoneNumber(e.target.value);
        console.log(phoneNumber);
    }

    return(
        <div className="Page">
 
            <div className="titleWrap">
                <div>회원가입</div>
                <div>이메일</div>
                <input
                     type='text'
                    // className="input"
                     placeholder="test@gmail.com"
                     value={email}
                     onChange={handleEmail}
                />
                <div className="errorMessageWrap">
                    {
                        !emailnValid && email.length > 0 &&(//이메일이 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>
                <div>비밀번호</div>
                <input 
                    type='text'
                   // className="input"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    value={password}
                    onChange={handlePassword}
                />
                 <div className="errorMessageWrap">
                    {
                        !pwValid && password.length > 0 &&(//비밀번호가 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )
                    }   
                </div>
                <div>비밀번호 확인</div>
                <input 
                    type='text'
                    //className="input"
                    value={eachPassword}
                    onChange={handleEachPassword}
                />
                 <div className="errorMessageWrap">
                    {
                        !eachValid && eachPassword.length > 0 &&(//기존 비밀번호가 비밀번호 확인하고 일치하지 않았을 때 사용
                            <div>비밀번호가 틀립니다.</div>
                        )
                    }   
                </div>
                <div>이름</div>
                <input 
                    type='text'
                    //className="input"
                    value={name}
                    onChange={handleName}
                />
                <div>휴대폰 번호</div>
                <input
                    type='text'
                    //className="input"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                />
                <div>생년월일</div>
                <select className="select" name="year" >
                    {YEAR.map(y => {
                        return <option key={y}>{y}</option>;
                    })}
                </select>
                <select className="select" name="month" >
                    {MONTH.map(m => {
                        return <option key={m}>{m}</option>;
                    })}
                </select>
                <select className="select" name="day" >
                    {DAY.map(d => {
                        return <option key={d}>{d}</option>;
                    })}
                </select>
            </div>
        </div>
    );
}

export default JoinPage;