let person={
    name:'Nishant',
    age:20,
    partTime:true,
    showInfo:function(realage){
        showMessage(this.name+realage);
    }
};

person.showInfo(22);

