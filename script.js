const inputs = document.querySelectorAll(".vital-signs");
const calculateBtn = document.getElementById("calculate-button");
const result = document.getElementById("result");

function calculateNEWS(vitalSigns) {
    let score = 0;

    vitalSigns.forEach((vitalSign, index) => {

        let maxThreshold = inputs[index].dataset.thresholdMax;
        let minThreshold = inputs[index].dataset.thresholdMin;
        console.log(maxThreshold, minThreshold);
        if(index === 5) {
            if(vitalSign === "confused" || vitalSign === "unresponsive") {
                score += 1;
            }
        } 
        if (vitalSign > maxThreshold || vitalSign < minThreshold) {
            score += 1;
        }
    });
    console.log(score);
    return score;
};

calculateBtn.addEventListener("click", () => {
    let vitalSigns = []
    inputs.forEach(input => {
        vitalSigns.push(input.value);
    });
    let levelOfConsciousnessValue = document.querySelector('#level-of-consciousness').value;
    vitalSigns.push(levelOfConsciousnessValue);
    console.log(vitalSigns);
    result.innerText = calculateNEWS(vitalSigns);
});
