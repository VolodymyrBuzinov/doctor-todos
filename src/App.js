import Router from './Router/Router';
import SidebarNav from './Helpers/SidebarNav/SidebarNav';
import Header from './Helpers/Header/Header';
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
