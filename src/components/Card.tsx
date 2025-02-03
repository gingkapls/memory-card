import { MouseEventHandler } from "react";
import useData from "../hooks/useData";

interface searchResult {
  name: string;
  url: string;
}

interface sprites {
  back_default: string;
}

interface pokemonCard {
  sprites: sprites;
}

interface CardProps extends searchResult {
  onClick: () => void;
}

function Card({ name, url, onClick }: CardProps) {
  const cardDetails = useData<pokemonCard>(url);
  if (!cardDetails) return <>Loading</>;

  const image = cardDetails.sprites.back_default;
  return (
    <figure>
      <img src={image} alt={name} onClick={onClick} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export type { searchResult, pokemonCard };
export default Card;
