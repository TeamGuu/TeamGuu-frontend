import React,{useState, useEffect} from "react";
import axios from "axios";
//style
import styles from "./MyInfoPage.module.css";

//image
import myImg from "./myImg.png";
import ImageUpload from "../components/ImageUpload";

const MyInfoPage = (props) => {

    const [memberInfo, setMemberInfo] = useState({ name: "", birth: "" ,username:""}); // 멤버 정보를 저장할 상태 변수
    const [newname, setnewname] = useState(""); //수정시 이름
    const [newphone, setnewPhone] = useState("");//수정시 핸드폰번호
    
    useEffect(() => {
        axios
          .get(`http://www.teamguu.p-e.kr/api/members`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log("조회성공");
            setMemberInfo(response.data.result);
            console.log(response.data.result);
            
          })
          .catch((error) => {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          });
      }, []);



      const { name, phone, username } = memberInfo;

      //수정시
      useEffect(() => {
        setnewname(name);
        setnewPhone(phone);
      }, [name, phone]);

    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");

      useEffect(() => {
        const birthDate = new Date(memberInfo.birth);
        setBirthYear(birthDate.getFullYear().toString());
        setBirthMonth((birthDate.getMonth() + 1).toString().padStart(2, "0"));
        setBirthDay(birthDate.getDate().toString().padStart(2, "0"));
      }, [memberInfo.birth]);

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

    //정보 수정할 때 
    const handleSave = () => {
      const updatedInfo = {
        ...memberInfo,
        birth: `${birthYear}-${birthMonth}-${birthDay}`,
        name: newname,
        phone: newphone,
      };
    
      axios
        .patch(`http://www.teamguu.p-e.kr/api/members`, updatedInfo, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          console.log("수정 성공");
          console.log(response.data);
          // 필요에 따라 추가 동작 수행 또는 UI 업데이트
          alert('프로필 정보를 업데이트했습니다!');
          // 페이지 새로고침
          window.location.reload();
        })
        .catch((error) => {
          console.log("수정 실패");
          console.log(error);
          alert('정보 수정 실패!');
        });
    };


    return(
        <div className={styles.myInfoWrap}>
            <div className={styles.leftWrap}>
                <div className={styles.titleTxt}>회원 정보</div>
                <div className={styles.myImg}>
                    <img src={myImg} alt="회원사진" />
                    <div className={styles.imgUploadBtn}>
                      <ImageUpload />
                    </div>
                </div>
                <div className={styles.myProfile}>
                    <div className={styles.myName}>{name}</div>
                </div>
            </div>
            <div className={styles.rightWrap}>
                <div className={styles.saveBtn} onClick={handleSave}>저장</div>
                <div className={styles.list} style={{marginTop:"130px"}}>
                    <div className={styles.listTxt}>아이디</div>
                    <div className={styles.myId}>
                        <input 
                             placeholder={username}
                            //  value={username}
                            //  onChange={(e) => setnewUsername(e.target.value)}
                             style={{ textIndent: "10px" }}
                        />
                    </div>
                </div>
                {/* <div className={styles.list}>
                    <div className={styles.listTxt}>비밀번호</div>
                    <div className={styles.myPw}>
                        <input 
                            placeholder="testpassword"
                            style={{textIndent:"10px"}}
                        />
                    </div>
                </div> */}
                <div className={styles.list}>
                    <div className={styles.listTxt}>휴대폰번호</div>
                    <div className={styles.myPhoneNum}>
                        <input 
                            placeholder={phone}
                            style={{textIndent:"10px"}}
                           // value={newphone}
                            onChange={(e) => setnewPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.listTxt}>생일</div>
                    <div className={styles.myBirth}>
                        <select
                            className={styles.yearSelect}
                            name="year"
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                            >
                            {YEAR.map((y) => (
                                <option key={y}>{y}</option>
                            ))}
                            </select>
                            <select
                            className={styles.monthSelect}
                            name="month"
                            value={birthMonth}
                            onChange={(e) => setBirthMonth(e.target.value)}
                            >
                            {MONTH.map((m) => (
                                <option key={m}>{m}</option>
                            ))}
                            </select>
                            <select
                            className={styles.daySelect}
                            name="day"
                            value={birthDay}
                            onChange={(e) => setBirthDay(e.target.value)}
                            >
                            {DAY.map((d) => (
                                <option key={d}>{d}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.listTxt}>이름</div>
                    <div className={styles.newName}>
                        <input 
                            placeholder={name}
                            //value={newname}
                            onChange={(e) => setnewname(e.target.value)}
                            style={{ textIndent: "10px" }}
                        />
                    </div>
                </div>

            </div>

        </div>
        
    );
}

export default MyInfoPage;
