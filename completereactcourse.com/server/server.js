const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..','public');
const config = {
  port: process.env.PORT || 3000
}
app.use(express.static(publicPath));

app.get('*', (request, res) => {
  res.sendfile(path.join(publicPath, 'index.html'));
})
app.listen(config.port, () => {
  console.log(`Express Server running on port ${config.port}`);
  
})