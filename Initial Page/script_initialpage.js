//Const com cada um dos corações:
const heart100full = document.querySelector(".heart100full");
const heart100 = document.querySelector(".heart100");
const heart75 = document.querySelector(".heart75");
const heart50 = document.querySelector(".heart50");
const heart25 = document.querySelector(".heart25");
const heart0 = document.querySelector(".heart0");


let questions = [
    {
    title: 'Nossa, hoje estou me sentindo muito mal... 🥺 Pode me ajudar?',
    alternatives: ["Olha pelo lado positivo, você tem tudo na vida! Não tem motivo pra estar mal.", "Pior seria se você não tivesse casa nem comida... Imagina?", "Poxa, sinto muito! Sua dor é sempre válida, você quer desabafar? Estou aqui!", "Você tá mal toda hora, aff."],
    // lembrando: inicia na posição 0, então alternativa 1 = posição 0
    correctAnswer: 2 // que significa alternativa 3
    },
];


let initialPage = [
    { 
    title: 'Ajude uma pessoa a se sentir melhor ou seja bloqueado no WhatsApp dela! Qual seu nome?'
    nameGame: //inserir aquele bloco de nome
    
    }
]


let app = {

    start: function() {
        this.currentPos = 0;
        let alts = document.querySelectorAll('.choices');
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.isCorrect(index);
            })
        })
        app.showQuestions(questions[this.currentPos]);
    },


    showQuestions: function(q) {
        this.currentQ = q;
        //mostra o título
        let titleDiv = document.getElementById('questionTitle');
        titleDiv.textContent = q.title;

        //mostra alternativas
        let alts = document.querySelectorAll('.choices');
        alts.forEach(function(element, index) {
            element.textContent = q.alternatives[index];
        });
    },


    nextQuestion: function(user) {
        this.currentPos++;
        if(this.currentPos == questions.length) {
            this.currentPos = 0;
            //depois, fazer uma nova página com coraçãozinho se acertou pelo menos 3 - se acertou 2 ou menos, mostrar msg de "Você foi bloqueado por esse contato"
        }
        this.heartScoreChange();
    },




    isCorrect: function(user) {
        if(this.currentQ.correctAnswer == user){
            console.log ("Obrigada!")
            this.totalPoints++;
            //troca foto do coração:
            //se a pontuação for 0, foto heartScore0; se pontuação=1, heartScore25; ...
        } else {
            console.log ("Poxa...")
            //manter foto do coração que estiver
        };
        this.nextQuestion();
        this.showQuestions(questions[this.currentPos]);

    },

    updateScore: function() {
        let scoreDiv = document.getElementById('score');
   
    },

    heartScoreChange: function() {
        if(totalPoints == 0) {
           // img = document.querySelector("https://thumbs2.imgbox.com/ac/6b/ART2CoYP_t.png")
            document.getElementById('heart0').src=heart0
           // document.getElementById('heart0').src="./heartScore 0.png"
        } else if(totalPoints == 1) {
           // img = document.querySelector("https://thumbs2.imgbox.com/be/5c/mI2wEfd3_t.png")
            document.getElementById('heart0').src=heart25
           // document.getElementById('heart0').src="./heartScore 25.png"
        } else if(totalPoints == 2) {
           // img = document.querySelector("https://thumbs2.imgbox.com/99/4d/4ECTjfs7_t.png")
            document.getElementById('heart25').src=heart50
           // document.getElementById('heart25').src="./heartScore 50.png"
        } else if(totalPoints == 3) {
           // img = document.querySelector("https://thumbs2.imgbox.com/ec/d3/10ljH0CV_t.png")
            document.getElementById('heart50').src=heart75
           // document.getElementById('heart50').src="./heartScore 75.png"
        } else if(totalPoints == 4) {
           // img = document.querySelector("https://thumbs2.imgbox.com/b6/ae/wuo261Ol_t.png")
            document.getElementById('heart75').src=heart100
           // document.getElementById('heart75').src="./heartScore 100.png"
        } else if(totalPoints == 5) {
           // img = document.querySelector("https://images2.imgbox.com/f9/74/38N0DS0p_o.png")
            document.getElementById('heart100').src=heart100full
           // document.getElementById('heart100').src="./heartScore 100full.png"

        
           //Encerrar o jogo na página com msg de coração + obrigada
        } else {
            //Encerrar o jogo na página com msg de bloqueio
        }
    },

    
};

app.start();