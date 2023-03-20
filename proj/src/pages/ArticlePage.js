import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import articles from './article-content';
import CommentsList from '../components/CommentsList.js';
import AddCommentForm from '../components/AddCommentForm';


const ArticlesPage = () => {
    const [articleInfo, setArticleInfo] = useState ({ upvotes: 0, comments: []});
    const { articleId } = useParams();
    
    
    useEffect( ()=> {
         const loadArticleInfo = async () => {
             const response = await axios.get(`http://localhost:8081/api/articles/${articleId}`);
             const articleInfo = response.data() || {};
             setArticleInfo(articleInfo);
         }
        loadArticleInfo();
        
    }, []);
    
    
    const article = articles.find((c)=> c.name === articleId)
    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }
    
    
    if (!article){
        return (<NotFoundPage />)
    }
    return (
        <div>
        <h1>{article.title}</h1>
        <div className="upvotes-section">
            <button onClick={addUpvote} >Vote</button>
            <p id="upvote">This article has {articleInfo.upvotes} votes</p>
        </div>
        {article.content.map((para, index) => (<p key={index}>{para}</p>))}
         <AddCommentForm
            articleName={articleId}
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
        <CommentsList comments={articleInfo.comments} />
        </div>
        );
}


export default ArticlesPage;