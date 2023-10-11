document.addEventListener("DOMContentLoaded", () => {

    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("resultContainer");

    calculateButton.addEventListener("click", () => {

        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);/* Los input siempre devuelven valores numericos por ellos hay q pasarlo a FLoat */

        if (!isNaN(height) && !isNaN(width)) {
            const area = width * height;
            const peri = (2 * width) + (2 * height);
            const diag = Math.sqrt((Math.pow(height,2))+(Math.pow(width,2))).toFixed(2);

            resultContainer.innerHTML = `Área del rectángulo: ${area.toFixed(2)} <br><br> Perímetro del rectángulo: ${peri.toFixed(2)} <br><br> Diagonal del rectángulo ${diag}`

        } else  {
            resultContainer.innerHTML = `Por favor ingrese valores validos`
        }
    })
})