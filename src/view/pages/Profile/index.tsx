import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { useState, useEffect } from "react";
import { userDefaultImage } from "../../../variables/images";
import { serverIP } from "../../../variables/links";

function Profile() {
  const [defaultImage] = useState(userDefaultImage);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [base64Image, setBase64Image] = useState<any>("");

  function handleChangeImage(e: any) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result);
        console.log(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  const [userInfo, setUserInfo] = useState<any>({});
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
  }, []);

  function changeUserPicture(e: any) {
    e.preventDefault();

    let userImage = {
      picture: base64Image,
    };

    let postDist = JSON.stringify(userImage);
    userImagePut(postDist);
  }

  const userImagePut = (userImage: any) => {
    fetch(`${serverIP}/user/update_picture/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: userImage,
    })
      .then((result) => {
        if (result.ok) {
          alert("Foto alterada com sucesso!");
          window.location.reload();
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <MenuBar />

          <div className="w-full h-[250px] mt-2">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-bl-lg rounded-br-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <div
              className={`relative`}
              onMouseOver={() => setShow(true)}
              onMouseOut={() => setShow(false)}
            >
              {userInfo.picture ? (
                <img
                  src={base64Image ? base64Image : userInfo.picture}
                  className="w-40 h-40 object-cover border-4 border-white rounded-full"
                />
              ) : (
                <img
                  src={`${base64Image ? base64Image : defaultImage}`}
                  className="w-40 h-40 object-cover border-4 border-white rounded-full"
                />
              )}

              <div className="close_button">
                <label htmlFor="imagem-usuario" className="cursor-pointer">
                  <div
                    className={`absolute right-3 bottom-8 bg-white rounded-full cursor-pointer p-1 ${
                      show ? "block" : "hidden"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z" />
                        <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                      </g>
                    </svg>
                  </div>

                  <input
                    className="editFile"
                    onChange={handleChangeImage}
                    type="file"
                    id="imagem-usuario"
                    accept=".jpg, .jpeg, .png"
                  />
                </label>
              </div>
            </div>
            {userInfo ? (
              <>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-2xl">
                    {userInfo.name} {userInfo.surname}
                  </p>
                </div>
                {/* <p className="text-gray-700 mt-2">{userInfo.description}</p> */}
                {userInfo.city && userInfo.state ? (
                  <p className="text-sm text-gray-500 mt-1">
                    {userInfo.city} - {userInfo.state}
                  </p>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
            <div>
              <button
                onClick={() => navigate(`/editar-perfil/${userId}`)}
                className="py-2 px-4 border-gray-600 border-solid border-[1px] mt-3 rounded-md hover:bg-gray-600 hover:text-white"
              >
                Editar Perfil
              </button>
              {base64Image ? (
                <button
                  onClick={changeUserPicture}
                  className="ml-3 py-2 px-4 border-white bg-green-500  border-solid border-[1px] mt-3 rounded-md hover:bg-green-600 "
                >
                  Salvar Alterações
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2"></div>
        </div>
      </div>
      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="flex flex-col w-full 2xl:w-2/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Sobre mim</h4>
            <p className="mt-2 text-gray-700">{userInfo.description}</p>
          </div>
        </div>
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              Informações Pessoais
            </h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-28 flex items-center">Nome:</span>
                <span className="text-gray-700 flex items-center h-[3.2rem]">
                  {userInfo.name}
                </span>
              </li>
              <li className="flex border-y py-2">
                <span className="font-bold w-28 flex items-center">
                  Sobrenome:
                </span>
                <span className="text-gray-700 flex items-center h-[3.2rem]">
                  {userInfo.surname}
                </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-28 flex items-center">Email:</span>
                <span className="text-gray-700 flex items-center h-[3.2rem]">
                  {userInfo.email}
                </span>
              </li>
              {userInfo.city && userInfo.state ? (
                <li className="flex border-b py-2">
                  <span className="font-bold w-28 flex items-center">
                    Cidade:
                  </span>
                  <span className="text-gray-700 flex items-center h-[3.2rem]">
                    {userInfo.city} - {userInfo.state}
                  </span>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
