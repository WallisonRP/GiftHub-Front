import { useNavigate, useParams } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { useEffect, useState } from "react";
import PresentCard from "../../components/PresentCard";
import { serverIP } from "../../../variables/links";
import { defaulPresentImage } from "../../../variables/images";

function EventView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [descricao, setDescricao] = useState("");

  const [presentName, setPresentName] = useState("");
  const [presentValue, setPresentValue] = useState("");
  const [presentDescription, setPresentDescription] = useState("");

  const [eventProducts, setEventProducts] = useState([]);

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

  useEffect(() => {
    fetch(`${serverIP}/event/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setNome(json.name);
        setData(json.date);
        setHorario(json.time);
        setCidade(json.city);
        setEstado(json.state);
        setCep(json.cep);
        setRua(json.street);
        setNumero(json.number);
        setComplemento(json.complement);
        setBairro(json.district);
        setDescricao(json.description);
      })
      .finally(() => {
        fetch(`${serverIP}/product/get_products_by_event_id/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            setEventProducts(json);
            console.log(json);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function removeEvent(id: any) {
    fetch(`${serverIP}/event/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        if (data.ok) {
          alert("Evento removido com sucesso!");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }

  function addPresent(e: any) {
    e.preventDefault();

    let imageToSend = base64Image ? base64Image : defaulPresentImage;

    let presentTemplate = {
      event_id: id,
      picture: imageToSend,
      name: presentName,
      value: presentValue,
      description: presentDescription,
    };

    let postPresent = JSON.stringify(presentTemplate);
    console.log(presentTemplate);
    presentPost(postPresent);
  }

  const presentPost = (presentTemplate: any) => {
    fetch(`${serverIP}/product/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: presentTemplate,
    })
      .then((result) => {
        if (result.ok) {
          alert("Presente adicionado com sucesso!");
          window.location.reload();
        }
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <MenuBar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col ">
              <div
                onClick={() => navigate("/")}
                className="ml-8 mt-4 text-lg text-blue-500 flex gap-x-4 cursor-pointer"
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
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <span className="flex justify-between items-center mb-6">
                  <h4 className="text-xl text-gray-900 font-bold">
                    Informações sobre o evento
                  </h4>
                  <div className="flex gap-x-6">
                    <button
                      onClick={() => navigate(`/editar-evento/${id}`)}
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
                    <button
                      onClick={() => removeEvent(id)}
                      className="px-4 py-2 border-[1px] border-red-500 rounded-lg flex gap-x-2 text-red-500 hover:bg-red-500 hover:text-white"
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

                      <span>Excluir</span>
                    </button>
                  </div>
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
                      {rua}, {numero}, {complemento}, {bairro} - {cidade} -{" "}
                      {estado} - {cep}
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
                    {eventProducts && eventProducts.length ? (
                      <>
                        <ul className="flex gap-x-4">
                          {eventProducts.map((item: any) => (
                            <PresentCard item={item} editable />
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div className="flex items-center text-lg font-semibold ml-10">
                        Sem produtos cadastrados no momento
                      </div>
                    )}
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
                onChange={(e) => setPresentName(e.target.value)}
                value={presentName}
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
                onChange={(e) => setPresentDescription(e.target.value)}
                value={presentDescription}
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
                onChange={(e) => setPresentValue(e.target.value)}
                value={presentValue}
                className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
              />
            </div>

            <div className="form_control">
              <label className="label">Adicionar foto</label>
              <input
                id="imagem-usuario"
                type="file"
                onChange={handleChangeImage}
                className="file-input file-input-bordered file-input-error bg-white w-full max-w-xs"
              />
            </div>

            <div>
              <button
                onClick={addPresent}
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
