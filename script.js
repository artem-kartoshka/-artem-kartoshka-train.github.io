function randint(min,max){
    return Math.round(Math.random()*(max-min)+ min)}

let signs = ['+','-','*','/']
function randomsign(){
    return signs[randint(0,3)]
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) { // Цикл повторяется до тех пор, пока остаются элементы для перемешивания
    randomIndex = Math.floor(Math.random() * currentIndex); // Выбираем оставшийся элемент.
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [    // Меняем местами с текущим элементом.
      array[randomIndex], array[currentIndex]];
  }
  return array; // Возвращаем перемешанный массив
}

let questionJS = document.querySelector('.question')
let answer_button = document.querySelectorAll('.answer')
let stat=document.querySelector('.stat')
let knopka = document.querySelector('.start')
let otv = document.querySelector('.answers')

class Question { 
    constructor(){
        let a =randint(1,30)
        let b = randint(1, 30)
        let sign=randomsign()
        this.question = `${a} ${sign} ${b}`

        if (sign =='+'){this.correct = a + b}
        else if (sign =='-'){this.correct = a - b}
        else if (sign =='*'){this.correct = a * b}
        else if (sign =='/'){this.correct = a / b}

        this.answers=[
        randint(this.correct - 15, this.correct - 1),
        randint(this.correct - 15, this.correct - 1),
        this.correct,
        randint(this.correct + 1, this.correct + 15),
        randint(this.correct + 1, this.correct + 15)]
    shuffle(this.answers)}


display(){
    questionJS.innerHTML=this.question
    for (let i=0; i < this.answers.length; i+=1)
    {answer_button[i].innerHTML=this.answers[i]}
}
}

//let pop = 10
//for (let w=0; w < pop; w+=1){

knopka.style.display="flex"
questionJS.style.display="none"
otv.style.display="none"  
knopka.addEventListener('click',function(){
    questionJS.style.display="flex"
    otv.style.display="flex"
    knopka.style.display='none'
    stat.style.display="none"
})

let counter=0
let counter_correct=0
let current_question = new Question()
current_question.display()
  
setTimeout(function(){stat.innerHTML=`Вы дали ${counter_correct} правильных ответов из ${counter} 
Точность - ${Math.round(counter_correct * 100 /counter)}%`,
questionJS.style.display="none"
otv.style.display="none"
knopka.style.display="flex"
stat.style.display="flex"
},10000)

for (let i=0; i < answer_button.length; i+=1){
    answer_button[i].addEventListener('click',function(){

        if (answer_button[i].innerHTML==current_question.correct){
            console.log("True")
            answer_button[i].style.background='#00db6a'
            setTimeout(function(){answer_button[i].style.background='white'
            current_question = new Question()
            current_question.display()
            }, 500)
            counter_correct+=1   
        }else{
            console.log("False")
            answer_button[i].style.background='#ff0f23'
            setTimeout(function(){answer_button[i].style.background='white'
            current_question = new Question()
            current_question.display()
            }, 500)}
    counter += 1    
})} 
//} 
