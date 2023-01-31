import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  Deck as SpecDeck,
  Slide,
  Notes,
  mdxComponentMap,
  SpectacleTheme,
} from "spectacle";

interface DeckProps {
  slides: JSX.Element[];
  notes: JSX.Element[];
  theme: SpectacleTheme;
}

export default function MdxDeck(props: React.PropsWithChildren<DeckProps>) {
  return (
    <MDXProvider components={mdxComponentMap}>
      <SpecDeck theme={props.theme}>
        {props.slides
          .map((MDXSlide, i) => {
            return [MDXSlide, props.notes[i]];
          })
          .map(([MDXSlide, MDXNote], i) => (
            <Slide key={`slide-${i}`} slideNum={i}>
              <MDXSlide />
              <Notes>
                <MDXNote />
              </Notes>
            </Slide>
          ))}
      </SpecDeck>
    </MDXProvider>
  );
}
