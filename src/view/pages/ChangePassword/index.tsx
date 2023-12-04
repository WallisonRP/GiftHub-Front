import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { serverIP } from "../../../variables/links";
import MenuBar from "../../components/MenuBar";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const navigate = useNavigate();

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
        setEmail(json.email);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function handleChangePassword() {
    if (email.length === 0) {
      alert("Preencha o campo de e-mail");
    } else if (senha.length === 0) {
      alert("Preencha o campo de senha");
    } else if (novaSenha.length === 0) {
      alert("Preencha o campo com a nova senha");
    } else {
      console.log({
        email: email,
        password: senha,
        new_password: senha,
      });
      axios
        .post(`${serverIP}/user/update_password`, {
          email: email,
          password: senha,
          new_password: novaSenha,
        })
        .then((result) => {
          if (result.status == 200) {
            alert("Senha alterada com sucesso!");
            navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  }

  return (
    <>
      <MenuBar />
      <div className="mt-16 flex flex-col justify-center">
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
        <div className="py-6">
          <div className="flex bg-white rounded-lg justify-center shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
            {/* //@ts-ignore */}
            {/* <div className="banner hidden lg:block lg:w-1/2 bg-cover "></div> */}
            <div className="w-full p-8 lg:w-3/4">
              <p className="text-xl text-gray-600 text-center ">
                Insira suas informações abaixo<br></br>para alterar sua senha
              </p>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  E-mail
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Senha
                  </label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nova Senha
                  </label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  onChange={(e) => setNovaSenha(e.target.value)}
                />
              </div>
              <div className="mt-8">
                <button
                  onClick={handleChangePassword}
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                >
                  Alterar Senha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
