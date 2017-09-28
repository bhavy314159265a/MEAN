app.factory("myfac", function(){
    var ns = {
        cal: function(salary,hra,da,ta,pf){
             return parseFloat(salary + hra + da + ta - pf);
        }
    }
    return ns;
})