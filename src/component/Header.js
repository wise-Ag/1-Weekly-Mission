import Nav from "./Nav";
import Profile from "./Profile";
import "../css/index.css";

function Header({ userInfo, folderInfo }) {
  return (
    <div className="header">
      <Nav userInfo={userInfo} />
      <Profile userInfo={userInfo} folderInfo={folderInfo} />
    </div>
  );
}

export default Header;