import React, {useState, useEffect} from "react";
// import {data} from "./MatchListData.js"
import TextField from "@mui/material/TextField";
import axios from "axios";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import { Link, useNavigate } from "react-router-dom";
//styles
import styles from "./MatchListPage.module.css";
import TeamListPage from "./TeamListPage.js";

const MatchListPage = (props) => {

  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [MatchInfo, setMatchInfo] = useState([]); //불러온 매칭 목록 정보를 저장할 변수
  const [startDate, setStartDate] = useState(new Date());

  //페이지네이션 변수
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`http://www.teamguu.p-e.kr/api/matches/simple?page=${currentPage - 1}&size=${size}&sort=id,desc`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log("매칭목록 ? 조회성공");
        setMatchInfo(response.data.result.content);
        setTotalPages(response.data.result.totalPages);
        //console.log(response.data.result);
        console.log(response.data.result.content);
        
      })
      .catch((error) => {
        console.log(error);
        console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
      });
  }, [currentPage]);

  // const { 0: { date, id, place, simpleTeamInfo, status, title } } = MatchInfo;
  // const { id: teamId, name, sports, logoImageUrl, victory } = simpleTeamInfo;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    console.log(startDate.toISOString().split("T")[0]); // 선택한 날짜 출력
  };

  const handleClick = (e, item) => {
    e.preventDefault(); // 기본 동작 차단

    console.log(`매칭 ${item.id} 클릭됨`);

    // TeamInfoPage로 이동
    navigate(`/matches/${item.id}`);
  };

  return ( 
    <>
      <div className={styles.searchBar}>
        <div className={styles.hopelocal}>
            <div className={styles.hopelocalTxt}>
              지역
            </div>
            <div className={styles.hopelocalSelect}>
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
        <div className={styles.hopeDate}>
            <div className={styles.hopeDateTxt}>
              날짜
            </div>
            <div className={styles.hopeDateSelect}>
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
        <div className={styles.search}>
            <TextField
            id="outlined-basic"
            onChange={(e)=>setSearch(e.target.value)}
            variant="outlined"
            fullWidth
            label="팀명을 입력하세요."
            />
        </div>
      </div>
      <hr/>
      <div  className={styles.TableWrap}>
      <table className={styles.matchListTable}>
            <thead className={styles.tableHead}>
              <tr>
                <th>팀명</th>
                <th>전적</th>
                <th>경기지역</th>
                <th>날짜</th>
                <th>제목</th>
              </tr>
            </thead>
            {/* <tbody className={styles.tableBody}>
              {data.filter((item)=>{
                return search.toLowerCase() === '' 
                  ? item 
                  : item.name.toLowerCase().includes(search);
              }).map((item) => (
                <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.score}</td>
                    <td>{item.place}</td>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                </tr>
              ))}
            </tbody> */}

            <tbody className={styles.tableBody}>
                {MatchInfo.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.simpleTeamInfo.name.toLowerCase().includes(search);
                }).map((item) => (
                  <tr key={item.id}>
                    <td>
                      
                        {item.simpleTeamInfo.name}
                      
                    </td>
                    <td>{item.simpleTeamInfo.victory}승{item.simpleTeamInfo.defeat}패{item.simpleTeamInfo.draw}무</td>
                    <td>{item.place}</td>
                    <td>{item.date}</td>
                    <td>
                    <Link to={`/matches/${item.id}`} onClick={(e) => handleClick(e, item)} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {item.title}
                    </Link>
                    </td>
                  </tr>
                ))}
              </tbody>


        </table>
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? styles.active : ""}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
      
            
            
    </>
  );
}

export default MatchListPage;
