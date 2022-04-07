
const value=Array.of(1,2,3);//const value=[1,2,3];   both are same
value.push(4,5,6);
console.log(value);
value.pop();
console.log(value);
value.shift();
console.log(value);
value.unshift(1);
console.log(value);

const newVal=value.slice(1,6);//slice will return new arrays, 
console.log(newVal);
value.splice(2,3);//deleting 
console.log(value);
value.splice(1,0,'xx');//inserting ,1 is index,0 is number of items to delete i.e. 0,values to add is 'xx' here 
console.log(value);

