import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <MenuBar />
      <main className="ml-10">
        <div>
          <div className="py-4 text-xl font-bold">Meus Eventos</div>
          <ul className="flex gap-x-4">
            <li className="bg-white font-semibold text-center rounded-3xl border shadow-lg max-w-xs flex flex-col justify-center items-center w-56 h-72 cursor-pointer">
              <div className="rounded-full shadow-lg bg-gray-400 w-20 h-20 flex place-items-center justify-center">
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
            </li>
            <div className="w-[320px]  px-4">
              <div className="bg-white pb-6 rounded-3xl border shadow-lg h-[350px] relative">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl w-full object-cover object-center mb-4"
                  src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                  alt="Image Size 720x400"
                />
                <div className="px-4">
                  <h2 className="text-lg text-gray-900 font-medium mb-4">
                    Aniversário de num sei quem
                  </h2>
                  <span className="flex gap-x-1 items-center text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092" />
                        <path
                          fill="currentColor"
                          d="M16 3a1 1 0 0 1 .993.883L17 4v1h2a2 2 0 0 1 1.995 1.85L21 7v12a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V7a2 2 0 0 1 1.85-1.995L5 5h2V4a1 1 0 0 1 1.993-.117L9 4v1h6V4a1 1 0 0 1 1-1m3 9H5v7h14zm0-5H5v3h14z"
                        />
                      </g>
                    </svg>

                    <h3 className="tracking-widest text-xs font-medium title-font">
                      01/01/2024 - 00:00 AM
                    </h3>
                  </span>
                  <span className="flex gap-x-1 mt-1 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 13 15 25 15 25Z" />
                        <path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
                      </g>
                    </svg>
                    <p className="leading-relaxed text-base">
                      Ribeirão Preto - SP
                    </p>
                  </span>
                  <span
                    onClick={() => navigate("/eventos")}
                    // onClick={() => console.log("akpsdf")}
                    className="absolute bottom-4 flex gap-x-1 items-center left-1/2 -translate-x-1/2 border-[1px] text-indigo-500 border-indigo-500 rounded-md px-4 py-1 whitespace-nowrap hover:bg-indigo-500 hover:text-white cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                      />
                    </svg>

                    <p>Acessar Evento</p>
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div>
          <div className="py-4 text-xl font-bold">Todos os Eventos</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
