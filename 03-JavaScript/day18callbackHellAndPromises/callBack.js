// function placeOrder(callBack){
//     console.log("order placed,Payment in progress");
//     setTimeout(()=>{
//         console.log("Payment Done!!");
//         callBack();
//     },1000)
// }

// function prepareOrder(){
//     console.log("Restorunt Receiverd order , order preparing ");
//     setTimeout(()=>{
//         console.log("Order Preparing");
//     },1000)
// }

// placeOrder(prepareOrder );

function placeOrder(callBack){
    console.log("order placed,Payment in progress");
    setTimeout(()=>{
        console.log("Payment Done!!");
        callBack();
    },1000)
}

function prepareOrder(callBack){
    console.log("Restorunt Receiverd order , order preparing ");
    setTimeout(()=>{
        console.log("Order Prepared");
        callBack();
    },1000)
}



function pickUpOrder(callBack){
    console.log("delivery boy reaching to restorunt");
    setTimeout(()=>{
        console.log("delivery boy reched to restorunt");
        callBack();
    },1000)
}



function deliverOrder(){
    console.log("reching to customer");
    setTimeout(()=>{
        console.log("cusromer got the order");
    },1000)
}

placeOrder(()=>{
    prepareOrder(()=>{
        pickUpOrder(()=>{
            deliverOrder();
        })
    })
})

