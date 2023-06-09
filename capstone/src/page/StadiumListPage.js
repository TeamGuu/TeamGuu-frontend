import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./StadiumListPage.module.css";
// import stadium from "./stadium.png";

const StadiumListPage = (props) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [stadiumInfo, setStadiumInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    axios
      .get(
        `https://www.teamguu.o-r.kr/api/stadiums/simple?page=${currentPage - 1}&size=${size}&sort=id,desc`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log("조회 성공");
        setStadiumInfo(response.data.result.content);
        setTotalPages(response.data.result.totalPages);
        console.log(response.data.result.content);
      })
      .catch((error) => {
        console.log(error);
        console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
      });
  }, [currentPage]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClick = (e, item) => {
    e.preventDefault(); // 기본 동작 차단

    console.log(`매칭 ${item.id} 클릭됨`);

    // TeamInfoPage로 이동
    navigate(`/stadiums/${item.id}`);
  };

  const handlePlaceClick = (page) => {
    let selectedPage = 1; // Default to the first page
  
    switch (page) {
      case 8: // 서울
        selectedPage = 8;
        break;
      case 7: // 인천
        selectedPage = 7;
        break;
      case 6: // 경기
        selectedPage = 6;
        break;
      case 5: // 강원
        selectedPage = 5;
        break;
      case 4: // 충청
        selectedPage = 4;
        break;
      case 3: // 경상
        selectedPage = 3;
        break;
      case 2: // 전라
        selectedPage = 2;
        break;
      case 1: // 제주
        selectedPage = 1;
        break;
      default:
        selectedPage = 1;
        break;
    }
  
    setCurrentPage(selectedPage);
  };
  
  return (
    <>
      <div className={styles.topWrap}>
        <div className={styles.searchBar}>
          <div className={styles.search}>
            <TextField
              id="outlined-basic"
              onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
              fullWidth
              label="경기장 이름을 입력하세요."
            />
          </div>
        </div>
        <ul className={styles.placeNav}>
          <li onClick={() => handlePlaceClick(1)}>전체</li>
          <li onClick={() => handlePlaceClick(8)}>서울</li>
          <li onClick={() => handlePlaceClick(7)}>인천</li>
          <li onClick={() => handlePlaceClick(6)}>경기</li>
          <li onClick={() => handlePlaceClick(5)}>강원</li>
          <li onClick={() => handlePlaceClick(4)}>충청</li>
          <li onClick={() => handlePlaceClick(3)}>경상</li>
          <li onClick={() => handlePlaceClick(2)}>전라</li>
          <li onClick={() => handlePlaceClick(1)}>제주</li>
        </ul>

      </div>
      <div className={styles.bottomWrap}>
        <table className={styles.stadiumList}>
          <tbody className={styles.tableBody}>
            {stadiumInfo
              .filter((item) =>
                search.toLowerCase() === ""
                  ? true
                  : item.name.toLowerCase().includes(search)
              )
              .map((item) => (
                <tr key={item.id}>
                  <td>
                  <Link to={`/stadiums/${item.id}`} onClick={(e) => handleClick(e, item)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img
                      src={`https://teamguu.s3.ap-northeast-2.amazonaws.com/${item.imageUrl}`}
                      alt="경기장 이미지"
                    />
                   </Link> 
                  </td>
                  <td>
                  <Link to={`/stadiums/${item.id}`} onClick={(e) => handleClick(e, item)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.stadiumName}>{item.name}</div>
                    <br />
                    {item.location}
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
};

export default StadiumListPage;
