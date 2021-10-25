import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NavBar, Footer } from './components';
import { GlobalStyle } from './styles/globals';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
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
