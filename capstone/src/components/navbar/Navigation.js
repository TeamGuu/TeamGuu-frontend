import React from "react";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand">
                        <Link to="/"><img src="teamguuLogo.png" alt="" width="300px" height="110px" /></Link>
                        </a>
                    </div>
                </nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="경기 매칭 신청" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/page/CreateMatchPage" 
                                style={{ textDecoration: "none", color:"black" }}>
                                    매칭 공고 제작
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/page/MatchListPage" 
                                style={{ textDecoration: "none", color:"black" }}>
                                    매칭 목록
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        <Link to="/page/StadiumListPage"
                            style={{ textDecoration: "none" }}>
                                경기장 정보
                        </Link>
                    </Nav.Link>
                    <NavDropdown title="마이페이지" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/page/MyInfoPage" 
                                style={{ textDecoration: "none", color:"black" }}>
                                    내 정보
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/page/TeamInfoPage"
                                style={{ textDecoration: "none", color:"black" }}>
                                    팀 정보
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/page/CreateTeamPage"
                                style={{ textDecoration: "none", color:"black" }}> 
                                    팀 생성
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <div className="loginJoin">
                    <Link to="/page/LoginPage" style={{ textDecoration: "none", color:"black" }}>
                        <div className="loginBtn">로그인</div>
                    </Link>
                    <Link to="/page/JoinPage" style={{ textDecoration: "none", color:"black" }}>
                        <div className="JoinBtn">회원가입</div>
                    </Link>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;