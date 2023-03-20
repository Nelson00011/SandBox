import { useState } from 'react';
import axios from 'axios';



const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");
    
      const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        });
        
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }
    
    return (
        <div id='add-comment-form'>
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input
                    value={name}
                    onChange={(evt)=> setName(evt.target.value)}
                    type='text'/>
            </label>        
            <label>
                Comment:
                <textarea 
                value={commentText} 
                onChange={(evt)=> setCommentText(evt.target.value)}
                row="5" 
                cols="50"/>
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;