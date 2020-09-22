document.addEventListener("DOMContentLoaded", () => {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);

    let score = 0;
    let questionNumber = 0

    document.querySelector('.num1').innerHTML = num1;    
    document.querySelector('.num2').innerHTML = num2;
    document.querySelector('div.score span').innerHTML =  `Score: ${score}`


    let inputAnswer = document.querySelector("input.answer")
    
    console.log(inputAnswer)

    let operands = document.querySelector('#operands')
    operands.addEventListener('change', (e) => {
        document.querySelector('.operand').innerHTML = e.target.value
    })
   
    inputAnswer.addEventListener("keyup", (e) => {
        if(e.key === "Enter"){
            let number1 = document.querySelector('.num1')
            let number2 = document.querySelector('.num2')
            questionNumber++                        
            if(parseInt(e.target.value) == eval(document.querySelector('.nums').textContent)){
                document.querySelector('.num1').innerHTML = Math.ceil(Math.random() * 20);                
                document.querySelector('.num2').innerHTML = Math.ceil(Math.random() * 20);
                
                score = score + 1
                document.querySelector('div.score span').innerHTML =  `Score: ${score}`   

                scoreBar(`box-${questionNumber}`, "rgba(0,255,0,.4)")
                            
            }else{
                console.log('Wrong')
                document.querySelector('.num1').innerHTML = Math.ceil(Math.random() * 20);
                document.querySelector('.num2').innerHTML = Math.ceil(Math.random() * 20);

                scoreBar(`box-${questionNumber}`, "rgba(255,0,0,.4)")
            }      

            function result(marks){
                if(marks >= 7){
                    return `
                        <div class="result">
                            <div class="emoji"><span>&#128517;</span></div>
                            <p>You've passed...</p>
                            <div>Congratulations, you scored <strong>${marks}</strong> of <strong>${10}.</strong></div>
                        </div>
                    `
                }else{
                    return `
                        <div class="result">
                            <div class="emoji"><span>&#128521;</span></div>
                            <div>Oops, you failed, your score <strong>${marks}</strong> of <strong>${10}</strong> is less than 7. You must need at least score 7.</div>                            
                            <p>Try again...</p>
                        </div>
                    `
                }
            }

            if(questionNumber == 10){
                document.querySelector('div.quiz-contents').innerHTML = `
                    <div class="game-over">
                        <h1>Quiz Over</h1>
                        ${result(score)}
                        <a href="/" class="restart">Restart Quiz</a>
                    </div>
                `
            }   
    
    
            function scoreBar(element, bg){
                document.querySelector(`.${element}`).style.backgroundColor = bg;
                document.querySelector(`.${element}`).style.transition = "300ms ease-in-out"
                document.querySelector(`.${element}`).style.color = "#fff"
            }
     
            document.querySelector('input.answer').value = ""
        }
    })


})