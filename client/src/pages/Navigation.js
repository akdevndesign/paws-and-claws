import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Application from "./Application";

export default function Navigation({ onPage }) {
  let whichPage;
  switch (onPage) {
    case "about":
      whichPage = <About />;
      break;
    case "contact":
      whichPage = <Contact />;
      break;
    case "application":
      whichPage = <Application />;
      break;
    default:
      whichPage = <Home />;
  }
  return whichPage;
}
