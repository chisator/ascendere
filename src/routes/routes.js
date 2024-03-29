import { Contact } from "../components/pages/contact/Contact";
import { Home } from "../components/pages/home/Home";
import { LaEmpresa } from "../components/pages/laEmpresa/LaEmpresa";
import { Servicios } from "../components/pages/servicios/Servicios";
import { ConoceMasContainer } from "../components/pages/conoceMas/ConoceMasContainer";

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
  {
    id: "laEmpresa",
    path: "/la-empresa",
    Element: LaEmpresa,
  },
  {
    id: "servicios",
    path: "/servicios",
    Element: Servicios,
  },
  {
    id: "conoceMas",
    path: "/conoce-mas",
    Element: ConoceMasContainer,
  },
];
  
