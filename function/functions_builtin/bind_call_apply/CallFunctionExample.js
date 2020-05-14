const CallFunctionExample = (function(){
    var jon = {
        name:`jon`,
        age:35,
        job:`teacher`,
        presentation:function(style, timesOfDay){
            if(style==="formal"){
                console.log(`Good ${timesOfDay} I am ${this.name}, my age ${this.age}, my profession is ${this.job}`);
            }else{
                console.log(`Hey there I am ${this.name}, my age ${this.age}, my profession is ${this.job}, have good ${timesOfDay}`);

            }
        }
    }

    function execute(){
        jon.presentation("formal", "morning")

        var suru ={
            name:`suru`,
            age:3,
            job:`Mathmatician`
        }

        jon.presentation.call(suru, "formal", "morning");
    }

    return{
        execute:execute
    }
})();

export default CallFunctionExample;