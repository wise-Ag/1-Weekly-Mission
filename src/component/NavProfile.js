import { useEffect, useState } from "react";
import { LinkButton } from "./LinkButton";
import style from "./NavProfile.module.css";
import useAsync from "../hooks/useAsync";
import { getUser } from "../api/getUser";

function NavProfile() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, , getUserAsync] = useAsync(getUser);
  const loadUser = async () => {
    const userInfo = await getUserAsync({ id: 1 });
    setUserInfo(userInfo);
  };

  useEffect(() => {
    loadUser();
  }, []);
  return isLoading ? (
    <span>loading</span>
  ) : userInfo ? (
    <div className={style.profile}>
      <img
        className={style.profileImg}
        src={userInfo.image_source}
        alt="유저 프로필"
      />
      <div className={style.email}>{userInfo.email}</div>
    </div>
  ) : (
    <LinkButton text="로그인" type="login" />
  );
}

export default NavProfile;
