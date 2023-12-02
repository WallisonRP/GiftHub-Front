import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [nome] = useState("Raul");
  const [sobrenome] = useState("Cesar");
  const [telefone] = useState("(16) 98765-4321");
  const [email] = useState("rau@rau.com");
  const [cidade] = useState("Ribeirão Preto - SP");
  const [sobre] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing easdasdasdasdasdaasasasaslit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!"
  );

  const [base64Image, setBase64Image] = useState<any>("");

  function handleChangeImage(e: any) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

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
              className={`relative `}
              onMouseOver={() => setShow(true)}
              onMouseOut={() => setShow(false)}
            >
              <img
                src={`${
                  base64Image ? base64Image : "src/assets/default_profile.webp"
                }`}
                className="w-40 h-40 object-cover border-4 border-white rounded-full"
              />
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
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Raul Cesar</p>
            </div>
            <p className="text-gray-700 mt-2">Negócio de redes aí</p>
            <p className="text-sm text-gray-500 mt-1">Ribeirão Preto - SP</p>
            <div>
              <button
                onClick={() => navigate("/editar-perfil")}
                className="py-2 px-4 border-gray-600 border-solid border-[1px] mt-3 rounded-md hover:bg-gray-600 hover:text-white"
              >
                Editar Perfil
              </button>
              {base64Image ? (
                <button
                  onClick={() => navigate("/editar-perfil")}
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
            <p className="mt-2 text-gray-700">{sobre}</p>
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
                  {nome}
                </span>
              </li>
              <li className="flex border-y py-2">
                <span className="font-bold w-28 flex items-center">
                  Sobrenome:
                </span>
                <span className="text-gray-700 flex items-center h-[3.2rem]">
                  {sobrenome}
                </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-28 flex items-center">
                  Telefone:
                </span>
                <span className="text-gray-700 flex items-center h-[3.2rem]">
                  {telefone}
                </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-28 flex items-center">Email:</span>
                <span className="text-gray-700 flex items-center h-[3.2rem]">
                  {email}
                </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-28 flex items-center">
                  Cidade:
                </span>
                <span className="text-gray-700 flex items-center h-[3.2rem]">
                  {cidade}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
