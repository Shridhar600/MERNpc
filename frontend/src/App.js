import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import{ BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Route />
      </main>
      <Footer />
    </BrowserRouter>
    );
}

export default App;
