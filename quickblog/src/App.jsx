import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard';
import ListBlog from './pages/Admin/ListBlog';
import AddBlog from './pages/Admin/AddBlog';
import Comments from './pages/Admin/Comments';
import Login from './components/Admin/Login';
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from '../context/AppContext';

const App = () => {
  const {token} =useAppContext();
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog/:id' element={<Blog/>}></Route>
        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='addBlog' element={<AddBlog/>}></Route>
          <Route path='listBlog' element={<ListBlog/>}></Route>
          <Route path='addBlog' element={<ListBlog/>}></Route>
          <Route path='comments' element={<Comments/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
