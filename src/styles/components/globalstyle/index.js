import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'KohinoorBangla-Regular';
    src: url('/fonts/KohinoorBangla-Regular.woff') format('truetype');
  }
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'KohinoorBangla-Regular';
}
:root{
    --primary__color:#574B66;
    --secondary__color: #D6969D;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper {
  width: 100%;
  ${'' /* height: 300px; */}
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* portfolio css */
.project__container {
      background-color: var(--background-color);
      margin-left: 112px;
      padding: 40px 0 40px 40px;
}
.project__small__container {
      border-left: 1px solid var(--white-color);
      margin-left: -25px;
}
.project .button-1::after,
.project .button-1::before {
      border-color: var(--white-color);
}
.project .container__heading {
      border-color: var(--white-color);
}
.project__description p {
      color: #bfbfbf;
      text-align: justify;
}
.project__slider {
      margin-right: -107px;
      overflow: hidden;
}
.overflow__hidden {
      overflow: hidden;
}
.project__slider--container {
      position: relative;
      overflow: hidden;
}
.project__slider--content {
      position: absolute;
      z-index: 100;
      top: 0;
      left: -275px;
      opacity: 1;
}
.project__slider--number {
      position: absolute;
      z-index: 100;
      top: 415px;
      padding: 30px;
      background-color: var(--pitch-black);
}
.project__slider--content {
      background-color: rgba(0, 0, 0, 0.3);
}
.project__slider--button a {
      background: var(--white-color);
      padding: 15px 5px;
}
.project__slider--button svg {
      transform: rotate(315deg);
}
.project__slider--container:hover .project__slider--content {
      transform: translateX(275px);
      -webkit--transition: transform 0.3s ease, opaicty 0.3s ease;
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 1;
      cursor: pointer;
}
.project__slider--container:hover .project__slider--number {
      background-color: var(--primary-color);
}
.project__slider--button:hover > a {
      background: var(--primary-color);
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
}
.project__slider--button a:hover svg {
      transform: rotate(360deg);
      transition: transform 0.3s ease;
      fill: black;
}
`;
