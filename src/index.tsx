import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { HeadProvider, Title, Link } from 'react-head'
import ReactDOM from 'react-dom/client'
import App from './App';

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


export const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HeadProvider>
    <Title>Algodle</Title>
    <Link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css' />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </HeadProvider>
  
);

