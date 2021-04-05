import Router from './Router/Router';
import SidebarNav from './Helpers/SidebarNav/SidebarNav';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SidebarNav />
      <main className="main">
        <Router />
      </main>
    </div>
  );
}

export default App;
