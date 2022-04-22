'use strict'; 
(function() {

  let person={
    firstName:'abc',
  lastname:'xyz'

  };


  let person2={};

  Object.assign(person2,person);//Object.assign({},person2,person); will merge whatevr in right to first object ,immutable objects

  display(person===person2);

  display(person2);



})();