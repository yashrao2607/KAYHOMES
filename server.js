const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.set('views', './views');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/page1', (req, res) => {
  res.render('pages/page1'); 
});

app.get('/page2', (req, res) => {
  res.render('pages/page2'); 
});

app.get('/page3', (req, res) => {
  res.render('pages/page3'); 
});

app.get('/page4', (req, res) => {
  res.render('pages/page4'); 
});

app.get('/dharuhera', (req, res) => {
  res.render('citypages/dharuhera.ejs'); 
});

app.get('/faridabad', (req, res) => {
  res.render('citypages/faridabad.ejs'); 
});

app.get('/gurugram', (req, res) => {
  res.render('citypages/gurugram.ejs'); 
});

app.get('/rewari', (req, res) => {
  res.render('citypages/rewari.ejs'); 
});

app.get('/sonipat', (req, res) => {
  res.render('citypages/sonipat.ejs'); 
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
