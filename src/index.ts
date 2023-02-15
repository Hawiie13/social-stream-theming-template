import { createRoot } from "react-dom/client";
import Demo from "./demo";


const data = [
  {
    chatname: "Hawiie13",
    chatbadges: [
      "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1",
    ],
    nameColor: "rgb(154, 205, 50)",
    chatmessage: "test",
    chatimg: "https://api.socialstream.ninja/twitch/?username=Hawiie13",
    hasDonation: "",
    hasMembership: "",
    type: "twitch",
    sourceImg:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/579d1ad3-fea3-4735-b9ce-b14f15ef3c48-profile_image-150x150.png",
    tid: 1216279723,
    id: 153,
    contentimg: "",
  },
  {
    chatname: "Hawiie13",
    chatbadges: [
      "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1",
    ],
    nameColor: "rgb(154, 205, 50)",
    chatmessage: "test",
    chatimg: "https://api.socialstream.ninja/twitch/?username=Hawiie13",
    hasDonation: "",
    hasMembership: "",
    type: "facebook",
    sourceImg:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/579d1ad3-fea3-4735-b9ce-b14f15ef3c48-profile_image-150x150.png",
    tid: 1216279723,
    id: 153,
    contentimg: "",
  },
];

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
  mountNode.style.display = "flex";
  mountNode.style.flexDirection = "column";

  mountNode.appendChild(node);
}

(window as any).processData = processData;


// comment-out to test your theme
// const App = () => {
//   return data.map((i) => processData(i));
// };

// App();
