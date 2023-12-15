import "./index.scss";
import { Container } from "../container";

const Footer = () => {
  return (
    <Container className="pb120 dark">
      <ul className="footerList">
        <li>Customers</li>
        <li>Completed Apps</li>
        <li>Downloads</li>
      </ul>
    </Container>
  )
}

export { Footer }
