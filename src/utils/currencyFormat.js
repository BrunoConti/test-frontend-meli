export default function currencyFormat(currency) {
  const currencyFormated = new Intl.NumberFormat("de-DE").format(currency);
  return currencyFormated;
}
