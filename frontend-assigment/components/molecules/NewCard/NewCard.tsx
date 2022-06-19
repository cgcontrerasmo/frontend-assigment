import Image from "next/image";
import { FC, useEffect } from "react";
import { New } from "../../../models/new";
type Props = { new: New };

const NewCard: FC<Props> = (props: Props) => {
  return (
    <div className="card newCard">
      <a
        href={props.new?.link}
        target="_blank"
        rel="noreferrer"
        className="aNewCard"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              {props.new && (
                <img src={props.new?.media} alt={props.new?.title} />
              )}
            </div>
            <div className="col-6 px-2">
              <div className="row">
                <b className="cardtitle">{props.new?.title}</b>
              </div>
              <div className="row">
                <p>
                  Por:{" "}
                  {props.new?.author === null ? "Anónimo" : props.new?.author}
                </p>
              </div>
              <hr />
              <div className="row">
                <div className="col-4 d-flex align-items-center justify-content-center px-0">
                  <i className="bi bi-star" />
                  <p>{props.new?._score.toString().substring(0, 2)}</p>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center px-0">
                  <i className="bi bi-chat-left" />
                  <p>{props.new?.rank}</p>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center px-0">
                  <i className="bi bi-eye" />
                  <p>{props.new?.rank}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewCard;
