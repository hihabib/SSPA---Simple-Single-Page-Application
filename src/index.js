import { SPAInit } from "./app/index.js";
import home from "./pages/home.js";
import about from "./pages/about.js";
import error404 from "./pages/error404.js";
import header from "./components/header.js";
import footer from "./components/footer.js";
import contact from "./pages/contact.js";

window.router = SPAInit(
  () => {
    header();
  },
  (currentLocation) => {
    // Handle Routes
    switch (currentLocation.pathname) {
      case "/":
        home();
        break;
      case "/about":
        about();
        break;
      case "/contact":
        contact();
        break;
      default:
        error404();
    }
  },
  () => {
    footer();
  }
);
