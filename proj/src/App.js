import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage.js';
import CreateAccountPage from './pages/CreateAccountPage.js';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div className="App">
        
        <div id="page-body">
        <h1>Article FullStack Site</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-acount" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

//axios libraries
// const response = await axios.get('http://localhost:8080/api/articles/learn-react');
// const data = response.data;
