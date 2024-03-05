document.addEventListener('DOMContentLoaded', function () {
    const addQuestionBtn = document.getElementById('add-question-btn');
    const questionList = document.getElementById('question-list');

    // Function to add a new question
    function addQuestion() {
        const questionItem = document.createElement('li');
        questionItem.className = 'question-item';
        questionItem.innerHTML = `
            <input type="text" placeholder="Question" class="question-input">
            <button type="button" class="remove-question-btn">Remove</button>
        `;

        // Add event listener for removing the question
        questionItem.querySelector('.remove-question-btn').addEventListener('click', function () {
            this.parentElement.remove();
        });

        questionList.appendChild(questionItem);
    }

    // Event listener for the Add Question button
    addQuestionBtn.addEventListener('click', addQuestion);

    // Function to collect and save exam data
    function saveExam() {
        const examName = document.getElementById('exam-name').value;
        const examDescription = document.getElementById('exam-description').value;
        const examType = document.getElementById('exam-type').value;
        const questions = document.querySelectorAll('.question-input');

        let questionData = [];

        questions.forEach(function (question) {
            questionData.push(question.value);
        });

        // Here you would typically send this data to a server or process it as needed
        console.log({
            examName,
            examDescription,
            examType,
            questions: questionData
        });

        alert('Exam saved! Check the console for details.');
    }

    // Attach saveExam to save button - assuming the button has an onclick attribute in HTML
    // You might need to add an id to the save button and attach event listener here instead.
    window.saveExam = saveExam;
});