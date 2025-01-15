import axios from "axios";
import CryptoCard from "@/components/CryptoCard";
import FavoritesList from "@/components/FavoritesList";
import { Crypto } from "@/types/crypto";

const fetchCryptos = async (): Promise<Crypto[]> =>{
  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
    params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10 },
  });

  return res.data;
}

export default async function Home() {
  const cryptos = await fetchCryptos();

  return (
    <div>
      <h1>Crypto Tracker</h1>
      <FavoritesList cryptos={cryptos} />
      <div>
        {cryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  )
}