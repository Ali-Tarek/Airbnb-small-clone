import { getLive } from "@/app/utils/api";
import MainHeading from "./Header/MainHeading";
import { LiveData } from "@/app/types/app";
import LiveCard from "./LiveCard";

async function Live() {
  const liveData: LiveData = await getLive();
  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title={"Live Anywhere"} />
        <div className="flex space-x-3 overflow-scroll no-scrollBar p-3 -ml-3">
          {liveData.map((item) => (
            <LiveCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Live;
