import { FC } from "react";

type Props = {
  message: string;
};

const Chip: FC<Props> = ({ message }) => {
  return (
    <div className="chip">
      <p>{message}</p>
    </div>
  );
};

export default Chip;
