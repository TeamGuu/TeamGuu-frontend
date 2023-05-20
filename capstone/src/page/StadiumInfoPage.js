import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';

//style
import styles from "./StadiumInfoPage.module.css";
import "react-datepicker/dist/react-datepicker.css";

//image
import stadium from "./stadium.png";

const StadiumInfoPage = (props) => {
    const [selectedTeamOption, setSelectedTeamOption] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const [teamInfo, setTeamInfo] = useState([]); // 팀 ID 저장용 상태 변수
    const [teamId, setTeamId] = useState(0); //선택된 팀의 id를 저장할 변수
  
    useEffect(() => {
      console.log(`선택된 팀의 아이디: ${teamId}`);
    }, [teamId]);

    useEffect(() => {
        axios
          .get("http://www.teamguu.p-e.kr/api/teams/simple", { //${stadiumId}
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log("팀 정보 조회성공");
            setTeamInfo(response.data.result);
            console.log(response.data.result);
            
          })
          .catch((error) => {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          });
      }, []);

    const handleDateChange = (date) => {
        setStartDate(date);
        console.log(startDate.toISOString().split("T")[0]); // 선택한 날짜 출력
    };

    const handleTeamChange = (event) => {
        setSelectedTeamOption(event.target.value); // 선택된 팀의 이름 저장
        const selectedTeam = teamInfo.find((team) => team.name === event.target.value); // 선택된 팀 정보 찾기
        if (selectedTeam) {
          console.log(selectedTeam.id); // 선택된 팀의 ID 출력
          setTeamId(selectedTeam.id);
        }
    };

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
                    <div className={styles.reserveWrap}>
                        <div className={styles.team}>
                            <div className={styles.selectTitle}>팀 선택</div>
                            <div className={styles.inputWrap}>
                            <select value={selectedTeamOption} onChange={handleTeamChange}>
                                <option value="">전체</option>
                                {teamInfo.map((team) => (
                                <option key={team.id} value={team.name}>{team.name}</option>
                                ))}
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
                        <div className={styles.time}>
                            <div className={styles.selectTitle}>
                                예약 시간
                            </div>
                            <div className={styles.inputWrap}>
                                <select>
                                    <option>----</option>
                                    <option>10:00</option>
                                    <option>12:00</option>
                                    <option>14:00</option>
                                    <option>16:00</option>
                                    <option>18:00</option>
                                    <option>20:00</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.nextBtn}>
                            다음 →
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StadiumInfoPage;