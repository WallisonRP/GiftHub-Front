import { useNavigate } from "react-router-dom";
import { serverIP } from "../../../variables/links";
import { defaulPresentImage } from "../../../variables/images";

interface PresentCardProps {
  editable?: boolean;
  item: any;
}

function PresentCard({ editable, item }: PresentCardProps) {
  const navigate = useNavigate();

  function removeEvent(id: any) {
    fetch(`${serverIP}/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        if (data.ok) {
          alert("Produto removido com sucesso!");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="">
      <div className="relative border-[1px] flex w-52 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-[0_3px_10px_-2px_rgba(0,0,0,0.3)]">
        <div className="relative mx-4 mt-4 h-44 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={item.picture ? item.picture : defaulPresentImage}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-3">
          <div className="mb-1 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {item.name}
            </p>
          </div>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-800 antialiased">
            R${item.value}
          </p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 mt-1">
            {item.description}
          </p>
        </div>
        <div className="flex justify-center py-4 pt-0">
          {editable ? (
            <div className="flex gap-x-2">
              <button
                onClick={() => navigate(`/editar-presente/${item.id}`)}
                className="flex gap-x-1 select-none rounded-lg bg-gray-50 hover:bg-gray-200 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M17.181 2.927a2.975 2.975 0 0 0-4.259-.054l-9.375 9.375a2.438 2.438 0 0 0-.656 1.194l-.877 3.95a.5.5 0 0 0 .596.597l3.927-.873a2.518 2.518 0 0 0 1.234-.678l9.358-9.358a2.975 2.975 0 0 0 .052-4.153m-3.552.653a1.975 1.975 0 1 1 2.793 2.793l-.671.671l-2.793-2.792l.671-.672m-1.378 1.38l2.793 2.792l-7.98 7.98a1.518 1.518 0 0 1-.744.409l-3.16.702l.708-3.183c.059-.267.193-.511.386-.704l7.997-7.996"
                  />
                </svg>
                <span>Editar</span>
              </button>
              <button
                onClick={() => removeEvent(item.id)}
                className="flex gap-x-1 select-none rounded-lg bg-none border text-red-500 hover:text-white hover:bg-red-400 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 5h4a2 2 0 1 0-4 0M8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14.25 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75m-7.516 9.467a2.25 2.25 0 0 0 2.24 2.033h6.052a2.25 2.25 0 0 0 2.24-2.033L18.424 6.5H5.576z"
                  />
                </svg>

                <span>Apagar</span>
              </button>
            </div>
          ) : (
            <button
              className="block w-full select-none rounded-lg bg-gray-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Comprar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PresentCard;
