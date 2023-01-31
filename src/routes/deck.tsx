import React from "react";
import { Outlet } from "react-router-dom";
import { Deck as SpecDeck, SpectacleTheme } from "spectacle";

interface DeckProps {
  slides: JSX.Element[];
  notes: JSX.Element[];
  theme: SpectacleTheme;
}

export default function Deck(props: React.PropsWithChildren<DeckProps>) {
  return (
    <SpecDeck theme={props.theme}>
      <Outlet />
    </SpecDeck>
  );
}
