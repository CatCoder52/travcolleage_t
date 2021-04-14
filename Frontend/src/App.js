import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LandingPage} from "./Pages/"
import {Header} from "./Components/Navigations"

function App() {
  return (
    <div className="App">
      <Header/>
     <LandingPage/>
    </div>
  );
}

export default App;
