const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle.btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(45, 45, 90);
}

isTriangleBtn.addEventListener("click", isTriangle)