import Home from "./pages/Home";
import LPThemeProvider from "./providers/LPThemeProvider";

function App() {
  return (
    <LPThemeProvider>
      <Home />
    </LPThemeProvider>
  );
}

export default App;
