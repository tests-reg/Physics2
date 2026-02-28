function addComponent() {
  const componentType = document.getElementById('component-type').value;
  const componentInputs = document.getElementById('component-inputs');

  const inputLabel = document.createElement('label');
  inputLabel.textContent = `${componentType.charAt(0).toUpperCase() + componentType.slice(1)} ${componentInputs.children.length + 1}:`;

  const inputField = document.createElement('input');
  inputField.type = 'number';
  inputField.className = componentType;
  inputField.name = `${componentType}${componentInputs.children.length + 1}`;

  componentInputs.appendChild(inputLabel);
  componentInputs.appendChild(inputField);
}

function calculate() {
  const voltage = parseFloat(document.getElementById('voltage').value);

  if (isNaN(voltage)) {
    alert('Будь ласка, введіть коректну напругу!');
    return;
  }

  let totalResistance = 0;
  let totalCapacitance = 0;

  const resistors = document.querySelectorAll('.resistor');
  resistors.forEach(resistor => {
    totalResistance += parseFloat(resistor.value);
  });

  const capacitors = document.querySelectorAll('.capacitor');
  capacitors.forEach(capacitor => {
    totalCapacitance += parseFloat(capacitor.value);
  });

  const result = `
    Напруга: ${voltage} V
    Загальний опір: ${totalResistance.toFixed(2)} Ω
    Загальна ємність: ${totalCapacitance.toFixed(2)} F
  `;

  document.getElementById('experiment-result').innerText = result;
}