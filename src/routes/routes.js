import { Contact } from "../components/pages/contact/Contact";
import { Home } from "../components/pages/home/Home";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "contact",
    path: "/contact",
    Element: Contact,
  },
];
