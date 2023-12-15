import "./index.scss";
import { Container } from "../container";
import { TextBlock } from "../textBlock";
import { CardList } from "../cardList";
import { Button } from "../button";
import { Carousel } from "../carousel";
import { Card } from "../../type";

// @ts-ignore
import CircleMustache from "../../assets/circle-mustache.png";
// @ts-ignore
import CirclePhone from "../../assets/circle-phone.png";
// @ts-ignore
import CircleEye from "../../assets/circle-eye.png";
// @ts-ignore
import CircleDownloads from "../../assets/circle-downloads.png";
// @ts-ignore
import CardListPhone from "../../assets/card-list-phone.png";
// @ts-ignore
import ScreenIcon from "../../assets/screen.png";
// @ts-ignore
import AnchorIcon from "../../assets/anchor.png";
// @ts-ignore
import RocketIcon from "../../assets/rocket.png";
// @ts-ignore
import PeopleIcon from "../../assets/people.png";
// @ts-ignore
import CarouselImg from "../../assets/black-circle.png";

const exploreAmazingFeatureCards: Card[] = [
  {
    id: 1,
    imgSrc: CircleMustache,
    title: "100% free",
    text: "Far far sway behind the word mountains",
  },
  {
    id: 2,
    imgSrc: CirclePhone,
    title: "Fully Responsive",
    text: "Far far sway behind the word mountains",
  },
  {
    id: 3,
    imgSrc: CircleEye,
    title: "Retina-ready",
    text: "Far far sway behind the word mountains",
  },
  {
    id: 4,
    imgSrc: CircleDownloads,
    title: "Download",
    text: "Far far sway behind the word mountains",
  },
]

const productCards: Card[] = [
  {
    id: 12,
    imgSrc: "",
    title: "Product name",
    text: "Far far sway behind the word mountains",
  },
  {
    id: 13,
    imgSrc: "",
    title: "Product name",
    text: "Far far sway behind the word mountains",
  },
  {
    id: 14,
    imgSrc: "",
    title: "Product name",
    text: "Far far sway behind the word mountains",
  },
  {
    id: 15,
    imgSrc: "",
    title: "Product name",
    text: "Far far sway behind the word mountains",
  },
]

const betterDesignCards: Card[] = [
  {
    id: 5,
    imgSrc: ScreenIcon,
    title: "Cross Platform Support",
    text: "Far far sway behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 6,
    imgSrc: AnchorIcon,
    title: "Prototyping Tools",
    text: "Far far sway behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 7,
    imgSrc: RocketIcon,
    title: "Powerful Design",
    text: "Far far sway behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
  {
    id: 8,
    imgSrc: PeopleIcon,
    title: "User Collaboration",
    text: "Far far sway behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
  },
]

const carouselItems: Card[] = [
  {
    id: 9,
    imgSrc: CarouselImg,
    title: "Far far away, behind the word mountains, far from the countries Volkalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    text: "Gustav Barrow",
  },
  {
    id: 10,
    imgSrc: CarouselImg,
    title: "Far far away, behind the word mountains, far from the countries Volkalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    text: "Gustav Barrow",
  },
  {
    id: 11,
    imgSrc: CarouselImg,
    title: "Far far away, behind the word mountains, far from the countries Volkalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    text: "Gustav Barrow",
  },
]

const Main = () => {
  return (
    <main className="main">
      <Container className="pt120 pb120 grey center">
        <TextBlock
          title="Explore amazing features"
          text="Far far away, behind the word mountains, far from the countries Volkalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          />
        <CardList cards={exploreAmazingFeatureCards} />
        <Button text="View all features"/>
      </Container>
      <Container className="pt120 pb120">
        <TextBlock
          title="Better design"
          text="Far far away, behind the word mountains, far from the countries Volkalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          />
        <CardList cards={betterDesignCards} imgSrc={CardListPhone} />
      </Container>
      <Container className="pt120 pb30 blue center">
        <Carousel items={carouselItems} />
      </Container>
      <Container className="pt120 pb120 grey center">
        <TextBlock
          title="Other awesome Apps"
          text="Far far away, behind the word mountains, far from the countries Volkalia and Consonantia, there live the blind texts."
        />
        <CardList cards={productCards} />
        <Button text="View all products"/>
      </Container>
    </main>
  );
}

export { Main }
