import { useState } from "react";
import { formatDate, prettyFormatTimeDiff } from "../util/useDate";
import kebabImg from "../assets/img/kebab.png";
import noImg from "../assets/img/no-image.svg";
import style from "./Card.module.css";
import clsx from "clsx";

function Card({ card: { title, description, url, imageSource, createdAt } }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={clsx(style.container, { [style.hoverBgColor]: hover })}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a className={style.card} href={url}>
        <div
          className={clsx(style.image, { [style.hoverImage]: hover })}
          style={{ backgroundImage: `url(${imageSource || noImg})` }}
        ></div>
        <div className={style.explanation}>
          <div className={style.header}>
            <div>{prettyFormatTimeDiff(new Date(createdAt))}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={style.text}>
            <div>{title}</div>
            <div>{description}</div>
          </div>

          <div className={style.footer}>{formatDate(new Date(createdAt))}</div>
        </div>
      </a>
    </div>
  );
}

export default Card;