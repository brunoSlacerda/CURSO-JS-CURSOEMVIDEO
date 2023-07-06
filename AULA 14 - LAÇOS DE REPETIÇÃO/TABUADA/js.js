function clicou(){
    let num = document.getElementById('num')
    var mostra = document.getElementById('mostra')
    if(num.value.length == 0){
        window.alert('Informe um número válido')
    } else{
        let n = Number(num.value)
        let c = 1 
        mostra.innerHTML = ''
        while (c <=10){
            mostra.innerHTML += `${n}x${c} = ${n*c} <br>`
            c++
        }
    }
}
