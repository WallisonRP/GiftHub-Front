const ImportButton = ({ onFileChange }: any) => {
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      onFileChange(file);
    }
  };

  return (
    <div className="import_button ml-1">
      <label htmlFor="imagem-usuario" className="cursor-pointer">
        <div className="px-4 py-2 border-[1px] border-gray-500 rounded-lg flex gap-x-2 text-gray-500 hover:bg-gray-200 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.5 15.577v-8.65l-2.33 2.33l-.708-.719L12 5l3.538 3.538l-.707.72L12.5 6.927v8.65h-1ZM6.615 19q-.69 0-1.152-.462Q5 18.075 5 17.385v-2.423h1v2.423q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-2.423h1v2.423q0 .69-.462 1.152q-.463.463-1.153.463H6.615Z"
            />
          </svg>

          <span>Importar</span>
        </div>
        <input
          className="editFile hidden"
          onChange={handleFileChange}
          type="file"
          id="imagem-usuario"
        />
      </label>
    </div>
  );
};

export default ImportButton;
