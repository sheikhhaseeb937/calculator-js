var input = document.getElementById('inp')
console.log(input)

function setNum (num){
    console.log('Number',num)
    input.value += num
}

function delall(){

input.value = ""
}

function calu(){
    var cal = eval(input.value)
    input.value = cal
}

function delOne(){
   
    input.value = input.value.substring(0, input.value.length - 1);
}