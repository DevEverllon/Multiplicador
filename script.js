//PASSO 1: CHAMAR A FUNÇÃO
//PASSO 2: CRIAR VARIAVEIS E "ACHAR-LAS" EM HTML
//PASSO 3: VALIDAR DADOS, NÃO PODE SER NADA
//PASSO 4: CONVERTER NUMERO RECEBIDO PELO INPUT
//PASSO 5: CRIAR VARIAVEL C
//PASSO 6: CRIAR FUNÇÃO DE REPETIÇÃO

function gerarTab(){
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('div#seltab')

    if(num.value.length == 0){
        alert('Digite um valor')
    } else{
        n = Number(num.value)
        tab.innerHTML = ''

        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}