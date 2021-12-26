const path = require('path');
const express = require('express');

let app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'dist')})
})

const server = app.listen(app.get('port'), () => {
    console.log('listening on port' + server.address().port);
});