import Profile from "./Profile";
import { useState , useEffect } from "react"
import { users_url , userApi } from "./config";
import Loader from "./Loader";

const GithubFinder = () => {
// InputValue
    const [inputValue , setinputValue] = useState("")
    const [users, SetUsers] = useState([])
    

// Fetching API
const fetchUsers = async (URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
    //   console.log(data)
      SetUsers(data)
    } catch (e) {
      console.log(e);
    }
    
  };
    
  const fetchUserByUsername = async (URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      SetUsers([data]);
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    fetchUsers(users_url);
  }, []);

// Onchange handle
 function handleChange(e){
  setinputValue(e.target.value)
 } 

//  Search button
function Search(){
    const api = userApi(inputValue);
    fetchUserByUsername(api);
}


    return(
    <>
    <div className="main-container">
        <h1>Github User Finder</h1>
    <div className="hero">
      <input
      
      className="input"
      type="text"
      placeholder="Enter Username"
      onChange={handleChange}
      />  
      <button className="button" onClick={Search}>Search</button>
    </div>
    <div className="profile-container">

    {users?.length === 0 ? (
  <Loader />
) : (
  users.map((item) => (
    <Profile
      key={item.id}
      image={item.avatar_url}
      name={item.login}
      githubprofile={item.html_url}
    />
  ))
)}

    </div>
    </div>
    </>
    )
}
export default GithubFinder