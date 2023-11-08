import { FC } from "react";

import { Navbar } from "./components";
import { About, Header, Work, Skills } from "./containers";
import "./App.scss";

const App: FC = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
  </div>
);

export default App;
