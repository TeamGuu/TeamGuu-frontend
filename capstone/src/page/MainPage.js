import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
//style
import styles from "./MainPage.module.css";

//components
import NewMatchListTable from "../components/table/NewMatchListTable";
import BestStadiumListTable from "../components/table/BestStadiumListTable";

const MainPage = (props) => {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          // 토큰이 존재하는 경우, 유효성 검사 등 필요한 추가 작업을 수행할 수 있습니다.
          setIsAuthenticated(true);
        } else {
          // 토큰이 없는 경우 로그인 페이지로 이동합니다.
          navigate('/page/LoginPage');
        }
      }, [navigate]);

    return(
        <div className={styles.contents}>
            <div className={styles.newMatchList}>
                <NewMatchListTable />
            </div>
            <div className={styles.stadiumList}>
                <BestStadiumListTable />
            </div>
        </div>    
    );
}

export default MainPage;