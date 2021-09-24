const divlist = document.getElementById('IdLista');//para seleccionar el div donde iran las filas
let Texto = document.getElementById('TInput');//para capturar el texto del imput
const btnTask = document.getElementById('TBtn');// btn del task
let resultado = '';

btnTask.addEventListener('click',()=>{
    if (Texto.value == ''){
        alert("Debe ingresar algo")
    }else{
        mostrar();
    }
});

const mostrar = ()=> {
    resultado += `<div class="DivHijo">
    <input type="text" value="${Texto.value}" readonly ><!--disabled para desactivar input-->
    <button class="btnChek" id="btnC">
        <img src="/img/check2-all.svg">
    </button>
    <button class="btnEliminar" id="btnE">
        <img src="/img/trash.svg">
    </button>
</div>
    `
    divlist.innerHTML = resultado
    Texto.value = ''
}
