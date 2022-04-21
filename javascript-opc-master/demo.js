'use strict'; 
(function() {

  function registeruser(firstName,lastname){
    let person={
      firstName,
      lastname,
      isAdult(){
        return true;
      }
    
    };

    display(person.isAdult());

  }

  registeruser('xx','yy');

  





})();