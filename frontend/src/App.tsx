import { BrowserRouter } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { GlobalStyle } from './styles/globals';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <GlobalStyle />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
