import React from "react";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";

//style
import styles from "./Navigation.module.css";

//image
import teamguuLogo from "./teamguuLogo.png";

const Navigation = () => {
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
                            <Link to="/page/TeamInfoPage"
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
                    <Link to="/page/LoginPage" style={{ textDecoration: "none", color:"black" }}>
                        <div className={styles.loginBtn}>로그인</div>
                    </Link>
                    <Link to="/page/JoinPage" style={{ textDecoration: "none", color:"black" }}>
                        <div className={styles.JoinBtn}>회원가입</div>
                    </Link>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;