
const value=Array.of('a','b','cc');
console.log(value.indexOf('b'));

const set=value.filter(function(item){
    console.log('item:',item);

    return item>'b';
})

console.log(set);

const find=value.find(function(item){
    console.log('item:',item);

    return item.length>1;
})

console.log(find);

value.forEach(function(item){
    console.log(item);
})