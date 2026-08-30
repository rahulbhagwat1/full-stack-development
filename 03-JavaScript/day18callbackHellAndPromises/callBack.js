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

// function placeOrder(callBack){
//     console.log("order placed,Payment in progress");
//     setTimeout(()=>{
//         console.log("Payment Done!!");
//         callBack();
//     },1000)
// }

// function prepareOrder(callBack){
//     console.log("Restorunt Receiverd order , order preparing ");
//     setTimeout(()=>{
//         console.log("Order Prepared");
//         callBack();
//     },1000)
// }



// function pickUpOrder(callBack){
//     console.log("delivery boy reaching to restorunt");
//     setTimeout(()=>{
//         console.log("delivery boy reched to restorunt");
//         callBack();
//     },1000)
// }



// function deliverOrder(){
//     console.log("reching to customer");
//     setTimeout(()=>{
//         console.log("cusromer got the order");
//     },1000)
// }

// placeOrder(()=>{
//     prepareOrder(()=>{
//         pickUpOrder(()=>{
//             deliverOrder();
//         })
//     })
// })

// Callback hell 
// First Principle: DRY, Code Readable

// zomato application
// placeOrder
// prepareOrder
// pickUpOrder
// DeliverOrder

//  Callback = ()=>{

//     prepareOrder();
// }

// Callback() = prepareOrder()

const orderDetail = {
    orderId: 12314,
    food: ["chicken Biryani","diet coke"],
    price: 900,
    payment_status: false,
    token_assign: false,
    restaurant_location: "New Delhi",
    customer_location: "Dwarka",
    pickingOrder: false,
};

function placeOrder(orderDetail , Callback){
    console.log(`Payment of ${orderDetail.price}rs is in Progress`);

    setTimeout(()=>{
        console.log("Payment is completed");
        orderDetail.payment_status = true;
        Callback(orderDetail);
    },1000)
}

function prepareOrder(orderDetail , Callback){
    console.log(`Restaurant received the order and preparing ${orderDetail.food}`);

    setTimeout(()=>{
        console.log("Your Order is prepared now");
        orderDetail.token_assign = 123;
        Callback(orderDetail);
    },1000)
}


function pickUpOrder(orderDetail, Callback){
    console.log(`Delivery boy is on the way to pick order from ${orderDetail.restaurant_location} restaurant`);

    setTimeout(()=>{
        console.log("Delivery boy reached the restaurant");
        orderDetail.pickingOrder = true;
        Callback(orderDetail);
    },1000)
}

function deliverOrder(orderDetail){
    console.log(`Delivery boy pick the order from restaurant and delivering it to ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Delivery boy delivered the order to customer");
        console.log(orderDetail);
    },1000)
}


// placeOrder(prepareOrder(pickUpOrder));

// placeOrder(prepareOrder);



placeOrder(orderDetail ,(orderDetail)=>{
    prepareOrder(orderDetail,(orderDetail)=>{
        pickUpOrder(orderDetail,(orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});

