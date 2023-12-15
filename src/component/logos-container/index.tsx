import "./index.scss";
// @ts-ignore
import squareLogo from "../../assets/square-logo.svg";
// @ts-ignore
import airbnbLogo from "../../assets/airbnb-logo.svg";
// @ts-ignore
import evernoteLogo from "../../assets/evernote-logo.svg";
// @ts-ignore
import pinterestLogo from "../../assets/pinterest-logo.svg";

const LogosContainer = () => {
  return (
    <div className="logo-container">
      <img src={squareLogo} alt="Square Logo"/>
      <img src={airbnbLogo} alt="airbnb Logo"/>
      <img src={evernoteLogo} alt="Evernote Logo"/>
      <img src={pinterestLogo} alt="Pinterest Logo"/>
    </div>
  )
}

export { LogosContainer }
