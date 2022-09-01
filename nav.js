const express = require('express');
const app = express();
const PORT = 3000;

app.get("/",(req,res)=> {
res.send("welcome to home page");
});



// // app.get("/about",(req,res)=> {
// //     res.send("welcome to about page");
// //     });

// // app.get("/contact",(req,res)=> {
// //         res.send("welcome to contact us page");
// //         });

// //  app.get("/temp",(req,res)=>
// //  {
// //     res.send(
// //         {
// //             id: 1,
// //             name: "priyesh",
// //         }
// //     );
// //  });      


app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
//  app.listen(port,()=>
// {
//      console.log(`listening to the port no ${port}');
//  });