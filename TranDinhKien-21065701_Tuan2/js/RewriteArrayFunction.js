// Array.map()
function myMap(arr, callback){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
// Array.filter()
function myFilter(arr, callback){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}
// Array.every()
function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)){
            return false;
        }
    }
    return true;
}
// Array.some()
function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}
// Array.find()
function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return arr[i];
        }
    }
    return undefined;
}
// Array.reduce()
function myReduce(arr, callback, initialValue){
    let result = initialValue;
    for(let i = 0; i < arr.length; i++){
        result = callback(result, arr[i], i, arr);
    }
    return result;
}

//use function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('My map: ',myMap(arr, (item) => item * 2));
console.log('My filter: ',myFilter(arr, (item) => item % 2 === 0));
console.log('My every: ',myEvery(arr, (item) => item > 0));
console.log('My some: ',mySome(arr, (item) => item > 10));
console.log('My find: ',myFind(arr, (item) => item === 5));
console.log('My reduce: ',myReduce(arr, (total, item) => total + item, 0));
