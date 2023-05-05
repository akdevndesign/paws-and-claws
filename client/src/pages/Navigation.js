import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Account from "./Account";

export default function Navigation({ onPage }) {
  let whichPage;
  switch (onPage) {
    case "about":
      whichPage = <About />;
      break;
    case "contact":
      whichPage = <Contact />;
      break;
    case "account":
      whichPage = <Account />;
      break;
    default:
      whichPage = <Home />;
  }
  return whichPage;
}
