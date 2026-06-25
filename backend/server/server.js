const express=require('express');
const app=express();

const books = [{ id: 1, title: "Book 1", author: "Author 1" },
{ id: 2, title: "Book 2", author: "Author 2" },
{ id: 3, title: "Book 3", author: "Author 3" },
]
const port=5000;
app.use(express.json());
app.get('/getdata',(req,res)=>{
    res.send('Library API');
});
app.listen(port, () => {
  console.log(`Server is running on port 5000`);
});