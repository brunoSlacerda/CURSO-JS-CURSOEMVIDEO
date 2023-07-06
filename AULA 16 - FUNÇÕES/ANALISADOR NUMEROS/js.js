
let finalizar = document.getElementById('botao')
let num = document.getElementById('num')
var lista = document.getElementById('flista')
var mostra = document.getElementById('mostra')
let vetor = []


function mandar(){  
    if(testeNum(num.value) && !numIgual(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.add(item)
        mostra.innerHTML = ''
        
    } 
    else{
        window.alert('Informe um valor válido!')
    }
    num.value = ''
    num.focus()
    
}

function testeNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function numIgual(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function finalizou(){
    if(vetor.length == 0){
        window.alert('Informe valores!')
    }else{
        mostra.innerHTML = ''
        let total = vetor.length
        soma = 0
        for (let pos in vetor){
            soma += vetor[pos]
        }
        media = soma/total
        media = Number(media.toFixed(2))
        vetor.sort()
        mostra.innerHTML += `<p>O total de números ADICIONADOS foi: ${total}<\p>`
        mostra.innerHTML += `<p> O menor número ADICIONADO foi: ${vetor[0]} <\p>`
        mostra.innerHTML += `<p> O maior número ADICIONADO foi: ${vetor[vetor.length-1]} <\p>`
        mostra.innerHTML += `<p> A soma dos números ADICIONADOS foi: ${soma} <\p>`
        mostra.innerHTML += `<p> A média dos numeros ADICIONADOS foi: ${media} <\p>`
    }
   
}

