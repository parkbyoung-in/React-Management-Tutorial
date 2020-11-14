const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send(
        [
            {
              'id': 1,
              'img': 'https://placeimg.com/100/100/1',
              'name': '이민아',
              'birthday': '921212',
              'gender': '여성',
              'job': '대학생'
            },
            {
              'id': 2,
              'img': 'https://placeimg.com/100/100/2',
              'name': '박병인',
              'birthday': '961212',
              'gender': '남자',
              'job': '프로그래머'
            },
            {
              'id': 3,
              'img': 'https://placeimg.com/100/100/3',
              'name': '김성진',
              'birthday': '891212',
              'gender': '남자',
              'job': '건설사'
            }
        ]
    );
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));

