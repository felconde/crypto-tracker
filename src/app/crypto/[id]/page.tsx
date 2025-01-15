import axios from 'axios';
import { Crypto } from '../../../types/crypto';

// Define o formato correto dos parâmetros
interface PageProps {
  params: {
    id: string;
  };
}

// Função para buscar os detalhes de uma criptomoeda
const fetchCryptoDetails = async (id: string): Promise<Crypto> => {
  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return res.data;
};

// Página de detalhes da criptomoeda
export default async function CryptoDetails({ params }: any) {
  const crypto = await fetchCryptoDetails(params.id);

  return (
    <div>
      <h1>{crypto.name}</h1>
      <p>{crypto.description?.en || 'No description available.'}</p>
      <p>Current Price: ${crypto.current_price}</p>
    </div>
  );
}
