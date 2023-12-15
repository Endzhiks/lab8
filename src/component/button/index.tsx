import "./index.scss";
import { FC } from "react";

type Props = {
  text: string;
  withImage?: boolean;
  imgSrc?: string;
}

const Button:FC<Props> = ({ text, withImage = false, imgSrc = "" }) => {
  return (
    <button className="primary">
      {withImage && (
        <img src={imgSrc} alt=""/>
      )}
      {text}
    </button>
  )
}

export { Button }
