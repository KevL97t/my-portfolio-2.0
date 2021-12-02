import MainHeader from '../../Components/MainHeader/MainHeader';
import MainNavBar from '../../Components/MainNavBar/MainNavBar';
import './Home.css'

export const Home = ()=>{
    return(
        <div className="home-main-container">
            <MainHeader />
            <MainNavBar />
            <div className="home-about-container">
                
            </div>
        </div>
    );
}