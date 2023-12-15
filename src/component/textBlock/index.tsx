import "./index.scss";
import { FC } from "react";
import { Button } from "../button";
import classNames from "classnames";

type Align = "left" | "center"
type Theme = "light" | "dark"

type Props = {
  theme?: Theme;
  align?: Align;
  title: string;
  text: string;
  withBtn?: boolean;
  btnText?: string;
  btnWithImage?: boolean;
  imgSrc?: string;
}

const TextBlock:FC<Props> = (props) => {
  const {
    theme = "light",
    align = "center",
    title,
    text,
    withBtn = false,
    btnText = "",
    btnWithImage = false,
    imgSrc = "",
  } = props
  
  return (
    <div className={classNames("text-container", align, `${theme}-container`)}>
      <h1>{title}</h1>
      <p>{text}</p>
      {withBtn && (
        <Button text={btnText} withImage={btnWithImage} imgSrc={imgSrc} />
      )}
    </div>
  )
}

export { TextBlock }
