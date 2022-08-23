//criar objeto pergunta com atributos:
// titulo, array com 4 alternativas, e variavel que vai guardar qual posição da array é a resposta correta

let questions = [
    {
    title: 'Pergunta 1',
    alternatives: ["alternativa 1", "alternativa 2", "alternativa 3", "alternativa 4"],
    // lembrando: inicia na posição 0, então alternativa 1 = posição 0
    correctAnswer: 2 // que significa alternativa 3
    },

    {
    title: 'Pergunta 2',
    alternatives: ["alternativa 1", "alternativa 2", "alternativa 3", "alternativa 4"],
    correctAnswer: 0
    },

    {
    title: 'Pergunta 3',
    alternatives: ["alternativa 1", "alternativa 2", "alternativa 3", "alternativa 4"],
    correctAnswer: 3
    },

    {
    title: 'Pergunta 4',
    alternatives: ["alternativa 1", "alternativa 2", "alternativa 3", "alternativa 4"],
    correctAnswer: 1
    }
];

let app = {

    start: function() {
        this.currentPos = 0;
        //this.updateScore = 0;
        let alts = document.querySelectorAll('.choices');
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.isCorrect(index);
            })
        })
        this.updateScore(); //-- DANDO ERRO NESSA MERDA, falando que não é uma função. mas é sim, lá no final!!!!
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
            //aqui tá um looping de perguntas, mas como faço pra dar game over com uma determinada msg dependendo dos pontos?
        }
    },

    isCorrect: function(user) {
        if(this.currentQ.correctAnswer == user){
            console.log ("Obrigada!")
            this.totalPoints++;
            this.showCorrectQuestion();
        } else {
            console.log ("Poxa...")
        };
        this.updateScore(); //-- dando merda
        this.nextQuestion();
        this.showQuestions(questions[this.currentPos]);
    },

    updateScore: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Até agora, você ajudou ${this.totalPoints} vezes`;
    },

    showCorrectQuestion: function (correct) {
        let correctQuestionDiv = document.getElementById('correctQuestion');
        let correctQuestion = [""];

        if (correct == true) {
            correctQuestion = [""];
        } else {
            let question = questions[this.currentPos];
            let correctIndex = questions.correctAnswer;
            let correctText = questions.alternatives.correctAnswer;
            correctQuestion = `O melhor era ter respondido: ${this.correctAnswer}`;
        }

        correctQuestionDiv.textContent = correctQuestion;
    },

    
};

app.start();