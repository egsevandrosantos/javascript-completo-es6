export default function initFetchBitcoin() {
  const bitcoinFetch = fetch("https://blockchain.info/ticker");
  bitcoinFetch
    .then((result) => result.json())
    .then((result) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / result.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.error(error);
    });
}
