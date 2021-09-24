const divlist = document.getElementById('IdLista');//para seleccionar el div donde iran las filas
let Texto = document.getElementById('TInput');//para capturar el texto del imput
const btnTask = document.getElementById('TBtn');// btn del task
let resultado = '';
let contador = 1;


btnTask.addEventListener('click',()=>{
    if (Texto.value == ''){
        alert("Debe ingresar algo")
    }else{
        mostrar();
    }
});

const TareaCompletada = (comp)=>{
    let clasee = comp.classList[1];
    let idd= comp.id;
    let nuevoId = 'DivH'+ clasee;
    console.log(idd);
    console.log(clasee);
    let Seleccion= document.getElementById(nuevoId);
    Seleccion.setAttribute('disabled',null);
    Seleccion.classList.add('Desac')

}

const Eliminar = (c)=>{
    let clasee = c.classList[1];
    let idDiv= "DivC"+ clasee;
    let idInp= "DivH"+ clasee;
    let idbtn1= "btnC"+ clasee;
    let idbtn2= "btnE"+ clasee;
    //let idd= c.id;
    let divS = document.getElementById(idDiv);
    let inpS = document.getElementById(idInp);
    let btn1 = document.getElementById(idbtn1);
    let btn2 = document.getElementById(idbtn2);

    divS.parentNode.removeChild(divS);
    inpS.parentNode.removeChild(inpS);
    btn1.parentNode.removeChild(btn1);
    btn2.parentNode.removeChild(btn2);
    
}

const mostrar = ()=> {
    resultado += `<div class="DivHijo" id="DivC${contador}">
    <input type="text" value="${Texto.value}" readonly id = "DivH${contador}"><!--disabled para desactivar input-->
    <button class="btnChek ${contador}" id="btnC${contador}" onclick="TareaCompletada(this)" >
        <img src="/img/check2-all.svg">
    </button>
    <button class="btnEliminar ${contador}" id="btnE${contador}" onclick="Eliminar(this)">
        <img src="/img/trash.svg">
    </button>
</div>
    `
    divlist.innerHTML = resultado;
    contador = contador+1;
    Texto.value = '';
}
