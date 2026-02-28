function calculateTask(taskNumber) {
    // Розв'язання для кожної задачі
    var solution;
    switch (taskNumber) {
        case 1:
            var param1 = parseFloat(document.getElementById("param1").value);
            var param2 = parseFloat(6.02);
            solution = "Розв'язок задачі 1: " + (param1 * param2) + "*10^23";
            break;
        case 2:
            var param3 = parseFloat(document.getElementById("param3").value);
            var param4 = parseFloat(document.getElementById("param4").value);
            solution = "Розв'язок задачі 2: " + ((param3 + 273) * (param4 * (10 ** 23) * (1.38 * (10 ** -23)))) + "Па";
            break;
        case 3:
            var param5 = parseFloat(document.getElementById("param5").value);
            var param6 = parseFloat(document.getElementById("param6").value);
            solution = "Розв'язок задачі 3: " + ((3 * param6) / (2 * param5)) + "*10^-20(Дж)";
            break;
    }

    // Виведення розв'язку на сторінку
    document.getElementById("solution" + taskNumber).innerText = solution;
}

function switchTask(taskNumber) {
    // Спочатку ховаємо всі секції задач
    document.querySelectorAll(".task").forEach(function (task) {
        task.style.display = "none";
    });

    // Потім відображаємо потрібну секцію задачі, згідно обраного номера
    var selectedTask = document.getElementById("task" + taskNumber);
    if (selectedTask) {
        selectedTask.style.display = "block";
    }
}
