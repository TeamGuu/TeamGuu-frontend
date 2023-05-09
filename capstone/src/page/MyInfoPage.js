import React from "react";

//style
import styles from "./MyInfoPage.module.css";

//image
import myImg from "./myImg.png";

const MyInfoPage = (props) => {
    // 년
    const YEAR = [];

    const nowYear = new Date().getFullYear();
    for (let i = 1990; i <= nowYear; i++) {
    YEAR.push(i);
    }
g
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

    return(
        <div className={styles.myInfoWrap}>
            <div className={styles.leftWrap}>
                <div className={styles.titleTxt}>회원 정보</div>
                <div className={styles.myImg}>
                    <img src={myImg} alt="회원사진" />
                </div>
                <div className={styles.myProfile}>
                    <div className={styles.myName}>김띵지</div>
                    <div className={styles.myTeamName}>명지FC</div>
                </div>
            </div>
            <div className={styles.rightWrap}>
                <div className={styles.saveBtn}>저장</div>
                <div className={styles.list} style={{marginTop:"100px"}}>
                    <div className={styles.listTxt}>아이디</div>
                    <div className={styles.myId}>
                        <input 
                            placeholder="test@naver.com"
                            style={{textIndent:"10px"}}
                        />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.listTxt}>비밀번호</div>
                    <div className={styles.myPw}>
                        <input 
                            placeholder="testpassword"
                            style={{textIndent:"10px"}}
                        />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.listTxt}>휴대폰번호</div>
                    <div className={styles.myPhoneNum}>
                        <input 
                            placeholder="010-1234-5678"
                            style={{textIndent:"10px"}}
                        />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.listTxt}>생일</div>
                    <div className={styles.myBirth}>
                        <select className={styles.yearSelect} name="year" >
                            {YEAR.map(y => {
                                return <option key={y}>{y}</option>;
                            })}
                        </select>
                        <select className={styles.monthSelect} name="month" >
                            {MONTH.map(m => {
                                return <option key={m}>{m}</option>;
                            })}
                        </select>
                        <select className={styles.daySelect} name="day" >
                            {DAY.map(d => {
                                return <option key={d}>{d}</option>;
                            })}
                        </select>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.listTxt}>지역</div>
                    <div className={styles.myPlace}>
                        <select>
                            <option>--</option>
                            <option>서울</option>
                            <option>인천</option>
                            <option>경기</option>
                            <option>강원</option>
                            <option>충청</option>
                            <option>경상</option>
                            <option>전라</option>
                            <option>제주</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
        
    );
}

export default MyInfoPage;
