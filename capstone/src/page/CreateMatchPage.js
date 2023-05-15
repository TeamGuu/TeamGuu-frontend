import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';
//style
import styles from "./CreateMatchPage.module.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateMatchPage = (props) => {
    const [selectedOption, setSelectedOption] = useState('전체');
    const [startDate, setStartDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleOptionChange(event) {
        console.log(event.target.value);
      setSelectedOption(event.target.value);
    }

    const handleDateChange = (date) => {
        setStartDate(date);
        console.log(startDate.toISOString().split("T")[0]); // 선택한 날짜 출력
      };

    const handleTitleChange = (e) => {
       setTitle(e.target.value);
      console.log(title);
   };

    const handleContentChange = (e) => {
      setContent(e.target.value);
      console.log(content);
    };

  const handleSubmit = (e) => {
 
    // 이후 서버로 제출하는 로직 작성   
    e.preventDefault();

        

    const requestBody = {
        place: selectedOption,
        date: startDate.toISOString().split("T")[0],
        title: title,
        content: content
      };

    axios.post('http://www.teamguu.p-e.kr/api/matches?teamId=1', requestBody, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
    .then((response) => {
        console.log(response);
        alert('매칭 공고 등록이 완료되었습니다.');
        
      })
      .catch((error) => {
        console.error(error);
        alert('매칭 공고 등록에 실패했습니다.');
        
      }); 
  };

    return(
        <div>
            <div className={styles.topWrap}>
                <div className={styles.pageTitle}>매칭 공고 올리기</div>
                <div className={styles.registerBtn } onClick={handleSubmit}>등록</div>
            </div>
            <div className={styles.bottomWrap}>
                <div className={styles.place}>
                    <div className={styles.selectTitle}>
                        장소    
                    </div>
                    <div className={styles.inputWrap}>
                      <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="전체">전체</option>
                            <option value="서울">서울</option>
                            <option value="인천">인천</option>
                            <option value="경기">경기</option>
                            <option value="강원">강원</option>
                            <option value="충청">충청</option>
                            <option value="경상">경상</option>
                            <option value="전라">전라</option>
                            <option value="제주">제주</option>
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
                            onChange={handleDateChange}
                            minDate={new Date()}
                            locale={ko}
                        />
                    </div>
                </div>
                <div className={styles.title}>
                    <div className={styles.selectTitle}>제목</div>
                    <div className={styles.inputWrap}>
                         <input value={title} onChange={handleTitleChange} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.selectTitle}>내용</div>
                    <div className={styles.inputWrap}>
                        <textarea
                            value={content}
                            onChange={handleContentChange}
                            style={{ marginTop: "30px", resize: "none" }}
                        />
                    </div>
                
                </div>
            </div>
        </div>
        
        
    );
}

export default CreateMatchPage;