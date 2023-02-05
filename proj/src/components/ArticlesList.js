import ArticlesList from '../components/ArticlesList';
import articles from './article-content';




const ArticleList = ({articles}) => {
    return (
        <div>
        {articles.map((c) => (
            <Link key={c.name} className="article-list-item" to={`/articles/${ c.name }`}>
                <h3>{c.title}</h3>
                <p>{c.content[0].substring(0,150)}...?</p>
              </Link>
             ))}
        </div>
        );
}

export default ArticlesList;