import Card, { searchResult } from "./Card";
import useData from "../hooks/useData";
import { Dispatch, SetStateAction, useState } from "react";
import shuffle from "../lib/shuffle";

const URL = "https://pokeapi.co/api/v2/";

interface pokemonAPIResponse {
  count: number;
  results: searchResult[];
  next: string;
}

interface CardListProps {
  number: number;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  highScore: number;
  setHighScore: Dispatch<SetStateAction<number>>;
}

function CardList({
  number,
  score,
  setScore,
  highScore,
  setHighScore,
}: CardListProps) {
  const query = `pokemon?limit=${number}&offset=0`;
  const response = useData<pokemonAPIResponse>(URL + query);
  const [clickedCards, setClickedCards] = useState<string[]>([]);

  if (!response) return <>Loading</>;

  const cards: searchResult[] = shuffle<searchResult>(response.results);
  console.log(cards);

  function resetGame() {
    const newHighScore = Math.max(score, highScore);
    setHighScore(newHighScore);
    setScore(0);
    setClickedCards([]);
  }

  function clickHandler(name: string) {
    if (clickedCards.includes(name)) {
      resetGame();
      return;
    }

    setClickedCards([...clickedCards, name]);
    setScore(score + 1);
  }

  return (
    <main>
      {cards.map((card) => (
        <Card key={card.name} {...card} onClick={() => clickHandler(card.name)} />
      ))}
    </main>
  );
}

export default CardList;
