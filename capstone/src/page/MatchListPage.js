import React from "react";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";

const MatchListPage = props => {
    return (
        <>
          <div className="SearchBar">
            <div className="hopelocal">
                <h5>희망지역</h5>
                <select>
                    <option>서울~용인</option>
                </select>
            </div>
            <div className="hopetime">
                <h5>희망시간</h5>
                <select>
                <option>18pm~21pm</option>
                </select>
            </div>
            <div className="search">
                <form>
                    <input type='text' maxLength='20' className='search_input' name='search' placeholder='검색어를 입력해주세요.'/>
                    <input type='submit' value='검색' className='serach_submit'/>
                </form>
            </div>

          </div>
          <hr/>
          <CommonTable headersName={['팀이름', '프로필', '팀전적', '희망지역','희망시간','공고제목']}>
            <CommonTableRow>
              <CommonTableColumn>명지FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>서울~용인</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>명지FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>서울FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>서울~용인</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>서울FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>경기FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>서울~용인</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>경기FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>목포FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>서울~용인</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>목포FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
            <CommonTableRow>
              <CommonTableColumn>용인FC</CommonTableColumn>
              <CommonTableColumn>이미지</CommonTableColumn>
              <CommonTableColumn>35전20승15패</CommonTableColumn>
              <CommonTableColumn>서울~용인</CommonTableColumn>
              <CommonTableColumn>18pm~21pm</CommonTableColumn>
              <CommonTableColumn>용인FC와 겨룰팀을 구합니다.</CommonTableColumn>
            </CommonTableRow>
          </CommonTable>
        </>
      )
  }

export default MatchListPage;
