const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/:page', (req, res) => {
  const pageName = req.params.page;
  const filePath = path.join(__dirname, 'public', 'html', pageName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.sendFile(path.join(__dirname, 'dist', 'error-page', '404.html'));
    } else {
      return res.sendFile(filePath);
    }
  });
});

app.use('/activate-next-app', (req, res) => {
  const nextApp = require('./next-app');
  nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
      return nextApp.getRequestHandler()(req, res);
    });
    console.log('Next.js application is enabled.');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
