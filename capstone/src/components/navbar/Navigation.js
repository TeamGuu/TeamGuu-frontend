import React from "react";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                        <img src="logo.png" alt="" width="300px" height="120px" />
                        </a>
                    </div>
                </nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="경기 매칭 신청" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="Match/CreateMatchPage">매칭 공고 제작</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="Match/MatchListPage">매칭 목록</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="StadiumListPage">경기장 정보</Nav.Link>
                    <NavDropdown title="마이페이지" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="MyPage/MyInfoPage">내 정보</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="MyPage/TeamInfoPage">팀 정보</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="MyPage/CreateTeamPage">팀 생성</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="LoginPage">로그인</Nav.Link>
                    <Nav.Link href="JoinPage">회원가입</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;