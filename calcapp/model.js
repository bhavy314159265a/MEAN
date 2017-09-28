app.factory("myfactory", function(){
    var calcObject = {
        add: function(x,y){
            return parseInt(x)+parseInt(y);
        },
        subtract: function(x,y){
            return parseInt(x)-parseInt(y);
        },
        multiply: function(x,y){
            return parseInt(x)*parseInt(y);
        },
        divide: function(x,y){
            return parseInt(x)/parseInt(y);
        }
    }
    return calcObject;
})