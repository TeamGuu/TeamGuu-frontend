import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import {data} from "./StadiumListData.js" //테스트용 더미데이터

//style
import styles from "./StadiumListPage.module.css";

//image
import stadium from "./stadium.png";

const StadiumListPage = (props) => {
    const [search, setSearch] = useState('');

    return(
        <>
            <div className={styles.topWrap}>
                <div className={styles.searchBar}>
                    <div className={styles.search}>
                        <TextField
                        id="outlined-basic"
                        onChange={(e)=>setSearch(e.target.value)}
                        variant="outlined"
                        fullWidth
                        label="경기장 이름을 입력하세요."
                        />
                    </div>
                </div>
                <ul className={styles.placeNav}>
                    <li>전체</li>
                    <li>서울</li>
                    <li>인천</li>
                    <li>경기</li>
                    <li>강원</li>
                    <li>충청</li>
                    <li>경상</li>
                    <li>전라</li>
                    <li>제주</li>
                </ul>
            </div>
            <div className={styles.bottomWrap}>
                <table className={styles.stadiumList}>
                    <tbody className={styles.tableBody}>
                        {data.filter((item)=>{
                            return search.toLowerCase() === '' 
                            ? item 
                            : item.name.toLowerCase().includes(search);
                        }).map((item) => (
                            <tr key={item.name}>
                                <td>{item.image}</td>
                                <td><div className={styles.stadiumName}>{item.name}</div><br/>위치: {item.place}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
        
    );
}

export default StadiumListPage;
