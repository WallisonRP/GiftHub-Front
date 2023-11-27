import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";
import PresentCard from "../../components/PresentCard";

function EventView() {
  const navigate = useNavigate();
  // const [show, setShow] = useState(false);

  const [nome, setNome] = useState("Aniversário de num sei quem");
  const [data] = useState("01/01/2023");
  const [horario] = useState("00:00");
  const [cidade] = useState("Ribeirão Preto - SP");
  const [cep] = useState("14079-792");
  const [rua] = useState("rua abc");
  const [numero] = useState("605");
  const [bairro] = useState("Chokito");
  const [valor, setValor] = useState("199,00");
  // const [criador] = useState("Rau");
  const [descricao, setDescricao] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing easdasdasdasdasdaasasasaslit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!"
  );

  function handleUpload(e: any) {
    let file = e.target.files[0];
    console.log(file);

    // let newName = `${id}-thumb`;

    // let fileExtension = file.name.split(".").pop();

    // let newNameWithExtension = newName + "." + fileExtension;

    // let renamedFile: File = new File([file], newNameWithExtension, {
    //   type: file.type,
    //   lastModified: file.lastModified,
    // });

    // setThumb(renamedFile);
    // console.log(renamedFile);
  }

  return (
    <div>
      <MenuBar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col ">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <span className="flex justify-between items-center mb-6">
                  <h4 className="text-xl text-gray-900 font-bold">
                    Informações sobre o evento
                  </h4>
                  <button
                    onClick={() => navigate("/editar-evento")}
                    className="px-4 py-2 border-[1px] border-indigo-500 rounded-lg flex gap-x-2 text-indigo-500 hover:bg-indigo-500 hover:text-white"
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

                    <span>Editar evento</span>
                  </button>
                </span>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-28 flex items-center">
                      Nome:
                    </span>
                    <span className="text-gray-700 flex items-center h-[3.2rem]">
                      {nome}
                    </span>
                  </li>
                  <li className="flex border-y py-2">
                    <span className="font-bold w-28 flex items-center">
                      Data:
                    </span>
                    <span className="text-gray-700 flex items-center h-[3.2rem]">
                      {data} - {horario}
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-28 flex items-center">
                      Endereço:
                    </span>
                    <span className="text-gray-700 flex items-center h-[3.2rem]">
                      {rua}, {numero}, {bairro} - {cidade} - {cep}
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-28 flex items-center">
                      Descricao:
                    </span>
                    <span className="text-gray-700 flex items-center pl-9 pr-14">
                      {descricao}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <div>
                  <div className="py-4 text-xl font-bold">Meus Presentes</div>
                  <div className="flex gap-x-4">
                    <label
                      htmlFor="my-drawer"
                      className="bg-white font-semibold text-center rounded-xl border shadow-lg max-w-xs flex flex-col justify-center items-center w-44 h-52 cursor-pointer"
                    >
                      <div className="rounded-full shadow-lg bg-gray-400 w-20 h-20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                          />
                        </svg>
                      </div>
                      <h1 className="text-lg text-gray-700 mt-6">
                        Adicionar novo presente
                      </h1>
                    </label>
                    <ul className="flex gap-x-4">
                      <PresentCard editable />
                      <PresentCard editable />
                      <PresentCard editable />
                      <PresentCard editable />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-1/3 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div>
              <h1 className="font-bold text-lg">Adicionar novo presente</h1>
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Nome:</span>
              </label>
              <input
                type="text"
                placeholder={"Nome"}
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Descrição:</span>
              </label>
              <input
                type="text"
                placeholder={"Descrição"}
                onChange={(e) => setDescricao(e.target.value)}
                value={data}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>

            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Valor:</span>
              </label>
              <input
                type="text"
                placeholder={"Valor"}
                onChange={(e) => setValor(e.target.value)}
                value={valor}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>

            <div className="form_control">
              <label className="label">Adicionar foto</label>
              <input
                id="imagem-usuario"
                type="file"
                onChange={handleUpload}
                className="file-input file-input-bordered file-input-error bg-white w-full max-w-xs"
              />
            </div>

            <div>
              <button
                // onClick={adicionarProduto}
                className="btn bg-red-500 text-black mt-4"
              >
                Adicionar Presente
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventView;
