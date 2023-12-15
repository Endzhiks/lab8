import "./index.scss";

import { TextBlock } from "../textBlock";
import { LogosContainer } from "../logos-container";
import { Container } from "../container";

// @ts-ignore
import phones from "../../assets/phones.png";
// @ts-ignore
import appleLogo from "../../assets/apple-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <Container className="header-content">
          <TextBlock
            theme="dark"
            align="left"
            title={"We take your business to the next level."}
            text={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."}
            withBtn
            btnText="See on Appstore"
            btnWithImage
            imgSrc={appleLogo}
          />
          {<img src={phones} alt=""/>}
      </Container>
      <LogosContainer />
    </header>
  )
}

export { Header };
