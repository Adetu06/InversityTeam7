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

    // Get the submit button
    const submitButton = document.getElementById("submit-btn");

    // Function to calculate the cost based on battery capacity and power output
    function calculateCost() {
        // You can customize this formula based on your specific requirements
        const width = parseFloat(widthInput.value) || 0;
        const length = parseFloat(lengthInput.value) || 0;
        const height = parseFloat(heightInput.value) || 0;
        const batteryCapacity = parseFloat(batteryCapacitySlider.value);
        const powerOutput = parseFloat(powerOutputSlider.value);

        // Example formula: cost = (batteryCapacity + powerOutput) * (width + length + height)
        const cost = (batteryCapacity *87 + powerOutput*87) * (width * length * height) /10000000 * 5;

        costSlider.value = cost;
        costValue.textContent = cost;
    }

    // Function to open a new webpage on button click
    function openNewPage() {
        // Open result.html in a new tab
        window.open("result.html", "_blank");
    }

    // Attach input event listeners to dimensions inputs
    widthInput.addEventListener("input", calculateCost);
    lengthInput.addEventListener("input", calculateCost);
    heightInput.addEventListener("input", calculateCost);

    // Attach input event listeners to sliders
    batteryCapacitySlider.addEventListener("input", calculateCost);
    powerOutputSlider.addEventListener("input", calculateCost);

    // Attach click event listener to submit button
    submitButton.addEventListener("click", openNewPage);
});
