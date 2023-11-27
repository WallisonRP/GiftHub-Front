import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import "./style.css";

function EditPresent() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("Aniversário de num sei quem");
  const [valor, setValor] = useState("199,00");
  const [descricao, setDescricao] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing easdas!"
  );

  function changedImage() {}
  return (
    <>
      <MenuBar />
      <div className="mt-10">
        <div className="my-4 flex flex-col space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="flex flex-col w-full 2xl:w-2/3">
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
          </div>
          <div className="w-full flex flex-col">
            <div className="flex-1 bg-white rounded-lg shadow-xl px-8 py-4">
              <h4 className="text-xl text-gray-900 font-bold">
                Editar informações sobre o presente
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
                    Descrição:
                  </span>
                  <input
                    type="text"
                    placeholder={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                    className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                  />
                </li>
                <li className="flex border-b py-4">
                  <span className="font-bold w-28 flex items-center">
                    Valor:
                  </span>
                  <input
                    type="text"
                    placeholder={valor}
                    onChange={(e) => setValor(e.target.value)}
                    value={valor}
                    className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                  />
                </li>
                <li>
                  <div className="">
                    <div className="my-2">Foto do presente:</div>
                    <div className="flex">
                      <img
                        src={"changeThumb" ? "tempThumb" : "thumb.src"}
                        className="rounded-lg w-52 h-36 object-cover"
                        alt=""
                      />
                      <div className="close_button ml-1">
                        <label
                          htmlFor="imagem-usuario"
                          className="cursor-pointer"
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
                              <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                              <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                            </g>
                          </svg>
                          <input
                            className="editFile"
                            onChange={changedImage}
                            type="file"
                            id="imagem-usuario"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-10 py-2 rounded text-sm space-x-2 transition duration-100 mt-6 ml-2">
                <span>Salvar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPresent;
