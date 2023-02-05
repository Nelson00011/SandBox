import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import articles from './article-content';



const ArticlesPage = () => {
    const { articleId } = useParams();
    const article = articles.find((c)=> c.name === articleId)
    if (!article){
        return (<NotFoundPage />)
    }
    
    return (
        <div>
        <h1>{article.title}</h1>
        {article.content.map((para, index) => (<p key={index}>{para}</p>))}
        </div>
        );
}


export default ArticlesPage;