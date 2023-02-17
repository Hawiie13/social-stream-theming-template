import { createRoot } from "react-dom/client";
import Demo from "./component/demo";
import { SAMPLE_DATA } from "./enum"




function processData({ contents }: any) {
  const content = contents
  var node = document.createElement("div");
  node.setAttribute("id", `msg_${content?.id}`)
  node.setAttribute("data-menu", "context-menu")
  node.setAttribute("data-source-type", content?.type)
  node.setAttribute("data-source-type", content?.type)
  node.classList.add('ant-row')
  node.classList.add('css-dev-only-do-not-override-diro6f')
  node.classList.add('highlight-chat')
  node.style.marginTop = "10px"
  node.style.minWidth = "320px"

  const root = createRoot(node);
  root.render(Demo({ content }));

  const mountNode = document.getElementById("output") as HTMLDivElement;
  mountNode.style.width = "100%";
  mountNode.style.position = "absolute";
  mountNode.style.bottom = "0px";
  mountNode.appendChild(node);
}

(window as any).processData = processData;


// add &test in the params for testing
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const App = () => {
  return SAMPLE_DATA.map((contents) => processData({ contents }));
};

if (urlParams.has('test')) {
  App();
}



