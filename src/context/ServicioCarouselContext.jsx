import { createContext, useState } from "react";
export const ServicioCarouselContext = createContext();
export const ServicioCarouselContextProvider = ({ children }) => {
  const [carouselActive, setCarouselActive] = useState(1);
  let data = {
    carouselActive,
    setCarouselActive,
  };
  return (
    <ServicioCarouselContext.Provider value={data}>
      {children}
    </ServicioCarouselContext.Provider>
  );
};
