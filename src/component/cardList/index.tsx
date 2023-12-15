import "./index.scss";
import { FC } from "react";
import { CardItem } from "./cardItem";
import { Card } from "../../type";
import classNames from "classnames";

type Props = {
  cards: Card[],
  imgSrc?: string,
}

const CardList:FC<Props> = (props) => {
  const {
    cards,
    imgSrc = "",
  } = props
  
  return (
    <>
      {
        !imgSrc ? (
          <ul className="cardList">
            {cards.map(({ id, imgSrc, title, text}) => (
              <li className={classNames("cardItem", { "no-image": imgSrc === "" })} key={id}>
                <CardItem imgSrc={imgSrc} title={title} text={text} />
              </li>
              ))}
          </ul>
        ) : (
          <div className="cardListWithImg">
            <div className="cardItems">
              {cards.map(({id, imgSrc, title, text}, index) => {
                if (index < 2) {
                  return (
                    <div className="cardItem" key={id}>
                      <CardItem imgSrc={imgSrc} title={title} text={text} />
                    </div>
                  )
                }
                return <></>;
              })}
            </div>
            <img src={imgSrc} alt="phone"/>
            <div className="cardItems">
              {cards.map(({id, imgSrc, title, text}, index) => {
                if (index >= 2) {
                  return (
                    <div className="cardItem" key={id}>
                      <CardItem imgSrc={imgSrc} title={title} text={text} />
                    </div>
                  )
                }
                return <></>;
              })}
            </div>
          </div>
        )
      }
    </>
  )
}

export { CardList }
