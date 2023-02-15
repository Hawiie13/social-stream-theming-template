import { Avatar, Row, Col, Typography } from "antd";
import React from "react";
const { Text } = Typography;

const getType = (type) => {
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

const ChatBadges = ({ chatBadges }) => {
  return chatBadges.map((i) => (
    <Avatar
      style={{ marginLeft: 5 }}
      size={{ xs: 20, sm: 20, md: 20, lg: 20, xl: 20, xxl: 20 }}
      src={i}
    />
  ));
};

const textShadow =
  "-2px -2px #000000, -2px -1px #000000, -2px 0px #000000, -2px 1px #000000, -2px 2px #000000, -1px -2px #000000, -1px -1px #000000, -1px 0px #000000, -1px 1px #000000, -1px 2px #000000, 0px -2px #000000, 0px -1px #000000, 0px 0px #000000, 0px 1px #000000, 0px 2px #000000, 1px -2px #000000, 1px -1px #000000, 1px 0px #000000, 1px 1px #000000, 1px 2px #000000, 2px -2px #000000, 2px -1px #000000, 2px 0px #000000, 2px 1px #000000, 2px 2px #000000";

const ChatOverlay = ({ content }) => {
  console.log(content);
  const type = getType(content.type);
  return (
    <Row
      id={`msg_${content.id}`}
      data-menu="context-menu"
      className="highlight-chat"
      data-source-type={content.type}
      style={{ marginTop: 10, minWidth: 320 }}
      wrap={true}
    >
      <div className="queueid"></div>
      <Col style={{ padding: "10px 10px 10px 10px", width: "41px" }}>
        <Avatar
          size={{ xs: 30, sm: 30, md: 30, lg: 30, xl: 30, xxl: 30 }}
          src={`${content.type}.png`}
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
                color: content.nameColor || "black",
                textShadow,
              }}
            >
              <Avatar
                style={{ marginTop: "-5px" }}
                size={{ xs: 25, sm: 25, md: 25, lg: 25, xl: 25, xxl: 25 }}
                src={content.chatimg || content.sourceImg}
              />
              &nbsp; {content.chatname}
              <ChatBadges chatBadges={content.chatbadges} />
            </Text>
          </Col>
          <Col span={24} className="hl-message" id={`content_${content.id}`}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 20,
                textShadow,
                color: "white",
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: content.chatmessage }} />
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ChatOverlay;
