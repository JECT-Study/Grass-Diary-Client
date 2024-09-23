import { createGlobalStyle } from 'styled-components';
import { TYPO } from './typo';
import { semantic } from './semantic';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'KoPubWorldDotum';
    font-display: swap;
    font-weight: 500;
    src: url('/assets/font/KoPubWorldDotum.woff2') format("woff2");
  }

  @font-face {
    font-family: 'Pretendard';
    font-display: swap;
    font-weight: 500;
    src: url('/assets/font/Pretendard.woff2') format("woff2");
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    font-family: Pretendard;
  }
  
  body {
    min-height: 100vh;
    
    line-height: 1.5;
    overscroll-behavior: none;
  }
  
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  button,
  input,
  label {
    line-height: 1.34;
  }

  button {
  border: none;
  background: none;
  cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
    white-space: pre-wrap;
    word-wrap: break-word; /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
    text-decoration: none;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  textarea:not([rows]) {
    min-height: 10em;
  }

  :target {
    scroll-margin-block: 5ex;
  }

  p {
    white-space: pre-wrap;
    word-wrap: break-word; /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  }

  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  .ql-align-justify {
    text-align: justify;
  }

  blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }

  .ql-toolbar.ql-snow{
    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
  }

  .ql-container.ql-snow{
    background-color:white;
    border-bottom-right-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
  }

  .ql-editor {
    height: 50vh;
    width: 42.5rem;

    color: ${semantic.light.object.solid.hero};
    ${TYPO.body2}

    @media screen and (max-width: 60em) {
    height:36.25em;
    width: 20em;
    gap: 1.5em;
  }

  }


  input {
    margin: 0;
    padding: 0;
    border: 1px solid #ccc; /* 경계선을 일관되게 설정 */
    outline: none; /* 포커스 시 발생하는 외곽선 제거 */
    font-family: inherit; /* 폰트 스타일을 상속받아 일관성 유지 */
    background-color: transparent; /* 배경색을 투명하게 설정 */
}

  ul {
    padding: 0;
    margin: 0;
  }
`;
