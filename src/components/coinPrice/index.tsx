import AxiosComponent from "@/providers/axiosComponent";
import { Skeleton } from "../ui/skeleton";

interface CoinData {
  current_price: number;
  image: string;
  name: string;
}

interface CoinPriceProps {
  coinID: string;
}

// The API returns an array containing a single CoinData object.
type CoinDataArray = CoinData[];

const CoinPriceComponent = ({ coinID }: CoinPriceProps) => {
  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinID}`;

  const renderCoinData = (data: CoinDataArray) => {
    const coin = data[0];

    // If the data is empty but not null
    if (!coin) {
      //AxiosComponent returns null on null data, this is a safety for empty arrays.
      return <div>No data available for coin ID: {coinID}.</div>;
    }

    return (
      <div className="flex flex-col items-center text-lg mb-10">
        <img src={coin.image} alt={coin.name} className="h-15 w-15 mb-2" />
        <p>
          {coin.name} price: ${coin.current_price.toFixed(2)}
        </p>
      </div>
    );
  };

  return (
    //CoinDataArray as the generic type T
    <AxiosComponent<CoinDataArray>
      url={API_URL}
      method="GET"
      // onLoading handles the initial state
      onLoading={
        <div className="flex flex-col items-center text-lg mb-10">
          <Skeleton className="h-15 w-15 mb-8 rounded-full" />
          <Skeleton className="h-4 w-60" />
        </div>
      }
      // render handles the success state
      render={renderCoinData}
    />
  );
};

export default CoinPriceComponent;
