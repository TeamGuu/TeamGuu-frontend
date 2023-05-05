import React from "react";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";

//styles
import styles from "./MatchListPage.module.css";

const MatchListPage = props => {
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
                <form>
                    <input type='text' maxLength='20' className={styles.searchInput} name='search' placeholder='검색어를 입력해주세요.'/>
                    <input type='submit' value='검색' className={styles.searchSubmit}/>
                </form>
            </div>

          </div>
          <hr/>
          <CommonTable headersName={['팀이름', '프로필', '팀전적', '희망지역','희망시간','공고제목']}>
            <CommonTableRow>
              <CommonTableColumn>명지FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>서울</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>명지FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>서울FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>서울</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>서울FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>경기FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>용인</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>경기FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>목포FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>목포</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>목포FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>용인FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>인천</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>용인FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
          </CommonTable>
        </>
      )
  }

export default MatchListPage;
