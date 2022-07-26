const num=prompt('enter a number between 1 to 100');
myfun();
function myfun(){
if (num>100){
    alert('High Budget');
}
else if (num>50){
    alert('low budget');
}
else{
    alert('currect number');
}
}