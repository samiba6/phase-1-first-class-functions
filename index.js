function receivesAFunction (func){
func();
}
function returnsANamedFunction (){
    function Named(){};
    return Named;
}
function returnsAnAnonymousFunction(){

    return (ez)=>ez ;
}