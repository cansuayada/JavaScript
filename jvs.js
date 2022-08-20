let numberCase = (234)
let newNumber = 0

let newCase = numberCase.toString().split('')

newCase.forEach(element => { newNumber += Number(element)});

if(newNumber % 2 == 1){
    console.log('odd') 
}else{
    console.log('even')
}