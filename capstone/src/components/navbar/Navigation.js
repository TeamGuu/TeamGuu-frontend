import React, {useState,useEffect} from "react";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";
//style
import styles from "./Navigation.module.css";

//image
import teamguuLogo from "./teamguuLogo.png";

const Navigation = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

  
    const logout = () => {
        // 엑세스 토큰 제거
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false); // 로그아웃 상태로 변경
        // 로그아웃 요청을 보낼 때는 토큰을 전송하지 않아야 함
        axios.post("http://43.201.242.0:8080/api/auth/logout")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        // 엑세스 토큰이 로컬 스토리지에 존재하는지 확인
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            axios.get("http://www.teamguu.p-e.kr/api", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((response) => {
                    console.log('조회 성공');
                    setIsAuthenticated(true);
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    console.log(`엑세스 토큰: ${accessToken}`);
                    console.log('실패'); 
                });
        }
    }, []);

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <nav className="navbar navbar-light bg-light">
                    <div className={styles.container}>
                        <a className="navbar-brand">
                        <Link to="/"><img src={teamguuLogo} alt="로고" width="300px" height="110px" /></Link>
                        </a>
                    </div>
                </nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={styles.menubar}>
                    <NavDropdown title="경기 매칭 신청" id={styles.dropdownNav}>
                        <NavDropdown.Item>
                            <Link to="/page/CreateMatchPage" 
                                style={{ textDecoration: "none", color:"black" }}>
                                    <div id={styles.subMenuTxt}>매칭 공고 제작</div>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/page/MatchListPage" 
                                style={{ textDecoration: "none", color:"black" }}>
                                    <div id={styles.subMenuTxt}>매칭 목록</div>
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        <Link to="/page/StadiumListPage"
                            style={{ textDecoration: "none", color:"black" }}>
                                <div id={styles.fixNav}>경기장 정보</div>
                        </Link>
                    </Nav.Link>
                    <NavDropdown title="마이페이지" id={styles.dropdownNav}>
                        <NavDropdown.Item>
                            <Link to="/page/MyInfoPage" 
                                style={{ textDecoration: "none", color:"black" }}>
                                    <div id={styles.subMenuTxt}>내 정보</div>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/page/TeamListPage"
                                style={{ textDecoration: "none", color:"black" }}>
                                    <div id={styles.subMenuTxt}>팀 정보</div>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/page/CreateTeamPage"
                                style={{ textDecoration: "none", color:"black" }}> 
                                    <div id={styles.subMenuTxt}>팀 생성</div>
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <div className={styles.loginJoin}>
                   {isAuthenticated ? (
                        // 로그인 상태인 경우 로그아웃 버튼 표시
                        <div onClick={logout} className={styles.logoutBtn}>로그아웃</div>
                        ) : (
                        // 로그인 상태가 아닌 경우 로그인/회원가입 버튼 표시
                        <div className={styles.loginJoin}>
                            <Link to="/page/LoginPage" style={{ textDecoration: "none", color:"black" }}>
                            <div className={styles.loginBtn}>로그인</div>
                            </Link>
                            <Link to="/page/JoinPage" style={{ textDecoration: "none", color:"black" }}>
                            <div className={styles.JoinBtn}>회원가입</div>
                            </Link>
                        </div>
                    )}
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;