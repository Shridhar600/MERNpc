import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./screens/LandingPage/LandingPage";
function App() {
  return (
    <>
      <Header />
      <main >
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
