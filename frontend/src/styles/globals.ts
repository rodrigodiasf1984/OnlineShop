import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
  --background: #F0F2F5;
  --red: #E52E4D;
  --green: #33CC95;
  --blue: #5429CC;
  --blue-light: #6933FF;
  --gray-50:#F7FAFC;
  --gray-100:#EDF2F7;
  --gray-200:#E2E8F0;
  --gray-300:#CBD5E0;
  --gray-400:#A0AEC0;
  --gray-500:#718096;
  --gray-600:#4A5568;
  --gray-700:#2D3748;
  --gray-800:#1A202C;
  --gray-900:#171923;
  --text-title: #363F5F;
  --text-body: #969CB3;
  --shape: #FFFFFF;
  --input-border: #d7d7d7;
  --input-background: #e7e9ee;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
  text-decoration: none

}

html{
  @media (max-width: 1080px) {
    font-size:93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body{
  min-height: 100vh;
  background: var(--background);
  -webkit-font-smoothing: antialiased;

}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display:flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width:576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top:1.5rem;
  border:0;
  background: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}

`;
