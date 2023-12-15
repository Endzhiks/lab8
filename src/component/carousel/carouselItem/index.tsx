import "./index.scss";
import { FC } from "react";
import { TextBlock } from "../../textBlock";
import classNames from "classnames";

type Props = {
  srcImg: string,
  title: string,
  name: string,
  isVisible?: boolean,
}

const CarouselItem:FC<Props> = ({ srcImg, title, name, isVisible = false }) => {
  return (
    <div className={classNames("carouselItem", { "visible": isVisible })}>
      <img src={srcImg} alt={name} />
      <TextBlock align="left" theme="dark" title={title} text={name} />
    </div>
  )
}

export { CarouselItem }
