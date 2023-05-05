//회원가입 페이지
import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
//import "../style/JoinPage.css";

//이거그냥 갖다쓰는게 나을수도.. 직접 해보긴했는데 코드가 안먹음
const JoinPage=(props)=>{ 

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [eachPassword,setEachPassword] = useState('');
    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    //const [birthday,setBirthday] = useState('');

    


    // const [userInput, setUserInput] = useState({
    //     email: '',
    //     password: '',
    //     eachPassword: '',
    //     name: '',
    //     phoneNumber: '',
    //     birthday: '',
    // });

    
    const [emailnValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);
    const [eachValid,setEachValid] = useState(false);
    const [phoneNumberValid,setphoneNumberValid] = useState(false);


    //셀렉트 박스
    // 상수 데이터
    // 년
    const YEAR = [];

    const nowYear = new Date().getFullYear();
    for (let i = 1990; i <= nowYear; i++) {
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
            
           // handleChange(e.target);
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
          //  handleChange(e.target);
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
      //  handleChange(e.target);
    }

    const onChangePhone=(getNumber)=>{
        const currentPhone = getNumber;
        setPhoneNumber(currentPhone);
        
        const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!regex.test(currentPhone)) {
            //setPhoneMessage("올바른 형식이 아닙니다!");
            setphoneNumberValid(false);
        } else {
            //setPhoneMessage("사용 가능한 번호입니다:-)");
            setphoneNumberValid(true);
          //  handleChange(e.target);
        }
    }
    const handlePhoneNumber =(e)=>{
        const currentNumber = e.target.value;
        setPhoneNumber(currentNumber);
        if (currentNumber.length == 3 || currentNumber.length == 8) {
            setPhoneNumber(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevFormData) => ({
    //       ...prevFormData,
    //       [name]: value
    //     }));
    //   };



    const isAllValid = ()=>{
        // const {
        //     email,
        //     password,
        //     eachPassword,
        //     name,
        //     phoneNumber,
        //     birthday           
        //   } = userInput;
          return(
            email &&
            password &&
            eachPassword &&
            name &&
            phoneNumber &&
            //birthday && 
            emailnValid &&
            pwValid &&
            eachValid &&
            phoneNumberValid
          );
    };
    

    const activeBtn = isAllValid ? 'undefined' : 'disabled';

    const checkSignUp = (e) => {
        e.preventDefault();
        axios({
          method: 'POST',
          url:'노션 url 참고',
          data:{
            email: email,
            password: password,
            name: name,
            birthday: `${YEAR}-${MONTH}-${DAY}`,
            phoneNumber: phoneNumber,
          }
        }).then((response) => {
             if (response.ok === true) {
               return response.json();
             }
             throw new Error('에러 발생!');
            console.log(response);
          }).catch(error => alert(error))
          .then((data) => {
            if (data.ok === '회원가입 성공') {
              alert('회원가입 성공');
              <Link to="./page/LoginPage" />;
            } else {
              alert('회원가입 실패');
            }
          });
      };
    return(
        <div className="Page">
 
            <div className="titleWrap">
                <div>회원가입</div>
                <div>아이디</div>
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
                            <div>올바른 이메일 형식이 아닙니다.</div>
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
                <div className="errorMessageWrap">
                    {
                        !phoneNumberValid && phoneNumber.length > 0 &&(//휴대폰 번호가 제대로 입력되지 않았을 때 사용
                            <div>올바른 형식이 아닙니다.</div>
                        )
                    }   
                </div>
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
            <div className={`signupBtn ${activeBtn}`} onClick={checkSignUp}>
                가입하기
            </div>

        </div>
    );
}

export default JoinPage;