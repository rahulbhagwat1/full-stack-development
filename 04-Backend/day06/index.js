import express from "express"
import { products } from "./data.js";

const app = express();

const verified=false;

app.use("/products",(req,res,next)=>{
    if(!verified){
        res.end("login first");
        return;
    }
    
    next();
})

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.use(express.json())

app.get("/products",(req,res)=>{
    res.end("hello ji i am availableeee")
})

// app.get("/products",(req,res)=>{
//     // res.json(products);
//     const price = req.query.price;
//     const rating = req.query.rating;
//     const filterPrice = products.filter((p)=>p.price>=price)
//     // res.json(filterData);
//     const filterRatingAndPrice = filterPrice.filter((p)=>p.rating>=rating)
//     res.json(filterRatingAndPrice);

// })

app.get("/products",(req,res)=>{
    let filterData=products;

    const {name,price,rating,category,brand,inStock}=req.query;

    if(name){
        filterData= filterData.filter((data)=>data.name==name);
    }
    if(price){
        filterData= filterData.filter((data)=>data.price>=price);
    }
    if(rating){
        filterData= filterData.filter((data)=>data.rating>=rating);
    }
    if(category){
        filterData= filterData.filter((data)=>data.category==category);
    }
    if(brand){
        filterData= filterData.filter((data)=>data.brand==brand);
    }
    if(inStock){
        filterData= filterData.filter((data)=>data.inStock==inStock);
    }
    res.json(filterData);
})

app.get("/products/:id",(req,res)=>{
    const id=req.params.id;
    const p = products.find((p1)=> p1.id == id);

    if(p){
        res.json(p);
    }
    else{
        res.send("Product is not found");
    }
})

app.post("/products",(req,res)=>{
    products.push(req.body);
    res.send(req.body);
})

app.delete("/products/:id",(req,res)=>{
    const id = req.params.id;
    const index = products.findIndex((data)=>data.id==id);
    if(index>=0){
    const p = products.splice(index,1);
    res.json(p);
    }
    else{
        res.send("Product is not Found");
    }
})

app.patch("/products",(req,res)=>{
    const data = req.body;

    const fetchedData = products.find((d)=>d.id==data.id);
    if(fetchedData){
        Object.assign(fetchedData,data);
        res.send("DAta Updeted Succsefully")
    }
    else{
        res.send("DAta not Found")
    }
    
})

app.listen(3000,()=>{
    console.log("Listeining at 3000 port")
})