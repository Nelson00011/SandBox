import express from 'express';
import { db, connectToDb } from './db.js';

//app components:
const port = 8000;
const app = express();
app.use(express.json());



app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
});


app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
  console.log("SERVER.JS - BEFORE DATABASE")
  console.log(name)
    await db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1 },
    });
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.send('That article doesn\'t exist');
    }
});

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    await db.collection('articles').updateOne({ name }, {
        $push: { comments: { postedBy, text } },
    });
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.send(article.comments);
    } else {
        res.send('That article doesn\'t exist!');
    }
});

//CONFIRMATION OF PORT & Database
connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});


