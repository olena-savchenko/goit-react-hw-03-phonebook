import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

button {
  display: block;
  font-family: inherit;
  cursor: pointer;
}

ul,
ol {
  margin: 0;
  padding: 0;
}
`;
