import React from "react";
import "../style/TeamInfoPage.css";
import {Link} from "react-router-dom";

//style
import styles from "./TeamInfoPage.module.css";

//image
import team from "./team.png";

const TeamInfoPage = (props) => {
    return(
        <div className={styles.contents}>
            <div className={styles.teamWrap}>
                <div className={styles.teamImg}>
                    <img src={team} alt="팀사진" />
                </div>
                <div className={styles.teamInfo}>
                    <li>명지FC</li>
                    <li>꿈과 희망이 있는 명지FC입니다.</li>
                    <br/>
                    <li>주장: 김띵지</li>
                    <li>종목: 축구</li>
                    <li>전적: 35전 20승 15패</li>
                    <li>약력: OO시대회 준우승</li>                        
                </div>
                
            </div>
            <div className={styles.teammateWrap}>
                <div className={styles.fixBtnArea}>
                    <Link to="/page/TeamInfoFixPage">
                        <button className={styles.fixBtn}>팀 정보 수정</button>
                    </Link>
                </div>
                <div className={styles.teammateInfo}>
                    <div className={styles.teammateTxt}>구성 팀원</div>
                    <div className={styles.teammateList}>
                        <ul>
                            <li>김짱구(ST)</li> 
                            <li>김철수(CAM)</li>
                            <li>박유리(RM)</li>
                            <li>나훈이(LM)</li>
                            <li>박진구(CDM)</li>
                            <li>박퉁퉁(CDM)</li>
                            <li>황비실(LB)</li>
                            <li>김이슬(LCB)</li>
                            <li>남도일(RCB)</li>
                            <li>장미(RB)</li>
                            <li>김띵지(GK)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default TeamInfoPage;
