import { ThemeProvider } from "styled-components";
import GlobalStlyes from "./components/styles/global.styled";
import theme from "./components/styles/theme";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Error from "./routes/Error";
import Home from "./routes/Home";
import Rooms from "./routes/Rooms";
import SingleRoom from "./routes/Room";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStlyes />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} >
          </Route>
          <Route path="/rooms/:roomId" element={<SingleRoom />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
