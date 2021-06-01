import NavbarComponent from "./components/organisms/Navbar";
import JumbotronComponent from "./components/organisms/HomeJumbotron";
import Col3 from "./components/organisms/HomeLayanan";
import HomePricelist from "./components/organisms/HomePricelist";
import HomeAccordion from "./components/organisms/HomeAccordion";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <Col3 />
      <HomePricelist />
    </div>
  );
}

export default App;
