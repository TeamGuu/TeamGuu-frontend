import React, { useState, useEffect } from "react";
import "../style/TeamInfoPage.css";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
//style
import styles from "./TeamInfoPage.module.css";

//image
import team from "./team.png";



const TeamInfoPage = (props) => {

     //서버에서 받아온 데이터 저장
     const { teamId } = useParams();
     const navigate = useNavigate();
     const [teamInfo, setTeamInfo] = useState({});
   
     useEffect(() => {
       axios
         .get(`http://www.teamguu.p-e.kr/api/teams?teamId=${teamId}`, {
           headers: {
             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         })
         .then((response) => {
           console.log("조회성공"); //5-20 머지
           setTeamInfo(response.data.result);
           console.log(response.data.result);
         })
         .catch((error) => {
           console.log(error);
           console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
         });
     }, [teamId]);
    
    const { id, name, intro, captain, sports, victory, draw, defeat, history, playerInfo } = teamInfo;

    const handleClick = (e, myid) => {
        e.preventDefault();
        console.log(`팀 ${myid} 클릭됨`);
        // TeamInfoFixPage로 이동
        navigate(`/teams/${myid}/edit`);
      };
    
    // Define a function to handle the click event of the delete button
  const handleClickDelete = (e) => {
    e.preventDefault();
    console.log(`팀 ${id} 클릭됨`);

    // Delete the team using Axios
    axios
      .delete(`http://www.teamguu.p-e.kr/api/teams?teamId=${teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        //console.log("삭제 성공");
        console.log(response);
        alert('팀 삭제 성공');
        navigate(`/page/TeamListPage`);
      })
      .catch((error) => {
        console.log(error);
        console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
        alert('팀 삭제 실패');
      });
  };

    return (
        <div className={styles.contents}>
            <div className={styles.teamWrap}>
                <div className={styles.teamImg}>
                    <img src={team} alt="팀사진" />
                </div>
                <div className={styles.teamInfo}>
                    <li>{name}</li>
                    <li>{intro}</li>
                    <br/>
                    <li>주장: {captain}</li>
                    <li>종목: {sports}</li>
                    <li>전적: {victory}승 {draw}무 {defeat}패</li>
                    <li>약력: {history}</li>                        
                </div>
            </div>
            <div className={styles.teammateWrap}>
                 <div className={styles.BtnArea}>
                    <div key = {id}>
                        <Link
                            to={`/teams/${id}`} className={styles.fixBtn}
                            onClick={(e) => handleClick(e, id)}
                            
                        >
                            팀 정보 수정
                        </Link>
                        

                    </div>
                    
                    
                    <button
                        className={styles.deleteBtn}
                        onClick={handleClickDelete}
                    >
                    팀 삭제
                    </button>
                    
                </div>
                <div className={styles.teammateInfo}>
                    <div className={styles.teammateTxt}>구성 팀원</div>
                    <hr></hr>
                    <div className={styles.teammateList}>
                        <ul>
                            <li>{playerInfo}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default TeamInfoPage;
