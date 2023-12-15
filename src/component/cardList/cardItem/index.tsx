import "./index.scss";
import { FC } from "react";

type Props = {
  imgSrc: string,
  title: string,
  text: string
}

const CardItem:FC<Props> = (props) => {
  const { imgSrc, title, text } = props
  return (
    <>
      <img src={imgSrc} alt={title}/>
      <div className="itemContent">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </>
  )
}

export { CardItem }
