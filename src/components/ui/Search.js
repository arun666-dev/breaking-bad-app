import { useState } from "react";

export const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search characters"
          autoFocus
          value={text}
          onChange={(event) => onChange(event.target.value)}
        />
      </form>
    </section>
  );
};
