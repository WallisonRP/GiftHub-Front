import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";

function Home() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(
    sessionStorage.getItem("@Auth:user")?.replace(/"/g, "")
  );
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
  // const [criador] = useState("Rau");
  const [descricao, setDescricao] = useState("");

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

  const [userEvents, setUserEvents] = useState<any>();
  const [allEvents, setAllEvents] = useState<any>();

  useEffect(() => {
    // setLoadingPage(true);
    fetch("http://192.168.1.2:8000/event/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAllEvents(json);
        console.log(json);
      })
      .finally(() => {
        // let userToRequest = userId?.replace(/"/g, "");
        // console.log(userToRequest);
        fetch(`http://192.168.1.2:8000/event/get_events_by_user_id/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            setUserEvents(json);
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

  function addEvent(e: any) {
    e.preventDefault();

    let eventTemplate = {
      user_id: userId,
      name: nome,
      date: data,
      time: horario,
      description: descricao,
      image: base64Image,
      address: {
        cep: cep,
        number: numero,
        street: rua,
        district: bairro,
        city: cidade,
        state: estado,
        complement: complemento,
      },
    };

    let postDist = JSON.stringify(eventTemplate);
    eventPost(postDist);

    console.log("Adicionar evento:", postDist);
  }

  const eventPost = (eventTemplate: any) => {
    fetch("http://192.168.1.2:8000/event/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: eventTemplate,
    })
      .then((result) => {
        if (result.ok) {
          alert("Evento adicionado com sucesso!");
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
          <div className="mx-10">
            <div className="py-4 text-xl font-bold">Meus Eventos</div>
            <div className="flex gap-4 flex-wrap">
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
                  Adicionar novo evento
                </h1>
              </label>
              {userEvents ? (
                <div className="flex gap-4 flex-wrap">
                  {userEvents.map((item: any) => (
                    <EventCard item={item} />
                  ))}
                </div>
              ) : (
                "Sem Eventos Atualmente"
              )}
            </div>
          </div>
          <div className="ml-10 py-20">
            <div>
              <div className="py-4 text-xl font-bold">Todos os Eventos</div>
              {allEvents ? (
                <div className="flex gap-4 flex-wrap">
                  {allEvents.map((item: any) => (
                    <EventCard item={item} />
                  ))}
                </div>
              ) : (
                <div>Sem eventos disponíveis no momento</div>
              )}
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-1/3 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <form onSubmit={addEvent}>
              <div>
                <h1 className="font-bold text-lg">Adicionar novo evento</h1>
              </div>

              <div className="">
                <label className="label mt-1 ">
                  <span className="label-text text-black">Nome:</span>
                </label>
                <input
                  required
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
                  required
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
                  required
                  type="text"
                  placeholder={"Horario"}
                  onChange={(e) => setHorario(e.target.value)}
                  value={horario}
                  className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
                />
              </div>
              <div className="">
                <label className="label mt-1 ">
                  <span className="label-text text-black">Cep:</span>
                </label>
                <input
                  required
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
                  required
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
                  required
                  type="text"
                  placeholder={"Numero"}
                  onChange={(e) => setNumero(e.target.value)}
                  value={numero}
                  className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
                />
              </div>
              <div className="">
                <label className="label mt-1 ">
                  <span className="label-text text-black">Complemento:</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder={"Complemento"}
                  onChange={(e) => setComplemento(e.target.value)}
                  value={complemento}
                  className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
                />
              </div>
              <div className="">
                <label className="label mt-1 ">
                  <span className="label-text text-black">Bairro:</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder={"Bairro"}
                  onChange={(e) => setBairro(e.target.value)}
                  value={bairro}
                  className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
                />
              </div>
              <div className="">
                <label className="label mt-1 ">
                  <span className="label-text text-black">Cidade:</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder={"Cidade"}
                  onChange={(e) => setCidade(e.target.value)}
                  value={cidade}
                  className="input  input-bordered w-full max-w-[50rem] bg-white dark:bg-white"
                />
              </div>
              <div className="">
                <label className="label mt-1 ">
                  <span className="label-text text-black">Estado:</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder={"Estado"}
                  onChange={(e) => setEstado(e.target.value)}
                  value={estado}
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
                  required
                  id="imagem-evento"
                  type="file"
                  onChange={handleChangeImage}
                  className="file-input file-input-bordered file-input-error bg-white w-full max-w-xs"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn bg-red-500 text-black mt-4"
                >
                  Adicionar Evento
                </button>
              </div>
            </form>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
