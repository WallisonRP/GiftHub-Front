function LostPassword() {
    return (
      <div className="h-screen flex flex-col justify-center">
      <div className="py-10">
        <div className="flex justify-center bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
          {/* //@ts-ignore */}
          <div className="w-full p-8 lg:w-3/4">
            <p className="text-xl text-gray-600 text-center ">
              Insira suas informações abaixo<br></br>para recuperar sua senha
            </p>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                E-mail
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Recuperar
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a
                href="/"
                className="text-xs text-gray-500 uppercase mt-4"
              >
                ou faça login
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default LostPassword