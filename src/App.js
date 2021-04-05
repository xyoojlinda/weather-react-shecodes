
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="border">
        <div className="container">
          <SearchEngine defaultCity="Milwaukee" />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;