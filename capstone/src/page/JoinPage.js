//회원가입 페이지
import React from "react";
import { useNavigate} from "react-router-dom";

import { useState } from "react";
import axios from 'axios';

//styles
import styles from "./JoinPage.module.css";

//이거그냥 갖다쓰는게 나을수도.. 직접 해보긴했는데 코드가 안먹음
const JoinPage=(props)=>{ 

    

    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [eachPassword,setEachPassword] = useState('');
    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const birth = `${year}-${month}-${day}`;
    
    const [emailnValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);
    const [eachValid,setEachValid] = useState(false);
    const [phoneNumberValid,setphoneNumberValid] = useState(false);

    // 1900년부터 2023년까지의 년도를 생성
    const yearOptions = [];
    for (let i = 1990; i <= 2023; i++) {
    yearOptions.push(<option value={i}>{i}</option>);
    }

    // 1월부터 12월까지의 월을 생성
    const monthOptions = [];
    for (let i = 1; i <= 12; i++) {
        const monthValue = i < 10 ? `0${i}` : i;
        monthOptions.push(<option value={monthValue}>{monthValue}</option>);
    }

    // 1일부터 31일까지의 일을 생성
    const dayOptions = [];
    for (let i = 1; i <= 31; i++) {
        const dayValue = i < 10 ? `0${i}` : i;
        dayOptions.push(<option value={dayValue}>{dayValue}</option>);
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

   
    const handlePassword = (e) => {//올바른 비밀번호 형식으로 패스워드를 입력할 경우 경고문이 사라짐
        setPassword(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\()\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\()\- _=+]).{8,20}$/;
        
        if (regex.test(password)) {
          setPwValid(true);
        } else {
          setPwValid(false);
        }
      };
      

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

  



    // const isAllValid = ()=>{
    //     // const {
    //     //     email,
    //     //     password,
    //     //     eachPassword,
    //     //     name,
    //     //     phoneNumber,
    //     //     birthday           
    //     //   } = userInput;
    //       return(
    //         email &&
    //         password &&
    //         eachPassword &&
    //         name &&
    //         phoneNumber &&
    //         //birthday && 
    //         emailnValid &&
    //         pwValid &&
    //         eachValid &&
    //         phoneNumberValid
    //       );
    // };
    const isAllValid = () => {
        return (
          email &&
          password &&
          eachPassword &&
          name &&
          phoneNumber &&
          birth &&
          emailnValid &&
          pwValid &&
          eachValid &&
          phoneNumberValid
        );
      };
      

    const activeBtn = isAllValid ? 'undefined' : 'disabled';

    

    const checkSignUp = (e) => {
        e.preventDefault();
        console.log(birth);
        

        const requestBody = {
            username: email,
            password: password,
            name: name,
            phone: phoneNumber,
            birth: birth
          };

        axios.post('https://www.teamguu.o-r.kr/api/auth/sign-up', requestBody)
        .then((response) => {

            
            console.log(response);
            console.log(response.data.result);
            setId(response.data.result.id);
            alert('회원가입이 완료되었습니다.');



            
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
            alert('회원가입에 실패했습니다.');
            
          });  
      };


    return(
        <div>
            <div className={styles.joinWrap}>
                <div className={styles.joinTitleTxt}>회원가입</div>
                <div className={styles.elementWrap}>
                
                    <div className={styles.elementTxt}>아이디</div>
                    <input
                        type='text'
                        className={styles.elementInput}
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handleEmail}
                        
                    />
                    <div className={styles.errorMessageWrap}>
                        {
                            !emailnValid && email.length > 0 &&(//이메일이 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                                <div style={{color:"#cf0000"}}>올바른 이메일 형식이 아닙니다.</div>
                            )
                        }
                    </div>

                    <div className={styles.elementTxt}>비밀번호</div>
                    <input 
                        type='text'
                    className={styles.elementInput}
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={password}
                        onChange={handlePassword}
                    />
                    <div className={styles.errorMessageWrap}>
                        {
                            !pwValid && password.length > 0 &&(//비밀번호가 valid하지 않았을 때와 아무것도 입력하지 않았을 때 사용
                            <div style={{color:"#cf0000"}}>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                        }   
                    </div>

                    <div className={styles.elementTxt}>비밀번호 확인</div>
                    <input 
                        type='text'
                        className={styles.elementInput}
                        value={eachPassword}
                        onChange={handleEachPassword}
                    />
                    <div className={styles.errorMessageWrap}>
                        {
                            !eachValid && eachPassword.length > 0 &&(//기존 비밀번호가 비밀번호 확인하고 일치하지 않았을 때 사용
                                <div style={{color:"#cf0000"}}>비밀번호가 다릅니다.</div>
                            )
                        }   
                    </div>

                    <div className={styles.elementTxt}>이름</div>
                    <input 
                        type='text'
                        className={styles.elementInput}
                        value={name}
                        onChange={handleName}
                    />
                    <div className={styles.errorMessageWrap}>
                        {/* {
                            !nameValid && name.length > 0 &&(//기존 비밀번호가 비밀번호 확인하고 일치하지 않았을 때 사용
                                <div>한글만 입력해주세요.</div>
                            )
                        }    */}
                    </div>

                    <div className={styles.elementTxt}>휴대폰 번호</div>
                    <input
                        type='text'
                        className={styles.elementInput}
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                    />
                    <div className={styles.errorMessageWrap}>
                        {
                            !phoneNumberValid && phoneNumber.length > 0 &&(//휴대폰 번호가 제대로 입력되지 않았을 때 사용
                                <div style={{color:"#cf0000"}}>올바른 형식이 아닙니다.</div>
                            )
                        }   
                    </div>

                    <div className={styles.elementTxt}>생년월일</div>
                        <select style={{fontSize:"16px", width:"90px", height:"35px", textAlign:"center"}} 
                            value={year} onChange={(e) => setYear(e.target.value)}>
                             <option value="">--년도--</option>
                            {yearOptions}
                        </select>
                        <select style={{fontSize:"16px", width:"90px", height:"35px", textAlign:"center", marginLeft:"10px"}}
                            value={month} onChange={(e) => setMonth(e.target.value)}>
                            <option value="">--월--</option>
                            {monthOptions}
                        </select>
                        <select style={{fontSize:"16px", width:"90px", height:"35px", textAlign:"center", marginLeft:"10px"}}
                            value={day} onChange={(e) => setDay(e.target.value)}>
                            <option value="">--일--</option>
                            {dayOptions}
                        </select>
                </div>    
            </div>
            {/* <div className={`signupBtn ${activeBtn}`} onClick={checkSignUp}>
                가입하기
            </div> */}
            <div className={styles.signupBtn} onClick={checkSignUp}>가입하기</div>

        </div>
    );
}

export default JoinPage;