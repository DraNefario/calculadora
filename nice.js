function appendToVisor(value){
    document.getElementById('visor').value += value;
}

function backspace() {
    let visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById('visor').value);
        document.getElementById('visor').value = result;
    } catch (e) {
        document.getElementById('visor').value = 'Erro';
    }
}