import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.mermaidAPI.initialize({});

interface MermaidProps {
  chart: string;
}

function Mermaid(props: MermaidProps) {
  useEffect(() => {
    mermaid.contentLoaded();
  });

  console.log(props);

  return <pre className="mermaid">{props.chart}</pre>;
}

export default Mermaid;
