import React from "react";

const NewMatchListTable = () => {
    return (
        <table>
            <thead>
              <tr>
                <th colSpan={3}>
                    최근 매칭 신청
                    <button className="plusBtn">+ 더보기</button>
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>사진</td>
                    <td><b>레알 마드리드</b><br/>35전 20승 15패<br/>축구</td>
                    <td>장소 : 용인시 역북동<br/>시간 : 15시 ~ 17시<br/>우리랑 경기할 사람? 채팅주세요. 이번주 주말...</td>
                </tr>
                <tr>
                    <td>사진</td>
                    <td><b>바르셀로나</b><br/>28전 20승 8패<br/>농구</td>
                    <td>장소 : 서울시 한남동<br/>시간 : 17시 ~ 19시<br/>우리 엄청 잘함. 농구 같이 하실?</td>
                </tr>
                <tr>
                    <td>사진</td>
                    <td><b>멘체스터 유나이티드</b><br/>13전 5승 8패<br/>축구</td>
                    <td>장소 : 서울시 꺄륵동<br/>시간 : 12시 ~ 13시<br/>서울 동 상관없이 아무데나 갑니다. 경기할 사...</td>
                </tr>
                <tr>
                    <td>사진</td>
                    <td><b>바이에른 뮌헨</b><br/>6전 4승 2패<br/>축구</td>
                    <td>장소 : 인천시 구월동<br/>시간 : 9시 ~ 11시<br/>우리랑 경기할 사람? 채팅주세요. 이번주 주말...</td>
                </tr>
                <tr>
                    <td>사진</td>
                    <td><b>리버풀</b><br/>27전 15승 12패<br/>야구</td>
                    <td>장소 : 전주시 중동<br/>시간 : 12시 ~ 14시<br/>전주에서 우리랑 야구할 사람? 끝나고 비빔밥...</td>
                </tr>
            </tbody>
        </table>
    );
}

export default NewMatchListTable;