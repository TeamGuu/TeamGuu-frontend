import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';

//style
import styles from "./CreateMatchPage.module.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateMatchPage = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div>
            <div className={styles.topWrap}>
                <div className={styles.pageTitle}>매칭 공고 올리기</div>
                <div className={styles.registerBtn}>등록</div>
            </div>
            <div className={styles.bottomWrap}>
                <div className={styles.place}>
                    <div className={styles.selectTitle}>
                        장소    
                    </div>
                    <div className={styles.inputWrap}>
                        <select>
                            <option>전체</option>
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
                <div className={styles.day}>
                    <div className={styles.selectTitle}>
                        일시
                    </div>
                    <div className={styles.inputWrap}>
                        <DatePicker
                            className={styles.datePicker}
                            dateFormat="yyyy년 MM월 dd일" 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)} 
                            minDate={new Date()}
                            locale={ko}
                        />
                    </div>
                </div>
                <div className={styles.title}>
                    <div className={styles.selectTitle}>
                        제목
                    </div>
                    <div className={styles.inputWrap}>
                        <input 
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.selectTitle}>
                        내용
                    </div>
                    <div className={styles.inputWrap}>
                        <textarea
                            style={{marginTop:"30px", resize: "none"}}
                        />
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default CreateMatchPage;
