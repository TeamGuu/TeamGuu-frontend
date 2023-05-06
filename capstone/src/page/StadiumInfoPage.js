import React from "react";

//style
import styles from "./StadiumInfoPage.module.css";

//image
import stadium from "./stadium.png";

const StadiumInfoPage = (props) => {
    return(
        <div>
            <div className={styles.leftWrap}>
                <div className={styles.leftTitleTxt}>경기장 상세 정보</div>
                <div className={styles.stadiumImg}>
                    <img src={stadium} alt="경기장사진" />
                </div>
                <div className={styles.stadiumInfo}>
                    <div className={styles.stadiumName}>캄프누</div>
                    <div className={styles.stadiumPlace}>위치 : 스페인 카탈리냐주 바르셀로나</div>
                    <div className={styles.stadiumPhoneNum}>전화번호 : 010-1234-5678</div>
                    <div className={styles.stadiumHour}>이용시간 : 09:00 ~ 22:00</div>
                </div>
            </div>
            <div className={styles.rightWrap}>
                <div className={styles.rightTitleTxt}>경기장 예약 현황</div>
            </div>
        </div>
    );
}

export default StadiumInfoPage;