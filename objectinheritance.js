var project1={
    name: "Road Work",
    display:function(){
        console.log(this.name);
    }
};

var project2=Object.create(project1,{
    name:{
        configurable:true,
        enumerable:true,
        value:"Bridge Work",
        writable: true
    }
});
project1.display();
project2.display();