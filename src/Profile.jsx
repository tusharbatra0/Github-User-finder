import { Link } from "react-router-dom";
const Profile = ({ image, name, username }) => {
    return (
        <>
  <div className="profile">
 <img className="image" src={image} alt="hero" />
<h2>{name}</h2>
 <Link to={`/user/${username}`}>
     <button>Show Profile</button>
   </Link>
    </div>
  </>
    );
};
export default Profile;