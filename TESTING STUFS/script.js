document.addEventListener("DOMContentLoaded", function () {
    // Get the input elements for dimensions
    const widthInput = document.getElementById("width");
    const lengthInput = document.getElementById("length");
    const heightInput = document.getElementById("height");

    // Get the slider elements and their associated value displays
    const batteryCapacitySlider = document.getElementById("battery-capacity");
    const powerOutputSlider = document.getElementById("power-output");
    const costSlider = document.getElementById("cost");
    const costValue = document.getElementById("cost-value");

    // Function to calculate the cost based on battery capacity and power output
    function calculateCost() {
        // You can customize this formula based on your specific requirements
        const width = parseFloat(widthInput.value) || 0;
        const length = parseFloat(lengthInput.value) || 0;
        const height = parseFloat(heightInput.value) || 0;
        const batteryCapacity = parseFloat(batteryCapacitySlider.value);
        const powerOutput = parseFloat(powerOutputSlider.value);

        // Example formula: cost = (batteryCapacity + powerOutput) * (width + length + height)
        const cost = (batteryCapacity + powerOutput) * (width + length + height);

        costSlider.value = cost;
        costValue.textContent = cost;
    }

    // Attach input event listeners to dimensions inputs
    widthInput.addEventListener("input", calculateCost);
    lengthInput.addEventListener("input", calculateCost);
    heightInput.addEventListener("input", calculateCost);

    // Attach input event listeners to sliders
    batteryCapacitySlider.addEventListener("input", calculateCost);
    powerOutputSlider.addEventListener("input", calculateCost);
});
