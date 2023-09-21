import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import ClockPage from "./pages/ClockKPage";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Help path="/help" />
      <ClockPage path="/clockPage" />
      <Tasks path="/tasks" />
    </Router>
  );
}

export default App;
