import "./App.css";
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import HomePage from "./pages/index.js";

function App() {
   return (
      <div className="App">
         <Header />
         <HomePage />
         <Footer />
      </div>
   );
}

export default App;
