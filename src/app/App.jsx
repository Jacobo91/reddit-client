import './App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import SideBar from '../components/SideBar/SideBar';
import Post from '../components/Post/Post';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Post/>
        <SideBar />
      </main>
    </div>
  );
}

export default App;
