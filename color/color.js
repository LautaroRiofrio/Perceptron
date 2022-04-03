
let valoresInput = [
    [(0 / 255),(0 / 255),(0 / 255)],
    [(255 / 255),(255 / 255),(255 / 255)],

    [(255 / 255), (135 / 255), (135 / 255)],
    [(245/255), (255/255), (156/255)],
    [(166/255), (255/255), (249/255)],
    [(229/255), (255/255), (102/255)],
    [(0/255), (0/255), (148/255)],
    [(241/255), (235/255), (255/255)]
]

let valoresOutput = [
    0,
    1,

    0,
    1,
    1,
    1,
    0,
    1,
]


let neurona = new Perceptron();
neurona.init(3);
neurona.entrenar(500, valoresInput, valoresOutput);

let input = document.getElementById("input");
input.addEventListener("input", (e) => {
    let data = input.value;
    data = data.replace(/rgb|(|)/gi, "");
    data = data.replace("(","");
    data = data.replace(")","");
    data = data.split(",");

    document.querySelector("body").style.background = `rgb(${data[0]},${data[1]},${data[2]})`
    document.querySelector("h1").style.color = `${ (neurona.salida([ data[0]/255, data[1]/255, data[2]/255 ]) == 0) ? ("white"): ("black")  }`;
   
});


