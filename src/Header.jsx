import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <h1 className="anchors">Home</h1>
      </Link>
      <Link to="/about">
        {" "}
        <h1 className="anchors">About</h1>
      </Link>
      <Link to="/contact">
        {" "}
        <h1 className="anchors">Contact</h1>
      </Link>
    </div>
  );
};

export default Header;