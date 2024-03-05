// JavaScript for dynamic question management

document.getElementById('add-question-btn').addEventListener('click', addQuestion);

function addQuestion() {
    const questionList = document.getElementById('question-list');

    const questionItem = document.createElement('li');
    questionItem.className = 'question-item';

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.name = 'questions[]';
    questionInput.placeholder = 'Enter your question';
    questionItem.appendChild(questionInput);

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.name = 'answers[]';
    answerInput.placeholder = 'Enter the answer';
    questionItem.appendChild(answerInput);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        questionList.removeChild(questionItem);
    });
    questionItem.appendChild(deleteButton);

    questionList.appendChild(questionItem);
}

function saveExam() {
    const questions = document.querySelectorAll('input[name="questions[]"]');
    const answers = document.querySelectorAll('input[name="answers[]"]');

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i].value;
        const answer = answers[i].value;
        console.log(`Question ${i + 1}: ${question}, Answer: ${answer}`);
    }

    console.log('Exam saved!');
}
