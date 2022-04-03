






class Perceptron{
    constructor(){
        this.pesos =[];
        this.sesgo = null;
        this.ratioDeEntrenamiento = 0.001;
    }
    
    init(numPesos){
        for(let i = 0; i < numPesos; i++){
            this.pesos[i] = Math.random() * (0.5 + 0.5) - 0.5;
        }
        this.sesgo = Math.random() * (0.5 + 0.5) - 0.5;
    }

    salida(input){
        let salida = 0;
        for(let i = 0; i < input.length ; i++){
            salida += this.pesos[i] * input[i];
        }
        salida += this.sesgo;
        // return salida;
        return (salida >= 0.5) ? (1):(0);
    }

    entrenar(epochs, dataInput, dataOutput){
        for (let i = 0; i < epochs; i++) {
            // promedio de error
            let errorEpoch = 0;
            for (let j = 0; j < dataInput.length; j++) {
                // entrada y salida esperada
                let currentInput = dataInput[j]; 
                let currentOutput = dataOutput[j]; 
                // salida real
                let salida = this.salida(currentInput);
                // error entre salida real y esperada
                let error = currentOutput - salida;
                //mando el error al promedio
                errorEpoch += Math.abs(error);
                // ajustar los pesos
                this.ajustarPesos(error, currentInput);
            }
            // console.log(errorEpoch / dataInput.length);
        }
    }
    ajustarPesos(error,currentInput){
        for (let i = 0; i < this.pesos.length; i++) {
            let ajuste = error * this.ratioDeEntrenamiento * currentInput[i];
            this.pesos[i] += ajuste;
        }
        let ajuste = error * this.ratioDeEntrenamiento * 1;
        this.sesgo += ajuste;
    }
}

