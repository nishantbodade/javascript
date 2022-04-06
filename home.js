let person={
    name:'Nishant',
    age:20,
    partTime:true,
    showInfo:function(realage){
        showMessage(this.name+realage);
    }
};
function incrementAge(p){
    p.age++;
}
incrementAge(person)
showMessage(person.age);
