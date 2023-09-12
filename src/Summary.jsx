import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { userApi } from "./config";
const Summary = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUserData(userApi(username));
  }, []);
  const fetchUserData = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    setUser(data);
  };
  return (
    <div className="profile">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="image"
      />
      <h2 className="details">
        Username: {user.login}
      </h2>
      {user.name && <h4 className="details">Name: {user.name}</h4>}
      {user.bio && <h5 className="details" >Bio: {user.bio}</h5>}
      <button className="button">
        <a className="text-white" href={user.html_url}>Github Profile</a>
      </button>
    </div>
  );
};

export default Summary;