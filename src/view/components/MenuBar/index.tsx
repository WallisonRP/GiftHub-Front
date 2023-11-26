import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  const Menus = [
    { title: "Home", link: "/home" },
    { title: "Sobre Nós", link: "/home" },
    { title: "Eventos", link: "/home" },
    { title: "Projeto", link: "/home" },
  ];

  return (
    <div className="navbar justify-between shadow-md bg-base-100 pt-4 px-8">
      <div className="">
        <a className="cursor-pointer" href="/home">
          <img className="w-32 -mt-[.8rem]" src="src/assets/logo.png" alt="" />
        </a>
      </div>
      <div className="flex gap-x-10">
        {Menus.map((Menu, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(Menu.link);
            }}
            className="cursor-pointer hover:border-b-2 border-red-500"
          >
            {Menu.title}
          </div>
        ))}
      </div>
      <div className="flex-none gap-2">
        <div className="">Raul Cesar</div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="src/assets/rau.png"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/perfil" className="justify-between">
                Perfil
              </a>
            </li>
            <li>
              <a href="editar-perfil">Editar Perfil</a>
            </li>
            <li>
              <a href="/">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
