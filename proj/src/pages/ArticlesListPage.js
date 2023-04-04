import { Link } from 'react-router-dom';
import articles from './article-content';


const ArticlesListPage = () => {
    return (
        <div>
        <h1>Articles</h1>
        {articles.map((c) => (
            <Link key={c.name} className="article-list-item" to={`/articles/${ c.name }`}>
                <h3>{c.title}</h3>
                <p>{c.content[0].substring(0,150)}...</p>
              </Link>
             ))}
        </div>
        );
}


export default ArticlesListPage;