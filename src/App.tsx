import Home from "./pages/Home";
import LPThemeProvider from "./providers/LPThemeProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LPThemeProvider>
        <Home />
      </LPThemeProvider>
    </BrowserRouter>
  );
}

export default App;
