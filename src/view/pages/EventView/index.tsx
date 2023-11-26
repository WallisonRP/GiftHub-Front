// import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";
import PresentCard from "../../components/PresentCard";

function EventView() {
  // const navigate = useNavigate();
  // const [show, setShow] = useState(false);

  const [nome, setNome] = useState("Aniversário de num sei quem");
  const [data, setData] = useState("01/01/2023");
  const [horario, setHorario] = useState("00:00");
  const [cidade, setCidade] = useState("Ribeirão Preto - SP");
  const [cep, setCep] = useState("14079-792");
  const [rua, setRua] = useState("rua abc");
  const [numero, setNumero] = useState("605");
  const [bairro, setBairro] = useState("Chokito");
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
                <h4 className="text-xl text-gray-900 font-bold">
                  Informações sobre o evento
                </h4>
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
                <span className="label-text text-black">Data:</span>
              </label>
              <input
                type="text"
                placeholder={"Data"}
                onChange={(e) => setData(e.target.value)}
                value={data}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Horario:</span>
              </label>
              <input
                type="text"
                placeholder={"Horario"}
                onChange={(e) => setHorario(e.target.value)}
                value={horario}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Cidade:</span>
              </label>
              <input
                type="text"
                placeholder={"Cidade"}
                onChange={(e) => setCidade(e.target.value)}
                value={cidade}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Cep:</span>
              </label>
              <input
                type="text"
                placeholder={"Cep"}
                onChange={(e) => setCep(e.target.value)}
                value={cep}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Rua:</span>
              </label>
              <input
                type="text"
                placeholder={"Rua"}
                onChange={(e) => setRua(e.target.value)}
                value={rua}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Numero:</span>
              </label>
              <input
                type="text"
                placeholder={"Numero"}
                onChange={(e) => setNumero(e.target.value)}
                value={numero}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Bairro:</span>
              </label>
              <input
                type="text"
                placeholder={"Bairro"}
                onChange={(e) => setBairro(e.target.value)}
                value={bairro}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>
            <div className="">
              <label className="label mt-1 ">
                <span className="label-text text-black">Descrição:</span>
              </label>
              <textarea
                className="textarea textarea-bordered bg-white w-full max-w-[50rem] "
                placeholder="Descrição"
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
              ></textarea>
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
