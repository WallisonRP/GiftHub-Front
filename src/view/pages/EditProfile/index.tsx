import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { serverIP } from "../../../variables/links";

function EditProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState<any>({});

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [sobre, setSobre] = useState("");

  const [userId] = useState(
    sessionStorage.getItem("@Auth:user")?.replace(/"/g, "")
  );

  useEffect(() => {
    fetch(`${serverIP}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setUserInfo(json);
        setNome(json.name);
        setSobrenome(json.surname);
        setCidade(json.city);
        setEstado(json.state);
        setSobre(json.description);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function editProfile(e: any) {
    e.preventDefault();

    let userTemplate = {
      email: userInfo.email,
      password: userInfo.password,
      name: nome,
      surname: sobrenome,
      description: sobre,
      cep: "",
      number: "",
      street: "",
      district: "",
      city: "",
      state: "",
      complement: "",
    };
    let postDist = JSON.stringify(userTemplate);
    userPut(postDist);
  }

  const userPut = (userTemplate: any) => {
    fetch(`${serverIP}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: userTemplate,
    })
      .then((result) => {
        if (result.ok) {
          alert("Dados alterados com sucesso!");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <MenuBar />
      <div className="mt-10">
        <div className="my-4 flex flex-col space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="flex flex-col w-full ">
            <div
              onClick={() => navigate(-1)}
              className="ml-8 text-lg text-blue-500 flex gap-x-4 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m4 10l-.354.354L3.293 10l.353-.354L4 10Zm16.5 8a.5.5 0 0 1-1 0h1ZM8.646 15.354l-5-5l.708-.708l5 5l-.708.708Zm-5-5.708l5-5l.708.708l-5 5l-.708-.708ZM4 9.5h10v1H4v-1ZM20.5 16v2h-1v-2h1ZM14 9.5a6.5 6.5 0 0 1 6.5 6.5h-1a5.5 5.5 0 0 0-5.5-5.5v-1Z"
                />
              </svg>
              Voltar
            </div>
            <div className="flex-1 bg-white rounded-md  p-8">
              <h4 className="text-xl text-gray-900 font-bold">Editar Perfil</h4>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">
                Informações Pessoais
              </h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-4">
                  <span className="font-bold w-28 flex items-center">
                    Nome:
                  </span>
                  <input
                    type="text"
                    placeholder={nome}
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                  />
                </li>
                <li className="flex border-y py-4">
                  <span className="font-bold w-28 flex items-center">
                    Sobrenome:
                  </span>
                  <input
                    type="text"
                    placeholder={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    value={sobrenome}
                    className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                  />
                </li>
                <li className="flex border-b py-4">
                  <span className="font-bold w-28 flex items-center">
                    Email:
                  </span>
                  <span className="text-gray-700 flex items-center h-[3.2rem]">
                    {userInfo.email}
                  </span>
                </li>
                <li className="flex border-b py-4">
                  <span className="font-bold w-28 flex items-center">
                    Cidade:
                  </span>
                  <input
                    type="text"
                    placeholder={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    value={cidade}
                    className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                  />
                </li>
                <li className="flex border-b py-4">
                  <span className="font-bold w-28 flex items-center">
                    Estado:
                  </span>
                  <input
                    type="text"
                    placeholder={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    value={userInfo.state}
                    className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                  />
                </li>
                <li className="flex border-b py-4">
                  <span className="font-bold w-28 flex items-center">
                    Sobre Mim:
                  </span>
                  <textarea
                    className="textarea h-48 textarea-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    placeholder={sobre}
                    onChange={(e) => setSobre(e.target.value)}
                    value={sobre}
                  ></textarea>
                </li>
              </ul>
              <button
                onClick={editProfile}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-10 py-2 rounded text-sm space-x-2 transition duration-100 mt-6 ml-2"
              >
                <span>Salvar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
