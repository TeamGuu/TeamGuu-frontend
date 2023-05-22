import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';
import {useParams} from "react-router-dom";

//style
import styles from "./StadiumInfoPage.module.css";
import "react-datepicker/dist/react-datepicker.css";

//image
import stadium from "./stadium.png";

const StadiumInfoPage = (props) => {
     //서버에서 받아온 데이터 저장
     const { stadiumId } = useParams(); //선택한 글의 id를 가져옴
    
    const [startDate, setStartDate] = useState(new Date());

    const [stadiumInfo, setStadiumInfo] = useState({ simpleStadiumInfo: {} });

    //팀 정보 관련
    const [teamInfo, setTeamInfo] = useState([]); // 팀 ID 저장용 상태 변수
    const [teamId, setTeamId] = useState(0); //선택된 팀의 id를 저장할 변수
    const [selectedTeamOption, setSelectedTeamOption] = useState('');
  
    //시간 관련 저장 변수
    const [selectedTime, setSelectedTime] = useState('');


    useEffect(() => {
      console.log(`선택된 경기장의 아이디: ${stadiumId}`);
    }, [stadiumId]);
    useEffect(() => {
        console.log(`선택된 팀의 아이디: ${teamId}`);
      }, [teamId]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const stadiumResponse = await axios.get(
              `http://www.teamguu.p-e.kr/api/stadiums?stadiumId=${stadiumId}`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
              }
            );
            const teamResponse = await axios.get(
              "http://www.teamguu.p-e.kr/api/teams/simple",
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
              }
            );
      
            const stadiumData = stadiumResponse.data.result;
            const teamData = teamResponse.data.result;
      
            // 데이터 처리 로직을 수행합니다.
            setStadiumInfo(stadiumData);
            setTeamInfo(teamData);
            console.log(stadiumData);
            console.log(teamData);
          } catch (error) {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          }
        };
      
        fetchData();
      }, [stadiumId]);
      

    const {closeTime, openTime, phone, simpleStadiumInfo} = stadiumInfo;
    const {
        id,
        imageUrl,
        location,
        name,
      } = simpleStadiumInfo;

      if (!stadiumInfo) {
        // 데이터가 로드되기 전에는 로딩 상태를 표시할 수 있습니다.
        return <div>Loading...</div>;
      };  

    

    //날짜 선택시 핸들작용 코드
    const handleDateChange = (date) => {
        setStartDate(date);
        console.log(startDate.toISOString().split("T")[0]); 
    };

    //팀 선택 시 핸들작용 코드
    const handleTeamChange = (event) => {
        setSelectedTeamOption(event.target.value); // 선택된 팀의 이름 저장
        const selectedTeam = teamInfo.find((team) => team.name === event.target.value); // 선택된 팀 정보 찾기
        if (selectedTeam) {
          console.log(selectedTeam.id); // 선택된 팀의 ID 출력
          setTeamId(selectedTeam.id);
        }
      };

    //시간 선택 시 핸들작용 코드
    const handleTimeChange = (event) => {
        const selectedValue = event.target.value; // 선택한 값 가져오기
        setSelectedTime(selectedValue); // 상태 변수에 저장
        
      };

    return(
        <div>
            <div className={styles.leftWrap}>
                <div className={styles.leftTitleTxt}>경기장 상세 정보</div>
                <div className={styles.stadiumImg}>
                    <img src={`https://teamguu.s3.ap-northeast-2.amazonaws.com/${imageUrl}`} alt="경기장사진" />
                </div>
                <div className={styles.stadiumInfo}>
                    <div className={styles.stadiumName}>{name}</div>
                    <div className={styles.stadiumPlace}>위치 : {location}</div>
                    <div className={styles.stadiumPhoneNum}>전화번호 : {phone}</div>
                    <div className={styles.stadiumHour}>이용시간 : {openTime} ~ {closeTime}</div>
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
                            <div className={styles.inputWrap} onChange={handleTimeChange}>
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