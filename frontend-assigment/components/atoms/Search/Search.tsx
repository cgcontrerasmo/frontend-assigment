import { FC, useState } from "react";

type Props = {};

const Search: FC<Props> = ({}) => {
  const [valueToSearch, setValueToSearch] = useState("");
  return (
    <>
      <button>buscar</button>
      <input
        placeholder="¿Qué estás buscando?"
        value={valueToSearch}
        onChange={(e) => setValueToSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
