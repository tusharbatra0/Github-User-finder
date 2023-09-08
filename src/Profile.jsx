const Profile=({image , name , githubprofile})=>{


    return(
        <>
        <div className="profile">
        <img className="image"
         src={image}
         alt="hero" />
        <h2>{name}</h2>
        
        <button className="button">
        <a href={githubprofile}>Visit Profile
        </a></button>
        </div>
        </>
    )
}
export default Profile