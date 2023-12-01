import "./styles.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { signIn, signed } = useContext(AuthContext);

  async function handleLogin(e: any) {
    if (email.length === 0) {
      alert("Preencha o e-mail corretamente");
    } else if (senha.length === 0) {
      alert("Preencha a senha");
    } else {
      e.preventDefault();
      await signIn(email, senha);
      axios
        .post("http://192.168.1.2:8000/user/sign_in", {
          email: email,
          password: senha,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  }

  if (!signed) {
    return (
      <div className="h-screen flex flex-col justify-center">
        <div className="py-10">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            {/* //@ts-ignore */}
            <div className="banner hidden lg:block lg:w-1/2 bg-cover "></div>
            <div className="w-full p-8 lg:w-1/2">
              <p className="text-xl text-gray-600 text-center my-10">
                Seja Vem Vindo Novamente!
              </p>
              <p className="text-xl text-gray-600 text-center ">
                Insira suas informações abaixo<br></br>para acessar o sistema
              </p>

              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  E-mail
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Senha
                  </label>
                  <a href="/recuperar-senha" className="text-xs text-gray-500">
                    Esqueceu sua Senha?
                  </a>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="mt-8">
                <button
                  onClick={handleLogin}
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                >
                  Entrar
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a
                  href="/registrar"
                  className="text-xs text-gray-500 uppercase mt-4"
                >
                  ou cadastre-se
                </a>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/home" />;
  }
}

export default Login;
