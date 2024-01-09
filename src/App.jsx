import {Route, Routes } from 'react-router-dom';

import Home from './pages/homePage/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import PostSinglePost from './pages/postSinglePost/PostSinglePost.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import './App.css'
import Footer from "./components/footer/Footer.jsx";


function App() {


    return (
        <>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NewPost />} />
                    <Route path="/posts" element={<Overview />} />
                    <Route path="/posts/:id" element={<PostSinglePost />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App