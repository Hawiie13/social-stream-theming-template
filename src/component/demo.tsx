import { Avatar, Row, Col, Typography } from "antd";
import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import {
  FACEBOOK,
  ICON_FONT_CN_LINK,
  TWITCH,
  DEFAULT,
  TIKTOK,
  TEXT_SHADOW,
} from "../enum";
const { Text } = Typography;

const IconFont = createFromIconfontCN({
  scriptUrl: ICON_FONT_CN_LINK,
});

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

const getType = (type?: string) => {
  switch (type) {
    case "facebook":
      return {
        image: FACEBOOK.ICON_IMAGE_LINK,
        bubbleColor: FACEBOOK.BUBBLE_COLOR,
        icon: <IconFont color="#4267B2" type={FACEBOOK.ICON_FONT_CN} />,
        color: FACEBOOK.BACKGROUND_COLOR,
      };
    case "tiktok":
      return {
        image: TIKTOK.ICON_IMAGE_LINK,
        bubbleColor: TIKTOK.BUBBLE_COLOR,
        icon: <IconFont color="#4267B2" type={TIKTOK.ICON_FONT_CN} />,
        color: TIKTOK.BACKGROUND_COLOR,
      };
    case "twitch":
      return {
        image: TWITCH.ICON_IMAGE_LINK,
        bubbleColor: TWITCH.BUBBLE_COLOR,
        icon: <IconFont type={TWITCH.ICON_FONT_CN} />,
        color: TWITCH.BACKGROUND_COLOR,
      };

    default:
      return {
        image: DEFAULT.ICON_IMAGE_LINK,
        bubbleColor: DEFAULT.BUBBLE_COLOR,
        icon: <IconFont type={DEFAULT.ICON_FONT_CN} />,
        color: DEFAULT.BACKGROUND_COLOR,
      };
  }
};
type IChatBadges = { chatBadges?: IValue["chatbadges"] };

const ChatBadges: any = ({ chatBadges }: IChatBadges) => {
  if (!Array.isArray(chatBadges)) return null;
  return chatBadges?.map((v, i) => (
    <Avatar
      key={i}
      style={{ marginLeft: 5 }}
      size={{ xs: 20, sm: 20, md: 20, lg: 20, xl: 20, xxl: 20 }}
      src={v}
    />
  ));
};

const ChatOverlay: React.FC<{ content?: IValue }> = ({ content }) => {
  const type = getType(content?.type);
  return (
    <>
      <div className="queueid"></div>
      <Col style={{ margin: 9, width: "41px" }}>
        <Avatar
          size={30}
          style={{ backgroundColor: type.color }}
          icon={type.icon}
        />
      </Col>
      <Col
        style={{
          backgroundColor: type.bubbleColor,
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
                color: content?.nameColor || "white",
                textShadow: TEXT_SHADOW,
              }}
            >
              <Avatar
                style={{ marginTop: "-5px" }}
                size={30}
                src={content?.chatimg || content?.sourceImg}
                icon={
                  <IconFont
                    size={100}
                    color="#4267B2"
                    type="social-stream-person"
                  />
                }
              />
              &nbsp;
              <span
                dangerouslySetInnerHTML={{
                  __html: content?.chatname || "",
                }}
              />
              <ChatBadges chatBadges={content?.chatbadges} />
            </Text>
          </Col>
          <Col span={24} className="hl-message" id={`content_${content?.id}`}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 20,
                textShadow: TEXT_SHADOW,
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
