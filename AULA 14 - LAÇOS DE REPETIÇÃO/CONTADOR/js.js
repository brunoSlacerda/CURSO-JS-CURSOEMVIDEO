function clicou(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var mostra = document.getElementById('mostra')
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
    window.alert('Campos inválidos!')
    }
    else{
        mostra.innerHTML = 'Contando: '
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if(i < f) {
            for(let c = i; c <= f; c += p){
                mostra.innerHTML += ` ${c};`
            }
        } else{
            for(let c = i; c >= f; c -= p){
                mostra.innerHTML += ` ${c};`
            }
        }
        
        
    }
}