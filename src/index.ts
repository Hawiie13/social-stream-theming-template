import { createRoot } from "react-dom/client";
import Demo from "./component/demo";
import { SAMPLE_DATA } from "./enum"
import { filterChats } from "./enum/filter-chats.enum";
import "./app.css"


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function checkChat(content: any) {
  return (filterChats as any)?.[content.type]?.some((chat: string) => content.chatmessage.includes(chat))
}

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
  node.classList.add('fading')
  node.style.marginTop = "10px"
  node.style.width = "calc(98%-100px)"
  node.style.minWidth = "420px"
  node.style.display = "flex !important";

  const root = createRoot(node);
  root.render(Demo({ content }));

  const mountNode = document.getElementById("output") as HTMLDivElement;
  mountNode.style.width = "100%";
  // mountNode.style.minWidth = "864px"
  mountNode.style.position = "absolute";
  mountNode.style.bottom = "0px";

  if (content.type === "tiktok" && checkChat(content) && urlParams.has('followAndShare')) {
    setTimeout(() => {

      node.style.display = "none"
    }, 5000); // Adjust the delay as needed
  }

  mountNode.appendChild(node);

  let observer = new IntersectionObserver((entries) => {
    const [entry] = entries
    node.style.visibility = entry.isIntersecting ? "visible" : "hidden"
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.99
  });
  observer.observe(node as any);


}

(window as any).processData = processData;


// add ?test in the params for testing
const App = () => SAMPLE_DATA.map((contents) => processData({ contents }))

if (urlParams.has('test')) {
  App();
}



