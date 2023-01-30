import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import mermaid from "mermaid";

const theme = createTheme({});

mermaid.mermaidAPI.initialize({ startOnLoad: true, logLevel: 5 });

const container = document.getElementById("app")!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
