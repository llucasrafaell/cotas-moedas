export const queryAPI = async () => {
    try {
      const response = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      return null;
    }
  };