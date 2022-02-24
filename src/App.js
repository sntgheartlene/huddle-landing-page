import Header from "./Header/header";
import Section from "./Section/section";
import Footer from "./Footer/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Section />
        <Footer />
      </div>
    </div>
  );
}

export default App;
