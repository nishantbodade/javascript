'use strict'; 
(function() {


  function person(firstname,lastname,age){
    this.firstname=firstname;
    this.lastname-lastname;
    this.age=age;
    this.isAdult=function(){
      return this.age>20;
    }
  }

  let jim=new person('jim','cooper',21);

  display(jim['extracall']='extra');





})();