import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import { format } from "date-fns";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "@/components/ListingCard";

type searchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numberOfGuests: string;
};

async function searchResult({
  searchParams: { location, startDate, endDate, numberOfGuests },
}: {
  searchParams: searchParams;
}) {
  let formatStartDate, formatEndDate;
  if (startDate && endDate) {
    formatStartDate = format(new Date(startDate), "dd MMMM yy");
    formatEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatStartDate} - ${formatEndDate}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} ${
          +numberOfGuests > 1 ? "guests" : "guest"
        }`}
      />

      <main>
        <section className="flex-grow pt-14">
          <div className="container">
            <p className="text-xs">
              300+ Stays - {range} - for {numberOfGuests}{" "}
              {+numberOfGuests > 1 ? "guests" : "guest"}
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 white">
              {filters.map((filter) => (
                <button type="button" className="filter-btn" key={filter}>
                  {filter}
                </button>
              ))}
            </div>
            <div>
              {searchResultData.map((listing) => (
                <ListingCard
                  key={listing.title}
                  img={listing.img}
                  location={listing.location}
                  title={listing.title}
                  description={listing.description}
                  star={listing.star}
                  price={listing.price}
                  total={listing.total}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default searchResult;
