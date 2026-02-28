document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            setTimeout(() => {
                const questionMarks = document.getElementsByClassName("question_mark");
                for (let i = 0; i < questionMarks.length; i++) {
                    questionMarks[i].classList.add("active");
                }
            }, 500);
            
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.custom-btn');
    const exercises = document.querySelectorAll('.exerсise');
    const facts = document.querySelectorAll('.fact');

    const showExercise = (index) => {
        exercises.forEach(exercise => {
            exercise.classList.remove('show');
            setTimeout(() => {
                exercise.style.display = 'none';
            }, 500);
        });
        facts.forEach(fact => {
            fact.classList.remove('show');
            setTimeout(() => {
                fact.style.display = 'none';
            }, 500);
        });
        setTimeout(() => {
            exercises[index].style.display = 'block';
            exercises[index].classList.add('show');
            facts[index].style.display = 'block';
            facts[index].classList.add('show');
        }, 1000);
    };

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showExercise(index);
        });
    });

    exercises.forEach(exercise => exercise.style.display = 'none');
    facts.forEach(fact => fact.style.display = 'none');
});


