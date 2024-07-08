var setadireita = window.document.getElementById ("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samatha = window.document.getElementById ("samantha")
var bruna = window.document.getElementById ("bruna")
var setaaesquerda = window.document.getElementById ("setaesquerda")

function RolarParaDireita() {
    leonardo.style="display:none"
    bruna.style="display:flex"
    setadireita.style="display:none"
    setaaesquerda.style="display:flex; margin-top:65px"
}

function RolarParaEsquerda() {
    leonardo.style="display:flex"
    bruna.style="display:none"
    setadireita.style="display:flex; margin-top:65px"
    setaaesquerda.style="display:none"
}

