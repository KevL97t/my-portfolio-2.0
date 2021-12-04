import MainHeader from '../../Components/MainHeader/MainHeader';
import MainNavBar from '../../Components/MainNavBar/MainNavBar';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import Technologies from '../../Technologies/Technologies';
import './Home.css'


export const Home = ()=>{
    return(
        <div className="home-main-container">
            <MainHeader />
            <MainNavBar />
            <div className="home-about-container">
                <div className="about-info-container">
                    <ProfileCard />
                </div>
                <div className="info-technologies-container">
                    <h1 className="info-technologies__title">Technologies I feel comfortable with:</h1>
                    <Technologies />
                </div>
            </div>  
        </div>
    );
}