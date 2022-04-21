'use strict'; 
(function() {

let person={
  firstName:'abc',
  lastname:'xyz',

  isAdult:function(){
    return true;
  }
};

display(person.isAdult());

})();