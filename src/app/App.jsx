import './App.css';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import Posts from '../components/Posts/Posts';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadsubReddits } from '../redux/subreddits/subredditsSlice';
import Home from '../components/Home/Home';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadsubReddits())
  }, [dispatch])

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/r/:forum' element={<Posts/>} />
        </Routes>
        <SideBar />
      </main>
    </div>
  );
}

export default App;
