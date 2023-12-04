import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { userDefaultImage, logoImage } from "../../../variables/images";
import { serverIP } from "../../../variables/links";

function MenuBar() {
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState<any>({});
  const [newUserInfo, setNewUserInfo] = useState<any>({});
  // sessionStorage.getItem("@Auth:user")?.replace(/"/g, "")
  const [userId] = useState(
    sessionStorage.getItem("@Auth:user")?.replace(/"/g, "")
  );

  useEffect(() => {
    const userString = sessionStorage.getItem("@Auth:userInfo");
    let user = "";
    if (userString) {
      user = JSON.parse(userString);
    }
    setUserInfo(user);

    fetch(`${serverIP}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setNewUserInfo(json);
        let newUserInformation = JSON.stringify(json);
        sessionStorage.setItem("@Auth:userInfo", newUserInformation);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const Menus = [
    { title: "Home", link: "/home" },
    { title: "Sobre Nós", link: "/sobre-nos" },
    { title: "Projeto", link: "/sobre-o-projeto" },
  ];

  return (
    <div className="navbar justify-between shadow-md bg-base-100 pt-4 px-8">
      <div className="">
        <a className="cursor-pointer" href="/home">
          <img className="w-32 -mt-[.8rem]" src={logoImage} alt="" />
        </a>
      </div>
      <div className="flex gap-x-10">
        {Menus.map((Menu, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(Menu.link);
            }}
            className="cursor-pointer hover:border-b-2 border-red-500"
          >
            {Menu.title}
          </div>
        ))}
      </div>
      {userInfo ? (
        <div className="flex-none gap-2">
          <div className="">
            {userInfo.name} {userInfo.surname}
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Foto de Perfil"
                  src={
                    newUserInfo.picture ? newUserInfo.picture : userDefaultImage
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => navigate("/perfil")}
                  className="justify-between"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a onClick={() => navigate(`/editar-perfil/${userId}`)}>
                  Editar Perfil
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    signOut();
                    navigate("/");
                  }}
                >
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MenuBar;
