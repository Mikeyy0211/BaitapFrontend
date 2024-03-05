// JavaScript for dynamic question management

document.getElementById('add-question-btn').addEventListener('click', addQuestion);

function addQuestion() {
    const questionList = document.getElementById('question-list');

    // Create new question item
    const questionItem = document.createElement('li');
    questionItem.className = 'question-item';

    // Question input
    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.name = 'questions[]'; // Use an array to handle multiple questions
    questionInput.placeholder = 'Enter your question';
    questionItem.appendChild(questionInput);

    // Answer input
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.name = 'answers[]'; // Use an array to handle multiple answers
    answerInput.placeholder = 'Enter the answer';
    questionItem.appendChild(answerInput);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        questionList.removeChild(questionItem);
    });
    questionItem.appendChild(deleteButton);

    // Add question item to the list
    questionList.appendChild(questionItem);
}

function saveExam() {
    // Retrieve the questions and answers
    const questions = document.querySelectorAll('input[name="questions[]"]');
    const answers = document.querySelectorAll('input[name="answers[]"]');

    // Process and save the questions and answers as needed
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i].value;
        const answer = answers[i].value;
        console.log(`Question ${i + 1}: ${question}, Answer: ${answer}`);
    }

    // Additional logic to save the exam
    console.log('Exam saved!');
}
