import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/globals';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
