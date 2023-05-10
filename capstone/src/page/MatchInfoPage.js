import React from "react";

//style
import styles from "./MatchInfoPage.module.css";

//image
import team from "./team.png";

const MatchInfoPage = (props) => {
    return(
        <>
            <div className={styles.matchWrap}>
                
                <div className={styles.topWrap}> 
                    <div className={styles.teamImg}>
                        <img src={team} alt="팀사진" />
                    </div>
                    <div className={styles.teamMainInfo}>    
                        <div className={styles.teamName}>명지FC</div>
                        <div className={styles.teamIntro}>한줄 소개</div>
                        <div className={styles.teamSports}>종목</div>
                    </div>  
                    <div className={styles.teamSubInfo}>  
                        <div className={styles.teamBoss}>주장</div>    
                        <div className={styles.teamScore}>전적</div>
                        <div className={styles.teamHistory}>약력</div>
                        <div className={styles.teammateInfo}>팀원정보</div>
                    </div>
                </div>
                <div className={styles.bottomWrap}>
                    <div className={styles.date}>날짜 : </div>
                    <div className={styles.place}>장소 : </div>
                    <div className={styles.matchTitle}>제목</div>
                    <div className={styles.matchContent}>내용</div>
                </div>
                <div className={styles.please}>제발</div>
            </div>
        </>
    );
}

export default MatchInfoPage;