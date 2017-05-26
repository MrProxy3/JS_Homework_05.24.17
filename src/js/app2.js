/*
 Написати анкету для опитування.
 У вас буде масив підготовлених питань та `ul` на сторінці, куди будуть додаватись відповіді на питання.
 Програма через prompt задавати запитання користувачу і.
 Отримавши відповідь, буде створювати `li` в який буде додавати `p` з текстом питання та `strong` з відповіддю.
 Після цього цей `li` буде додано до `ul` на сторінці.
 */

var questions = [
    "What's your full name?",
    "How old are you?",
    "What is your gender?",
    "What is your greatest strength?",
    "What is your greatest weakness?",
    "What are your goals for the future?"
];

function questionary() {
    for (var i = 0; i < questions.length; i++) {
        var li = document.createElement("li");
        document.querySelector("ul").className = "list";
        li.innerHTML = "<p>" + (i + 1) + ". " + questions[i] + ": <strong>" + prompt(questions[i]) + "</strong>" + "</p>";
        document.getElementById("list").appendChild(li);
    }
}

