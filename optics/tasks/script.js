function calculateFocus() {
    const distanceObject = parseFloat(document.getElementById('distanceObject').value);
    const distanceImage = parseFloat(document.getElementById('distanceImage').value);
    const resultDiv = document.getElementById('result1');

    if (isNaN(distanceObject) || isNaN(distanceImage) || distanceObject <= 0 || distanceImage <= 0) {
        resultDiv.textContent = 'Будь ласка, введіть правильні числові значення для відстаней.';
        resultDiv.className = 'result incorrect';
        resultDiv.style.display = 'block';
        return;
    }

    const focusDistance = 1 / ((1 / distanceObject) + (1 / distanceImage));
    resultDiv.textContent = `Фокусна відстань лінзи: ${focusDistance.toFixed(2)} см`;
    resultDiv.className = 'result correct';
    resultDiv.style.display = 'block';
}

function calculateReflection() {
    const incidentAngle = parseFloat(document.getElementById('incidentAngle').value);
    const resultDiv = document.getElementById('result2');

    if (isNaN(incidentAngle) || incidentAngle < 0 || incidentAngle > 90) {
        resultDiv.textContent = 'Будь ласка, введіть коректний кут падіння (0-90 градусів).';
        resultDiv.className = 'result incorrect';
        resultDiv.style.display = 'block';
        return;
    }

    const reflectionAngle = incidentAngle; 
    resultDiv.textContent = `Кут відбивання: ${reflectionAngle.toFixed(2)}°`;
    resultDiv.className = 'result correct';
    resultDiv.style.display = 'block';
}
function calculateRefraction() {
    const incidentAngle = parseFloat(document.getElementById('incidentAngle3').value);
    const refractionIndex = parseFloat(document.getElementById('refractionIndex').value);
    const resultDiv = document.getElementById('result3');

    if (isNaN(incidentAngle) || isNaN(refractionIndex) || incidentAngle <= 0 || refractionIndex <= 1) {
        resultDiv.textContent = 'Будь ласка, введіть коректні значення для кута падіння та показника заломлення.';
        resultDiv.className = 'result incorrect';
        resultDiv.style.display = 'block';
        return;
    }

    const incidentAngleRad = incidentAngle * (Math.PI / 180); // Переводимо в радіани
    const sinRefractionAngle = Math.sin(incidentAngleRad) / refractionIndex; // Закон Снелліуса
    const refractionAngleRad = Math.asin(sinRefractionAngle);
    const refractionAngleDeg = refractionAngleRad * (180 / Math.PI); // Переводимо назад в градуси

    if (isNaN(refractionAngleDeg)) {
        resultDiv.textContent = 'Неможливо обчислити кут заломлення з такими параметрами.';
        resultDiv.className = 'result incorrect';
    } else {
        resultDiv.textContent = `Кут заломлення: ${refractionAngleDeg.toFixed(2)}°`;
        resultDiv.className = 'result correct';
    }

    resultDiv.style.display = 'block';
}
