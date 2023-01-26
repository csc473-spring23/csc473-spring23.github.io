import React from "react";
import { Deck as SpecDeck } from "spectacle";
import { Outlet } from "react-router-dom";
import theme from "../themes/slide-default";

function Deck() {
  return (
    <SpecDeck theme={theme}>
      <Outlet />
    </SpecDeck>
  );
}

export default Deck;
