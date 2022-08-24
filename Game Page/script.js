//Const com cada um dos corações:
const heart0 = document.querySelector("#heart0");
const heartEmpty = "../heartScore/heartScore 0.png"
const heart25 = "../heartScore/heartScore 25.png"
const heart50 = "../heartScore/heartScore 50.png"
const heart75 = "../heartScore/heartScore 75.png"
const heart100 = "../heartScore/heartScore 100.png"
const heart100full = "../heartScore/heartScore 100full.png"

let totalPoints = 0;


let questions = [
    {
    title: 'Nossa, hoje estou me sentindo muito mal... 🥺 Pode me ajudar?',
    alternatives: ["Olha pelo lado positivo, você tem tudo na vida! Não tem motivo pra estar mal.", "Pior seria se você não tivesse casa nem comida... Imagina?", "Poxa, sinto muito! Sua dor é sempre válida, você quer desabafar? Estou aqui!", "Você tá mal toda hora, aff."],
    // lembrando: inicia na posição 0, então alternativa 1 = posição 0
    correctAnswer: 2 // que significa alternativa 3
    },

    {
    title: 'Ontem eu fui ao psiquiatra e fui diagnosticado com transtorno bipolar... 😟',
    alternatives: ["Nossa! Como você está se sentindo com isso?", "Que besteira, todo mundo é um pouco bipolar kkkk", "Nossa, você vai em médico de gente louca!", "*Bloqueado*"],
    correctAnswer: 0
    },

    {
    title: 'Hoje estou me sentindo bem! Muito bom, né? 🥰',
    alternatives: ["Tá vendo? Falei que essa história de depressão era besteira. Tá até sorrindo!", "Viu? É só pensar positivo um pouco.", "Era só orar que passa!", "Que bom! Sinal que o tratamento está fazendo efeito, né? Estou muito feliz por você!"],
    correctAnswer: 3
    },

    {
    title: 'Minha amiga está com crise de ansiedade e não sei o que fazer para ajudar, você sabe? 🤔',
    alternatives: ["Ansiedade é frescura, é só distrair que passa.", "Ela já procurou um psiquiatra ou psicólogo? Eles podem ajudá-la a sair dessa, porque é muito difícil lidar com isso sozinha!", "Ela tá ansiosa por que? Não tem com o que se preocupar.", "Fala pra ela respirar fundo que passa."],
    correctAnswer: 1
    },

    {
    title: 'Não sei se você sabe, mas eu tenho transtorno bipolar e estou em crise de mania, não durmo há 3 dias, fui pra balada em todos, dormi com 8 homens até agora... Não sei o que fazer! 😵‍💫',
    alternatives: ["Queria ter sua disposição! kkkk Vamos aproveitar e ir hoje pra balada então?", "Ué, é só não sair de casa. Toma aquela tal de melatonina pra dormir, comigo é tiro e queda!", "Não sei muito sobre, mas acabei de pesquisar aqui e vi que não tem como você controlar. Me passa os contatos do seu psiquiatra e do seu psicólogo que eu converso com eles pra você. O que mais você está sentindo?", "Depois pega uma DST e não sabe porque kkk"],
    correctAnswer: 2
    },
];


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
        };
        this.heartScoreChange();
    },


    isCorrect: function(user) {
        if(this.currentQ.correctAnswer == user){
            console.log ("Obrigada!")
            this.updateScore();
            //troca foto do coração:
            //se a pontuação for 0, foto heartScore0; se pontuação=1, heartScore25; ...
        } else {
            console.log ("Poxa...")
            totalPoints--;
            //manter foto do coração que estiver
        };
        this.nextQuestion();
        this.showQuestions(questions[this.currentPos]);
        
    },

    updateScore: function() {
        totalPoints++;
        console.log(totalPoints)

    },

    heartScoreChange: function() {
        if(totalPoints == 0) {
            heart0.setAttribute("src", heartEmpty)
         } else if(totalPoints == 1) {
            heart0.setAttribute("src", heart25)
         } else if(totalPoints == 2) {
            heart0.setAttribute("src", heart50)
         } else if(totalPoints == 3) {
            heart0.setAttribute("src", heart75)
         } else if(totalPoints == 4) {
            heart0.setAttribute("src", heart100)
         } else if(totalPoints == 5) {
            heart0.setAttribute("src", heart100full)
         
            //Encerrar o jogo na página com msg de coração + obrigada
         } else {
             //Encerrar o jogo na página com msg de bloqueio
         }
     },

    
    
};

app.start();
// heart0.addEventListener('show', updateScore);?????