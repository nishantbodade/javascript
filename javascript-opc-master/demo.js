'use strict'; 
(function() {

  let person={
    firstName:'abc',
  lastname:'xyz'

  };

  //display(Object.keys(person));

  for(let propertyname in person){
    display(propertyname);
  }



})();