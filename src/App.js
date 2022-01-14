import logo from './logo.svg';
//import './App.css';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import HomeMaintenace from './Components/Home_Maintain/HomeMaintain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TopNavbar></TopNavbar>
      <HomeMaintenace></HomeMaintenace>
      </header>
    </div>
  );
}

export default App;
