import React from "react";

//style
import styles from "./CreateMatchPage.module.css";

const CreateMatchPage = (props) => {
    return(
        <div>
            <div className={styles.topWrap}>
                <div className={styles.title}>매칭 공고 올리기</div>
                <div className={styles.registerBtn}>등록</div>
            </div>
            <div className={styles.bottomWrap}>
                <div className={styles.place}>
                    <div className={styles.title}>
                        장소    
                    </div>
                    
                </div>
                <div className={styles.day}>
                    <div className={styles.title}>
                        일시
                    </div>
                </div>
                <div className={styles.Title}>
                    <div className={styles.title}>
                        제목
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        내용
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default CreateMatchPage;
