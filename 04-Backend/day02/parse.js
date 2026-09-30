const http = require("http")
const url  = require("url")

const server = http.createServer((request,response)=>{
    const parsed = url.parse(request.url,true);

    const operation=parsed.pathname.slice(1);

    const num1=Number(parsed.query.num1);
    const num2=Number(parsed.query.num2);
    let result
    if(operation=="add"){
        result=num1+num2;
    }
    else if(operation=="sub"){
        
        result=num1-num2;
    }
    else if(operation=="div"){
        result=num1/num2;
    }
    else if(operation=="mul"){
        resultnum1*num2;
    }
    else{
        result="invalid url"
    }

    response.end(JSON.stringify(result));

})

server.listen(3000,()=>{
    console.log("listening at 3000 port no")
})