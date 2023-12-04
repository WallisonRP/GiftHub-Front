const ExportButton = ({ responseData }: any) => {
  const handleDownload = () => {
    const jsonString = JSON.stringify(responseData);

    const blob = new Blob([jsonString], { type: "application/json" });
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "file.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);
  };

  return (
    <button
      className="px-4 py-2 border-[1px] border-gray-500 rounded-lg flex gap-x-2 text-gray-500 hover:bg-gray-200 hover:text-black"
      onClick={handleDownload}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m12 15.577l-3.538-3.539l.707-.719L11.5 13.65V5h1v8.65l2.33-2.33l.708.718L12 15.577ZM6.615 19q-.69 0-1.152-.462Q5 18.075 5 17.385v-2.423h1v2.423q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-2.423h1v2.423q0 .69-.462 1.152q-.463.463-1.153.463H6.615Z"
        />
      </svg>

      <span>Exportar</span>
    </button>
  );
};

export default ExportButton;
