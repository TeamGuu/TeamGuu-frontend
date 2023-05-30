import React,{useState, useEffect} from "react";
import axios from "axios";
import {useParams, useNavigate, Link} from "react-router-dom";
//style
import styles from "./MatchInfoPage.module.css";

//image
import team from "./team.png";

const MatchInfoPage = (props) => {

    //서버에서 받아온 데이터 저장
    const { matchId } = useParams(); //선택한 글의 id를 가져옴
    
    const [matchInfo, setMatchInfo] = useState({ teamInfo: {} });
   
    //매칭 삭제시 화면전환
    const navigate = useNavigate();

    const [receiverUserEmail, setReceiverUserEmail] = useState(''); //사용안할수도 수정할수도
    const [senderUserEmail, setSenderUserEmail] = useState('');// 사용안할수도 수정할수도

    useEffect(() => {
        axios
        .get(`https://www.teamguu.o-r.kr/api/matches?matchId=${matchId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log('조회성공');
            setMatchInfo(response.data.result);
            //console.log(response.data.result);
          })
          .catch((error) => {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          });
    }, []);

    if (!matchInfo) {
        // 데이터가 로드되기 전에는 로딩 상태를 표시할 수 있습니다.
        return <div>Loading...</div>;
      };

      const { date, place, title, content, teamInfo } = matchInfo;
      const {
        id,
        name,
        intro,
        captain,
        sports,
        victory,
        draw,
        defeat,
        history,
        playerInfo,
      } = teamInfo;
   
         // Define a function to handle the click event of the delete button
  const handleClickDelete = (e) => {
    e.preventDefault();
    console.log(`팀 ${id} 클릭됨`);

    // Delete the team using Axios
    axios
      .delete(`https://www.teamguu.o-r.kr/api/matches?matchId=${matchId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        //console.log("삭제 성공");
        console.log(response);
        alert('매칭공고 삭제 성공');
        navigate(`/page/MatchListPage`);
      })
      .catch((error) => {
        console.log(error);
        console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
        alert('매칭공고 삭제 실패');
      });
  };

  //대결신청클릭 시 핸들러
  const handleMatch = (e) => {
    e.preventDefault();
  
    axios
      .get(`https://www.teamguu.o-r.kr/api/matches/chat?matchId=${matchId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log('매칭 신청 성공');
        console.log(response.data.result);
        console.log(response.data.result.receiverUsername);
        console.log(response.data.result.senderUsername);
        setReceiverUserEmail(response.data.result.receiverUsername);
        setSenderUserEmail(response.data.result.senderUsername);
        // receiverUserEmail과 senderUserEmail을 링크에 포함하여 생성
        navigate(`/ChatPage?receiverUserEmail=${response.data.result.receiverUsername}&senderUserEmail=${response.data.result.senderUsername}`);
      })
      .catch((error) => {
        console.log(error);
        console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
      });
  }
  
      
      return (
        <> 
          
          <div className={styles.challengeBtn} onClick={handleMatch}>
            <Link to={`/ChatPage?receiverUserEmail=${receiverUserEmail}&senderUserEmail=${senderUserEmail}`} style={{ textDecoration: "none", color: "black" }}>
              매칭신청하기
            </Link>
        </div>

             
          <div className={styles.deleteBtn} onClick={handleClickDelete}>매칭공고삭제</div>
          <div className={styles.matchWrap}>
            <div className={styles.topWrap}>
              <div className={styles.teamMainInfo}>
                <div className={styles.teamImg}>
                  <img src={team} alt="팀사진" />
                </div>
                <div className={styles.teamName}>{name}</div>
                <div className={styles.teamSports}>{sports}</div>
              </div>
              <div className={styles.teamInfo}>
                <div className={styles.teamIntro}>{intro}</div>
                <div className={styles.teamBoss}><b>주장 : </b>{captain}</div>
                <div className={styles.teamScore}>
                  <b>전적 : </b>{victory}승 {defeat}패 {draw}무
                </div>
                <div className={styles.teamHistory}><b>약력 : </b>{history}</div>
                <div className={styles.teammateInfo}><b>팀원 : </b>{playerInfo}</div>
              </div>
            </div>
            <div className={styles.bottomWrap}>
              <div className={styles.date}>날짜 : {date}</div>
              <div className={styles.place}>장소 : {place} </div>
              <div className={styles.matchNotice}>
                <div className={styles.matchTitle}>{title}</div>
                <div className={styles.matchContent}>{content}</div>
              </div>
            </div>
          </div>
        </>
      );
}

export default MatchInfoPage;