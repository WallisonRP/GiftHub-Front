import { useState } from "react";
import axios from "axios";

function Register() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleRegister() {
    if (nome.length === 0) {
      alert("Preencha o campo de nome");
    } else if (sobrenome.length === 0) {
      alert("Preencha o campo de sobrenome");
    } else if (email.length === 0) {
      alert("Preencha o campo de e-mail");
    } else if (senha.length === 0) {
      alert("Preencha o campo de senha");
    } else {
      axios
        .post(
          "http://192.168.1.2:8000/user",
          {
            name: nome,
            surname: sobrenome,
            email: email,
            password: senha,
          },
          { withCredentials: true }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="py-6">
        <div className="flex bg-white rounded-lg justify-center shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
          {/* //@ts-ignore */}
          {/* <div className="banner hidden lg:block lg:w-1/2 bg-cover "></div> */}
          <div className="w-full p-8 lg:w-3/4">
            <p className="text-xl text-gray-600 text-center my-6">
              Seja Vem Vindo!
            </p>
            <p className="text-xl text-gray-600 text-center ">
              Insira suas informações abaixo<br></br>para se cadastrar
            </p>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nome
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Sobrenome
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                E-mail
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="mt-8">
              <button
                onClick={handleRegister}
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Cadastrar
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="/" className="text-xs text-gray-500 uppercase mt-4">
                ou faça login
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
