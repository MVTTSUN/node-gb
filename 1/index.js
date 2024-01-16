const http = require("http");

let countFirst = 0;
let countSecond = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countFirst++;
    res.end(
      `<h1>Главная</h1>
      <a href="/about">About</a>
      <p>Количество посещений страницы ${countFirst}</p>
      `
    );
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countSecond++;
    res.end(
      `<h1>About</h1>
      <a href="/">Главная</a>
      <p>Количество посещений страницы ${countSecond}</p>
      `
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1>404</h1>
      <p>Страница не существует</p>
      `
    );
  }
});

server.listen("3000");
