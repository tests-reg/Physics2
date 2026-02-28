function calculateTask(taskNumber) {
    // Розв'язання для кожної задачі
    let solution;
    switch (taskNumber) {
        case 1:
            const param1 = parseFloat(document.getElementById("param1").value);
            const param2 = parseFloat(document.getElementById("param2").value);
            solution = "Розв'язок задачі 1: " + ((param1 * (10 ** -3)) * param2).toFixed(3) + "*10<sup>-3</sup> H";
            break;
        case 2:
            const param3 = parseFloat(document.getElementById("param3").value);
            const param4 = parseFloat(document.getElementById("param4").value);
            solution = "Розв'язок задачі 2: " + ((param3 * param4) / (9 * (10 ** 3))).toFixed(3) + "*10<sup>-6</sup> Кл";
            break;
        case 3:
            const param5 = parseFloat(document.getElementById("param5").value);
            const param6 = parseFloat(document.getElementById("param6").value);
            const param7 = parseFloat(document.getElementById("param7").value);
            solution = "Розв'язок задачі 3: " + (param7 / (param5 * param6)).toFixed(3) + " мкКл";
            break;
    }

    // Виведення розв'язку на сторінку
    document.getElementById("solution" + taskNumber).innerHTML = solution;
}

function switchTask(taskNumber) {
    // Спочатку ховаємо всі секції задач
    document.querySelectorAll(".task").forEach(function (task) {
        task.style.display = "none";
    });

    // Потім відображаємо потрібну секцію задачі, згідно обраного номера
    const selectedTask = document.getElementById("task" + taskNumber);
    if (selectedTask) {
        selectedTask.style.display = "block";
    }
}
