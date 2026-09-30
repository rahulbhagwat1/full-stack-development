const http = require("http")

const server=http.createServer((request,response)=>{

    url=request.url.slice(1)

    let result
    array = url.split("/")
    array[1]=Number(array[1]);
    array[2]=Number(array[2]);
    if(array[0]=="add"){
        result=array[1]+array[2];
    }
    else if(array[0]=="sub"){
        result=array[1]-array[2];
    }
    else if(array[0]=="div"){
        result=array[1]/array[2];
    }
    else if(array[0]=="mul"){
        result=array[1]*array[2];
    }
    else{
        result="invalid url"
    }

    response.end(JSON.stringify(result));

})

server.listen(3500,()=>{
    console.log("listning on port no. 3500")
})