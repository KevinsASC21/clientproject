/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

let test = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// $(".content").hide();

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

// let jikan_url = `https://api.jikan.moe/v4/anime?q=code geass&sfw`;

// giphy api call test
function getAnime(userSearch) {
let jikan_url = `https://api.jikan.moe/v4/anime?q=${userSearch}&sfw?score=8`;

fetch(jikan_url)
.then(function(response) {
return response.json();
})

.then(function(json) {
console.log(json.data[0].url);
// $(".main").append(`<img src=${json.data[0].images.original.url}>`
let img = "ani_image";
let imgT = "box";
let pt = "text";
let ts = "testStuff"

for (let i = 0; i < 12; i++) {
$(".content").append(`
<div class=${imgT}> 
<div>
<img class="${img}" src="${json.data[i].images.jpg.large_image_url}">
<h3 class=${ts}> ${json.data[i].title}
</h3>
<h4 > Ranking (Overall): #${json.data[i].rank}
</h4>
<h4 > Score: ${json.data[i].score} / 10
</h4>
<h4 > Popularity (Overall): #${json.data[i].popularity}
</h4>
</div>
<details class="testingthis">
<summary>Anime Synopsis</summary>
<p class="${pt}">${json.data[i].synopsis}</p>
</details>
</div>
`)
}
  
console.log("test");
});
  

}


$(".search").click(function() {
let userQuery = $(".searchbar").val();  
$(".content").empty();
getAnime(userQuery);
$(".content").show();
});


$(".scroll").css("font-size","20px");
$(".scroll").css("font-weight","800");
$(".scroll").css("border","5px solid black");
$(".scroll").css("loop","-1");


let Q1 = {
    question: "What would you rather do for fun?",
    answers: {
      a: 'Go on an adventure',
      b: 'Gossip with others',
      c: 'Comtemplate the meaning of life',
      d: 'Play with Lego',
      e: 'Chill and do nothing',
    },
    correctAnswer: 'b'
  }
    
let Q2 = {
    question: "Your main goal in life is?",
    answers: {
      a: `Having fun`,
      b: 'Companionship',
      c: `Making the most of what I've got`,
      d: 'Quenching curiosity',
      e: `Don't Really Have One`,
    },
    correctAnswer: 'c'
  }
    
let Q3 = {
    question: "How do you see yourself dying?",
    answers: {
      a: 'In a Blaze Of Glory',
      b: 'Peacefully, surrounded by friends and family',
      c: 'Getting hit by an truck',
      d: 'For Greater Good',
      e: `I don't`,
    },
    correctAnswer: 'c'
  }
    
let Q4 = {
    question: "What do you think of when you see the Sunset?",
    answers: {
      a: `Day wasn't long enough`,
      b: 'Finally the day is over',
      c: 'Pretty',
      d: `Earth's Gravitional Pull`,
      e: `There's a sunset?`,
    },
    correctAnswer: 'c'
}
 
let Q6 = {
    question: "Most important meal of the day?",
    answers: {
      a: 'Breakfast',
      b: 'Lunch',
      c: 'Snacks',
      d: 'Dinner',
      e: 'Meals?',
    },
    correctAnswer: 'c'
  }
 
let Q7 = {
    question: "Where would you work?",
    answers: {
      a: 'A farmfield in the middle of nowhere',
      b: 'Your room',
      c: 'Anywhere',
      d: 'Your very own business',
      e: 'A cucible',
    },
    correctAnswer: 'c'
  }
  
let Q8 = {
    question: "Defining trait?",
    answers: {
      a: 'Energetic',
      b: 'Silly',
      c: 'Outgoing',
      d: 'Introverted',
      e: 'Lazy',
    },
    correctAnswer: 'c'
  }
 
let Q9 = {
    question: "Biggest weakness?",
    answers: {
      a: 'Self-Esteem',
      b: 'Something out of my control',
      c: 'Expressing myself',
      d: 'Overthinking',
      e: 'Work Ethic',
    },
    correctAnswer: 'c'
  }
 
let Q10 = {
    question: "Which of these is closest to your own definition of failure?",
    answers: {
      a: 'Rejection',
      b: 'Decline',
      c: 'Losing',
      d: 'Difficulty',
      e: 'Neglect',
    },
    correctAnswer: 'c'
  }
 
let Q11 = {
    question: "Which of these is closest to your own definition of success?",
    answers: {
      a: 'Acceptance',
      b: 'Prosper',
      c: 'Winning',
      d: 'Ease',
      e: 'Overcompensating',
    },
    correctAnswer: 'c'
  }

let  myQuestions = [Q1,Q2,Q3,Q4,Q6,Q7,Q8,Q9,Q10,Q11];

let fiP = 0;
let rdP = 0;
let scP = 0;
let snP = 0;
let aaP = 0;

function resetPoints() {
fiP = 0;
rdP = 0;
scP = 0;
snP = 0;
aaP = 0;
}


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if (userAnswer === 'a') {
        aaP += 2;
        fiP ++;
        
        answerContainers[i].style.color = 'red';
      }
        else if(userAnswer === 'b'){
        rdP += 2;
        scP ++;
        
        answerContainers[i].style.color = 'orange';
      }
        else if(userAnswer === 'c'){
        fiP += 2;
        snP ++;
        
        answerContainers[i].style.color = 'yellow';
      }
        else if (userAnswer === 'd'){
        snP += 2;
        aaP ++;
        
        answerContainers[i].style.color = 'lightgreen';
      }
        else if(userAnswer === 'e'){
        scP += 2;
        rdP ++;
        answerContainers[i].style.color = 'blue';
      }

      else{
        answerContainers[i].style.color = 'grey';
      }
    }

    if (fiP >= Math.max(fiP,rdP,snP,scP,aaP)) {
    resultsContainer.innerHTML = "You should try watching a Fantasy/Isekai Anime!";
    }
    else if (aaP >= Math.max(fiP,rdP,snP,scP,aaP)) {
    resultsContainer.innerHTML = "You should try watching a Action/Adventure Anime!";
    }
    else if (scP >= Math.max(fiP,rdP,snP,scP,aaP)) {
    resultsContainer.innerHTML = "You should try watching a Slice Of Life/Comedy Anime!";
    }
    else if (snP >= Math.max(fiP,rdP,snP,scP,aaP)) {
    resultsContainer.innerHTML = "You should try watching a SciFi/Supernatural Anime!";
    }
    else if (rdP >= Math.max(fiP,rdP,snP,scP,aaP)) {
    resultsContainer.innerHTML = "You should try watching a Romance/Drama Anime!";
    }
    else {
    resultsContainer.innerHTML = "Watch the first thing you find!";
    }
    resetPoints();
    
  }
  
  showQuestions(questions, quizContainer);
  
  
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
    $(".yessir").append(`<img src="https://thumbs.gfycat.com/OblongUntriedCow-size_restricted.gif"`);
  }
  
}





let fruits = ["grape","banana","orange","apple","strawberry"];

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

