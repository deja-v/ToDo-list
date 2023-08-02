import express from "express"
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const date = new Date;
const month = date.getMonth();
const num = date.getDate();
const dayNames = ["Sunday", "Monday", "Tuesday" ,"Wednesday", "Thursday", "Friday" , "Saturday"];
var monthNames= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const day = dayNames[date.getDay()];
const monthname = monthNames[month];
const listItems = [];
app.get("/", (req,res)=>{
    res.render("list", {
        listTitle: day + ", " + monthname + " " + num,
        listItems: listItems,
    });
})

app.post("/", function(req, res){
    listItems.push(req.body.newTodo);
    res.redirect("/");
    
  });

app.listen(3000,()=>{
    console.log("Server running on port 3000.");
})