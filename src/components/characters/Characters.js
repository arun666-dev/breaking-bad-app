import { CharacterItems } from "./CharacterItems";
import { Spinner } from "../ui/Spinner";

export const Characters = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItems key={item.char_id} item={item} />
      ))}
    </section>
  );
};
