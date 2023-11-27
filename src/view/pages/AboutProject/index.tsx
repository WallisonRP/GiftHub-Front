import MenuBar from "../../components/MenuBar";

function AboutProject() {
  return (
    <>
      <MenuBar />

      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800  lg:text-4xl">
            Informações Sobre o Projeto
          </h1>
          <p className="my-6 text-gray-500  text-center whitespace-break-spaces">
            Desenvolvido como parte da disciplina de Tópicos Especiais na Fatec
            Ribeirão Preto, este projeto teve como objetivo visa criar um
            sistema Python, usando o framework Flask, com uma interface amigável
            em feita React.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="h-[32rem] bg-white">
          <div className="container mx-auto px-6 py-10">
            <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 lg:text-4xl">
              Membros da Equipe
            </h1>

            <div className="mx-auto mt-6 flex justify-center">
              <span className="inline-block h-1 w-40 rounded-full bg-red-500"></span>
              <span className="mx-1 inline-block h-1 w-3 rounded-full bg-red-500"></span>
              <span className="inline-block h-1 w-1 rounded-full bg-red-500"></span>
            </div>
          </div>
        </div>

        <div className="container mx-auto -mt-72 px-6 py-10 sm:-mt-80 md:-mt-[28rem]">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-gray-700 p-4 sm:p-6">
              <img
                className="aspect-square w-full rounded-xl object-cover "
                src="/src/assets/iago_profile.jpg"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700">
                Iago Butignon
              </h1>

              <p className="capitalize text-gray-500">Desenvolvedor Mobile</p>
              <p className="mt-2 capitalize text-gray-500">2840481911048</p>

              <div className="-mx-2 mt-3 flex">
                <a
                  href="https://il.linkedin.com/in/iago-butignon-6103101a4?trk=org-employees_profile-result-card_result-card_full-click"
                  target="_blank"
                  className="mx-1 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Linkedin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/iagobutignon/"
                  target="_blank"
                  className="mx-1 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl border p-4 border-gray-700 sm:p-6">
              <img
                className="aspect-square w-full rounded-xl object-cover"
                src="/src/assets/rau_profile.jpg"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700">
                Raul Cesar Bernardo
              </h1>

              <p className="capitalize text-gray-500">Analista de Infraestrutura de TI</p>
              <p className="mt-2 capitalize text-gray-500">2840482111021</p>

              <div className="-mx-2 mt-3 flex">
                <a
                  href="https://br.linkedin.com/in/raulcesarsec"
                  target="_blank"
                  className="mx-1 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Linkedin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/Willemm525"
                  target="_blank"
                  className="mx-1 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl border p-4 border-gray-700 sm:p-6">
              <img
                className="aspect-square w-full rounded-xl object-cover"
                src="/src/assets/wally.jpeg"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700">
                Wallison Franklin Pereira
              </h1>

              <p className="capitalize text-gray-500">Analista de Suporte</p>
              <p className="mt-2 capitalize text-gray-500">2840482111012</p>

              <div className="-mx-2 mt-3 flex">
                <a
                  href="https://br.linkedin.com/in/wallison-franklin"
                  target="_blank"
                  className="mx-1 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Linkedin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/WallisonRP"
                  target="_blank"
                  className="mx-1 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutProject;
