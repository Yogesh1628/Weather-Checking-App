const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port= process.env.PORT || 3000 ;

app.set('view engine','hbs');

const template_path=path.join(__dirname,"../templates/views") ;
app.set('views',template_path);

const partials_path=path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);


//public static path
app.use(express.static( path.join(__dirname,"../public") ));

app.get("",(req,res)=>{
    res.render('index.hbs');
});


app.get("/about",(req,res)=>{
    res.render('about.hbs');
});


app.get("/weather",(req,res)=>{
    res.render('weather.hbs');
});


app.get("*",(req,res)=>{
    res.render("404error.hbs",{
        errorMsg
    });
});

app.listen(port,()=>{
    console.log(`Listing to the port ${port}`);
})