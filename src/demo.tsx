import { Avatar, Row, Col, Typography } from "antd";
import React from "react";
const { Text } = Typography;

type IValue = {
  chatname: string;
  chatbadges: Array<string>;
  chatmessage: string;
  chatimg: string;
  hasDonation: string;
  hasMembership: string;
  type: string;
  sourceImg: string;
  tid: number;
  id: number;
  contentimg: string;
  nameColor: string;
};

const data: IValue[] = [
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

const App = () => {
  return data.map((i) => <ChatOverlay content={i} />);
};

const getType = (type?: string) => {
  switch (type) {
    case "facebook":
      return {
        image:
          "https://i.pinimg.com/originals/fd/eb/dd/fdebdd6ec05cfb9bdc6ebfb0dfe91e6f.jpg",
        color: "rgba(139, 157, 195, 0.3)",
      };
    case "twitch":
      return {
        image:
          "https://www.iconpacks.net/icons/2/free-twitch-icon-2178-thumb.png",
        color: "rgba(129, 95, 192, 0.3)",
      };

    default:
      return {
        image: "https://friconix.com/png/fi-cnsuxx-question-mark.png",
        color: "white",
      };
  }
};
type IChatBadges = { chatBadges?: IValue["chatbadges"] };

const ChatBadges: any = ({ chatBadges }: IChatBadges) => {
  return chatBadges?.map((v, i) => (
    <Avatar
      key={i}
      style={{ marginLeft: 5 }}
      size={{ xs: 20, sm: 20, md: 20, lg: 20, xl: 20, xxl: 20 }}
      src={v}
    />
  ));
};

const textShadow =
  "-2px -2px #000000, -2px -1px #000000, -2px 0px #000000, -2px 1px #000000, -2px 2px #000000, -1px -2px #000000, -1px -1px #000000, -1px 0px #000000, -1px 1px #000000, -1px 2px #000000, 0px -2px #000000, 0px -1px #000000, 0px 0px #000000, 0px 1px #000000, 0px 2px #000000, 1px -2px #000000, 1px -1px #000000, 1px 0px #000000, 1px 1px #000000, 1px 2px #000000, 2px -2px #000000, 2px -1px #000000, 2px 0px #000000, 2px 1px #000000, 2px 2px #000000";

const ChatOverlay: React.FC<{ content?: IValue }> = ({ content }) => {
  console.log(content);
  const type = getType(content?.type);
  return (
    <>
      <div className="queueid"></div>
      <Col style={{ margin: 5, width: "41px" }}>
        <Avatar
          size={{ xs: 30, sm: 30, md: 30, lg: 30, xl: 30, xxl: 30 }}
          src={`${content?.type}.png`}
        />
      </Col>
      <Col
        style={{
          backgroundColor: type.color,
          padding: 10,
          borderRadius: 15,
          width: "100% - 41px",
        }}
        xs={18}
        sm={21}
        md={22}
        xl={22}
        xxl={22}
      >
        <Row>
          <Col span={24}>
            <Text
              strong
              style={{
                fontSize: 16,
                color: content?.nameColor || "black",
                textShadow,
              }}
            >
              <Avatar
                style={{ marginTop: "-5px" }}
                size={{ xs: 25, sm: 25, md: 25, lg: 25, xl: 25, xxl: 25 }}
                src={content?.chatimg || content?.sourceImg}
              />
              &nbsp; {content?.chatname}
              <ChatBadges chatBadges={content?.chatbadges} />
            </Text>
          </Col>
          <Col span={24} className="hl-message" id={`content_${content?.id}`}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 20,
                textShadow,
                color: "white",
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: content?.chatmessage || "",
                }}
              />
            </Text>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default ChatOverlay;
