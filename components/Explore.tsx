import { getExplore } from "@/app/utils/api";
import ExploreCard from "./ExploreCard";
import { ExploreData } from "@/app/types/app";
import MainHeading from "./Header/MainHeading";

export default async function Explore() {
  const exploreData: ExploreData = await getExplore();
  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title={"Explore Nearby"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item) => (
            <ExploreCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
