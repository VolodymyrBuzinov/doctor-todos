import Router from './Router/Router';
import SidebarNav from './Components/SidebarNav/SidebarNav';
import Header from './Components/Header/Header';
import './App.scss';
function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="content">
        <SidebarNav />
        <main className="main">
          <Router />
        </main>
      </div>
    </div>
  );
}

export default App;
