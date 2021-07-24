import { quoteList } from "./quoteList";

const randomIndex = () => {
  let min = Math.ceil(0);
  let max = Math.floor(quoteList.length - 1);

  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};
export const getRandomQuote = () => {
  return quoteList[randomIndex()];
};
