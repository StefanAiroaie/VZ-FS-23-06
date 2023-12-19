let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];


const celsiusGrad = fahrenheit.map(grad => ((grad - 32) / 1.8).toFixed(0))
console.log(celsiusGrad);

