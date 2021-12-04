import './ProfileCard.css'


function ProfileCard() {
    return (
        <div className="about-container__info">
            <img className="about-container__info--icon" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
            <h1 className="about-container__info--title">About me</h1>
            <p className="about-container__info--text">Hello there!, my name is Kevin, I'm a web developer who loves coding and <strong>creating</strong> new stuff, engineer from the bottom of my heart. I like just as equals frontend and backend sides, I prefer to be able to work on both. I love <strong>solving</strong> problems, sporting and creating stuff.</p>
         </div>
    );
}

export default ProfileCard;