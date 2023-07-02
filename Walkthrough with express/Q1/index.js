const http = require("http");
const port = 3020;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  // ‘/’ → send msg as “We:come to Men & Women Dummy Data
  // ‘/men’ → send 10 products data of men
  // ‘/women’ → send 10 products data of wome;
  // ‘/other’ → send response as page not found
  if (req.url == "/") {
    res.end('<h1>Welcome to Men & Women Dummy Data</h1>')
  } else if (req.url == "/men") {
    res.setHeader("Content-Type", "application/json");
    const res1 = [
      { id: "1", name: "Men shoe", price: 850 },
      { id: "2", name: "Men shoe", price: 850 },
      { id: "2", name: "Men Shirt", price: 750 },
      { id: "3", name: "Men T Shirt", price: 650 },
      {id: "4",name: "Men tie",price: 150,},
      {id: "5",name: "Men suit",price: 1750,},
      {id: "6",name: "Men vest",price: 250,},
      {id: "7",name: "Men Watch",price: 7050,},
      {id: "8",name: "Men trouser",price: 450,},
      {id: "9",name: "Men Eye-Wear",price: 1150,},
      {id: "10",name: "Men slipper",price: 550,},
    ];
    res.end(JSON.stringify(res1));
  } else if (req.url == "/women") {
    res.setHeader("Content-Type", "application/json");
    const res1 = [
      { id: "1", name: "Women shoe", price: 850 },
      { id: "2", name: "Women shoe", price: 850 },
      { id: "2", name: "Women Shirt", price: 750 },
      { id: "3", name: "Women T Shirt", price: 650 },
      {id: "4",name: "Women tie",price: 150,},
      {id: "5",name: "Women suit",price: 1750,},
      {id: "6",name: "Women vest",price: 250,},
      {id: "7",name: "Women Watch",price: 7050,},
      {id: "8",name: "Women trouser",price: 450,},
      {id: "9",name: "Women Eye-Wear",price: 1150,},
      {id: "10",name: "Women slipper",price: 550,},
    ];
    res.end(JSON.stringify(res1));
  } else if (req.url == "/other") {
    res.statusCode = 404;
    res.end('<h1>Page Not Found!!</h1>')
  }
});

server.listen(port, () => {
  console.log(`server running on ${hostName}:${port}`);
});
