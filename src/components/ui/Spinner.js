import spinner from "../../img/spinner.gif";

export const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{ width: 200, margin: "auto", display: "block" }}
    />
  );
};
