let newarray=[324,12,31,657,234,256,4567]





Array.prototype.mapur = function(callback){
    mapurarr=[];
    for (num of this){
        mapurarr.push(callback(num));
    }
    return mapurarr;
}

let newarr= newarray.mapur((num)=>num*5);
console.log(newarr);