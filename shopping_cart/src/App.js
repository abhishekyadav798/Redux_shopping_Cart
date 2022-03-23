
import './App.css';
import Home from  './components/Home'
import HeaderContainer from './containers/HeaderContainer';
import Home2Container from './containers/Home2Container';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div className="App">
     
      <HeaderContainer/>
      <HomeContainer/>
      <Home2Container/>
    </div>
  );
}

export default App;
