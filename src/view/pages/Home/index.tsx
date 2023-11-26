import MenuBar from "../../components/MenuBar";

function Home() {
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
            <div className="w-[400px]  px-4">
              <div className="bg-white p-6 rounded-3xl border shadow-lg h-[400px] cursor-pointer">
                <img
                  className="h-40  rounded w-full object-cover object-center mb-6"
                  src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                  alt="Image Size 720x400"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  01/01/2024 - 00:00 AM
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Aniversário de num sei quem
                </h2>
                <p className="leading-relaxed text-base">
                  Vai acontecer em tal lugar, tal hora, tal dia, tal num sei
                  oqueVai acontecer em tal lugar, tal hora, tal dia, tal num
                  seiVai acontecer em tal lugar, tal hora, tal dia, tal numasdss
                </p>
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
