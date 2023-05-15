import React, {useState} from "react";
import {data} from "./MatchListData.js"
import TextField from "@mui/material/TextField";

//styles
import styles from "./MatchListPage.module.css";

const MatchListPage = (props) => {

  const [search, setSearch] = useState('');

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
        <div className={styles.hopetime}>
            <div className={styles.hopetimeTxt}>
              시작시간
            </div>
            <div className={styles.hopetimeSelect}>
              <select>
                <option>전체</option>
                <option>24:00</option>
                <option>01:00</option>
                <option>02:00</option>
                <option>03:00</option>
                <option>04:00</option>
                <option>05:00</option>
                <option>06:00</option>
                <option>07:00</option>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00(낮 12시)</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                <option>23:00</option>
              </select>
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
      <div className={styles.TableWrap}>
      <table className={styles.matchListTable}>
            <thead className={styles.tableHead}>
              <tr>
                <th>팀명</th>
                <th>전적</th>
                <th>경기지역</th>
                <th>시작시간</th>
                <th>제목</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {data.filter((item)=>{
                return search.toLowerCase() === '' 
                  ? item 
                  : item.name.toLowerCase().includes(search);
              }).map((item) => (
                <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.score}</td>
                    <td>{item.place}</td>
                    <td>{item.time}</td>
                    <td>{item.title}</td>
                </tr>
              ))}
                
            </tbody>
        </table>
      </div>
      
            
            
    </>
  );
}

export default MatchListPage;
