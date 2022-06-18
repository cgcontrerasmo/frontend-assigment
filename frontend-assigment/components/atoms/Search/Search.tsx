import { FC, useState } from "react";

type Props = {};

const Search: FC<Props> = ({}) => {
  const [valueToSearch, setValueToSearch] = useState("");
  return (
    <div className="row containerSearch">
      <div className="col containerButton p-0">
        <button className="buttonSearch">
          <i className="bi bi-search" />
        </button>
      </div>
      <div className="col containerInput p-0">
        <input
          placeholder="¿Qué estás buscando?"
          value={valueToSearch}
          onChange={(e) => setValueToSearch(e.target.value)}
          className="inputSearch"
        />
      </div>
    </div>
  );
};

export default Search;
