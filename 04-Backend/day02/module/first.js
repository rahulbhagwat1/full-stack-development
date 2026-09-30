console.log("this will run because this code in stored in Secondary storage")

function payment(money){
    console.log(`payment of ${money} is done`)
}

exports.isDeliverd= function(item){
    console.log(`${item} Deliverd to the person`)
}

//module.exports={payment,isDeliverd};