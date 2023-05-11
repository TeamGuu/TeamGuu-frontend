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
                    <div className={styles.teamMainInfo}>
                        <div className={styles.teamImg}>
                            <img src={team} alt="팀사진" />
                        </div>
                        <div className={styles.teamName}>명지FC</div>
                        <div className={styles.teamSports}>축구</div>
                    </div> 
                    <div className={styles.teamInfo}>    
                        <div className={styles.teamIntro}>안녕하세요. 우리는 명지FC입니다. 
                            저희는 명지대 재학생, 졸업생으로 이뤄져 있고 2013년부터 이어져 온 근본있는 축구팀입니다.
                            새로운 인재는 언제든 환영이고요. 캡스톤 너무 힘드네요.
                        </div>
                        <div className={styles.teamBoss}>주장 : 김띵지</div>    
                        <div className={styles.teamScore}>전적 : 35전 15승 20패</div>
                        <div className={styles.teamHistory}>약력 : 용인시 대회 준우승</div>
                        <div className={styles.teammateInfo}>팀원 : 김짱구(ST), 김철수(CAM), 박유리(RM)
                            , 나훈이(LM), 박진구(CDM), 박퉁퉁(CDM)
                            , 황비실(LB), 김이슬(LCB), 남도일(RCB)
                            , 장미(RB), 김띵지(GK)</div>
                    </div>    
                </div>
                <div className={styles.bottomWrap}>
                    <div className={styles.date}>날짜 : 2023-05-23</div>
                    <div className={styles.time}>시간 : 11:00</div>
                    <div className={styles.place}>장소 : 경기 </div>
                    <div className={styles.matchNotice}>
                        <div className={styles.matchTitle}>용인에서 축구 대결할 사람을 구합니다!</div>
                        <div className={styles.matchContent}>용인시에서 활동하는 명지FC입니다. 5월 23일이고 시간은 
                            오전 11시가 좋은데 추후 협의 가능합니다. 많은 연락 주세요~
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default MatchInfoPage;