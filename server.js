const express = require('express');
const path = require('path');
const app = express();
// 关键：读取 Railway 自动分配的端口，如果没有（比如本地测试）就用 3000
const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
// 让 express 提供当前文件夹下所有文件的访问服务
app.use(express.static(path.join(__dirname)));

// 当访问根路径时，发送你的 index.html 文件
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
