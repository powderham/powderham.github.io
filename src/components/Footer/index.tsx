import * as React from "react";
import { Divider, FooterStyled } from "./styles";

const Footer = () => (
  <FooterStyled className="footer-main">
    <Divider />
    {`Ed Powderham © ${new Date().getFullYear()}`}
    <a className="link" href="/feed.xml" target="_blank">
      {/* <symbol id="icon-rss" viewBox="0 0 1024 1024">
        <title>rss</title>
        <path
          className="path1"
          d="M122.88 122.88v121.19c362.803 0 656.896 294.195 656.896 656.998h121.293c0-429.773-348.416-778.189-778.189-778.189zM122.88 365.414v121.293c228.813 0 414.362 185.498 414.362 414.413h121.242c0-295.834-239.821-535.706-535.603-535.706zM239.053 668.621c-64.205 0-116.224 52.122-116.224 116.275s52.019 116.224 116.224 116.224 116.173-52.019 116.173-116.224-51.968-116.275-116.173-116.275z"
        ></path>
      </symbol> */}
      <svg className="icon icon-rss">
        <use xlinkHref="#icon-rss"></use>
      </svg>
    </a>
  </FooterStyled>
);

export default Footer;
