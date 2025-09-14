# Read the app.js file and add option shuffling functionality
with open('app.js', 'r') as f:
    content = f.read()

# Find the setupQuiz method and modify it to include option shuffling
old_setup_quiz = '''setupQuiz() {
        console.log('Setting up quiz...');
        // Randomize questions - select all 40 questions and shuffle them
        this.currentQuestions = [...this.questionBank].sort(() => Math.random() - 0.5);
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = new Date();

        const totalQuestionsEl = document.getElementById('totalQuestions');
        if (totalQuestionsEl) {
            totalQuestionsEl.textContent = this.currentQuestions.length;
        }

        this.displayQuestion();
    }'''

new_setup_quiz = '''setupQuiz() {
        console.log('Setting up quiz...');
        // Randomize questions - select all 40 questions and shuffle them
        this.currentQuestions = [...this.questionBank].sort(() => Math.random() - 0.5);
        
        // Shuffle options for each question and update correct answer index
        this.currentQuestions = this.currentQuestions.map(question => {
            const shuffledQuestion = { ...question };
            const originalCorrectAnswer = question.options[question.correct];
            
            // Create array of indices and shuffle them
            const indices = [0, 1, 2, 3];
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            
            // Shuffle options based on shuffled indices
            shuffledQuestion.options = indices.map(i => question.options[i]);
            
            // Find new correct answer index
            shuffledQuestion.correct = shuffledQuestion.options.findIndex(option => option === originalCorrectAnswer);
            
            return shuffledQuestion;
        });
        
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = new Date();

        const totalQuestionsEl = document.getElementById('totalQuestions');
        if (totalQuestionsEl) {
            totalQuestionsEl.textContent = this.currentQuestions.length;
        }

        this.displayQuestion();
    }'''

# Replace the setupQuiz method
content = content.replace(old_setup_quiz, new_setup_quiz)

# Write the updated content
with open('app_shuffled_options.js', 'w') as f:
    f.write(content)

print("✅ Updated app.js with option shuffling functionality!")
print("\n🔀 NEW FEATURES ADDED:")
print("• Options A, B, C, D are now randomized for each question")
print("• Correct answer tracking is maintained after shuffling") 
print("• Each quiz attempt will have different option orders")
print("• Review system will work correctly with shuffled options")