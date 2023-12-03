import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import "./style.css";

function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userId] = useState(
    sessionStorage.getItem("@Auth:user")?.replace(/"/g, "")
  );

  const [eventInfo, setEventInfo] = useState<any>();
  const [eventImage, setEventImage] = useState<any>();

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

  useEffect(() => {
    fetch(`http://192.168.1.2:8000/event/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setEventInfo(json);
        setNome(json.name);
        setData(json.date);
        setHorario(json.time);
        setCidade(json.address.city);
        setEstado(json.address.state);
        setCep(json.address.cep);
        setRua(json.address.street);
        setNumero(json.address.number);
        setComplemento(json.address.complement);
        setBairro(json.address.district);
        setDescricao(json.description);
        setEventImage(json.image);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [base64Image, setBase64Image] = useState<any>();

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

  function editEvent(e: any) {
    e.preventDefault();

    let imageToUpdate = base64Image ? base64Image : eventImage;

    let eventTemplate = {
      address: {
        cep: cep,
        city: cidade,
        complement: complemento,
        district: bairro,
        number: numero,
        state: estado,
        street: rua,
      },
      date: data,
      description: descricao,
      id: id,
      image: imageToUpdate,
      name: nome,
      time: horario,
      user_id: userId,
    };
    let postDist = JSON.stringify(eventTemplate);
    eventPost(postDist);
  }

  const eventPost = (eventTemplate: any) => {
    fetch(`http://192.168.1.2:8000/event/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: eventTemplate,
    })
      .then((result) => {
        if (result.ok) {
          alert("Evento alterado com sucesso!");
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
                Editar informações sobre o evento
              </h4>
              <form onSubmit={editEvent}>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-4">
                    <span className="font-bold w-28 flex items-center">
                      Nome:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={nome}
                      onChange={(e) => setNome(e.target.value)}
                      value={nome}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-y py-4">
                    <span className="font-bold w-28 flex items-center">
                      Data:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={data}
                      onChange={(e) => setData(e.target.value)}
                      value={data}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      Horário:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={horario}
                      onChange={(e) => setHorario(e.target.value)}
                      value={horario}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      CEP:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={cep}
                      onChange={(e) => setCep(e.target.value)}
                      value={cep}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      Rua:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={rua}
                      onChange={(e) => setRua(e.target.value)}
                      value={rua}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      Número:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      value={numero}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      Complemento:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                      value={complemento}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      Bairro:
                    </span>
                    <input
                      required
                      type="text"
                      placeholder={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                      value={bairro}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      Cidade:
                    </span>
                    <input
                      required
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
                      required
                      type="text"
                      placeholder={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      value={estado}
                      className="input h-[3.2rem] input-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                    />
                  </li>
                  <li className="flex border-b py-4">
                    <span className="font-bold w-28 flex items-center">
                      Descrição:
                    </span>
                    <textarea
                      className="textarea h-48 textarea-bordered w-1/2 max-w-[50rem] bg-gray-400 dark:bg-gray-100 rounded-xl px-4 text-gray-700 flex items-center"
                      placeholder={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      value={descricao}
                    ></textarea>
                  </li>
                  <li>
                    {eventInfo ? (
                      <div className="">
                        <div className="mb-2">Thumbnail:</div>
                        <div className="flex">
                          <img
                            src={base64Image ? base64Image : eventInfo.image}
                            className="rounded-lg w-96 h-36 object-cover"
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
                                onChange={handleChangeImage}
                                type="file"
                                id="imagem-usuario"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
                <button
                  type="submit"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-10 py-2 rounded text-sm space-x-2 transition duration-100 mt-6 ml-2"
                >
                  <span>Salvar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditEvent;
