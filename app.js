const quizData = [{
        question: 'Atatürk kaç yılında doğdu?',
        a: "1900",
        b: "1800",
        c: "1910",
        d: "1881",
        cevap: "d"
    },
    {
        question: 'İstanbul Kaç Yılında Fethedildi?',
        a: "1400",
        b: "1450",
        c: "1453",
        d: "1500",
        cevap: "c"
    },
                  
    {
        question: 'Osmanlı Devleti Kaç Yılında Kuruldu?',
        a: "1299",
        b: "1100",
        c: "1295",
        d: "1290",
        cevap: "a"
    },
    {
        question: 'İkinci Mareşal Unvanı Kime Verilmiştir?',
        a: "Kazım Karabekir",
        b: "Fevzi Çakmak",
        c: "Ali Fuat Cebesoy",
        d: "İsmet İnönü",
        cevap: "b"
    },
    {
        question: 'Türkiye Cumhuriyet Kaç Yılında Kuruldu',
        a: "1920",
        b: "1922",
        c: "1930",
        d: "1923",
        cevap: "d"
    },
    {
        question: '1 Dolar Kaç TL?',
        a: "6",
        b: "7",
        c: "13",
        d: "Hiçbiri",
        cevap: "c"
    }


]

let score = 0;
let currentQuiz = 0;
const questionEl = document.querySelector(".question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

const answers = document.querySelectorAll(".answerInput")
loadQuiz()

function getSelected() {
    let answer = undefined;

    answers.forEach((item) => {
        if (item.checked) {
            answer = item.id;
        }
    })

    return answer;


}

function deSelectedAnswers() {
    answers.forEach((item) => {
        item.checked = false;
    })
}

function loadQuiz() {

    deSelectedAnswers()
    let currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}
let span = document.getElementById("span")
let button = document.querySelector(".btn")
button.addEventListener("click", () => {
    const answer = getSelected()
    if (answer === quizData[currentQuiz].cevap) {
        score++;
    }
    if (answer) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            document.querySelector(".ul").style.display = "none"
            questionEl.style.display = "none"
            document.querySelector(".sonuc").innerHTML = `
            ${quizData.length} soruda ${score} doğru yaptınız.
            `
        }
        span.style.display = "none"
    } else {
        span.innerHTML = "lütfen seçim yapınız!"
    }



})
