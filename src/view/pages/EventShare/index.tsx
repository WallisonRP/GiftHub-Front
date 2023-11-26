import MenuBar from "../../components/MenuBar";
import PresentCard from "../../components/PresentCard";
import "./style.css";

function EventShare() {
  return (
    <div>
      <MenuBar />
      <main className="w-full">
        <div className="mb-4 ">
          <div className="flex flex-col w-full">
            <div className="rounded-bl-lg rounded-br-lg shadow-xl h-80 px-10 py-16 present">
              <h4 className="text-2xl text-gray-100 font-bold ">Sobre mim</h4>
              <p className="mt-2 text-gray-100 text-left w-1/2">
                asdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasasdvasdasdasdasdasdasdasasd
              </p>
            </div>
          </div>
        </div>
        <div className="px-10">
          Cards
          <div className="flex gap-x-8 gap-y-4 flex-wrap">
            <PresentCard />
            <PresentCard />
            <PresentCard />
            <PresentCard />
            <PresentCard />
            <PresentCard />
            <PresentCard />
            <PresentCard />
            <PresentCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default EventShare;
