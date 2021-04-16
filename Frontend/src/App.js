import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {LandingPage} from './Pages/';
import {Header, Footer} from './Components/Navigations';

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;
