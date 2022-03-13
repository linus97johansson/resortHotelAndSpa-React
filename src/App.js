import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStlyes from "./components/styles/global";
import theme from "./components/styles/theme";


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStlyes />
      <>
        <Header />
        <h1>
          Hello
        </h1>
      </>
    </ThemeProvider>
  );
}

export default App;
