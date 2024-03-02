document.addEventListener("DOMContentLoaded", function () {
    // Get the slider element and its associated value display
    const slider = document.getElementById("slider");
    const sliderValue = document.getElementById("slider-value");

    // Update the displayed value when the slider is moved
    slider.addEventListener("input", function () {
        sliderValue.textContent = slider.value;
    });
});