import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Index from "./content/index";
import Resources from "./content/resources.mdx";
import Week1 from "./content/presentations/week1";
import Slides from "./content/presentations/slides.mdx";
import theme from "./themes/slide-default";
import Deck from "./routes/deck";
import Week2 from "./content/presentations/week2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "/resources", element: <Resources /> },
      { path: "/slides", element: <Slides /> },
    ],
  },
  {
    path: "/slides",
    element: <Deck theme={theme} />,
    children: [
      { path: "week1", element: <Week1 /> },
      { path: "week2", element: <Week2 /> },
    ],
  },
  // {
  //   path: "/slides",
  //   children: [
  //     {
  //       path: "week2",
  //       element: <MdxDeck slides={week2} notes={notes} theme={theme} />,
  //     },
  //   ],
  // },
]);
export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
