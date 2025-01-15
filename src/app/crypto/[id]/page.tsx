import axios from "axios";
import { Crypto } from "@/types/crypto";
import { Are_You_Serious } from "next/font/google";

const fetchCryptoDetais = async (id: string): Promise<Crypto> => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);    
    return res.data;
}

export async function generateStaticParams() {

    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
        params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10 },
    });

    return res.data.map((crypto: Crypto) => ({
        id: crypto.id,
    }));
    
}

export default async function CryptoDetails({params}:{params: {id: string}}) {
    const crypto = await fetchCryptoDetais(params.id);

    return (
        <div>
            <h1>{crypto.name}</h1>
            <p>{crypto.description?.en || 'No description available'}</p>
            <p>Current Price: ${crypto.current_price}</p>
        </div>
    );
}