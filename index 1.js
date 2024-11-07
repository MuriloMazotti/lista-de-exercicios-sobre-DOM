// let quadrado = document.getElementById("verde")
// let quadrado1 = document.getElementById("vermelho")
// let quadrado2 = document.getElementById("azul")

// quadrado.addEventListener("click", function(){ //->Para adicionar um evento, que no caso é o click, depois o if e o else para mudar de cor

//     if(quadrado.style.backgroundColor == "green"){
//         quadrado.style.backgroundColor="brown"

//     }else{
//         quadrado.style.backgroundColor="green"
//     }



    
// })
// quadrado1.addEventListener("click", function(){

//     if(quadrado1.style.backgroundColor == "red"){
//         quadrado1.style.backgroundColor="yellow"

//     }else{
//         quadrado1.style.backgroundColor="red"
//     }



    
// })
// quadrado2.addEventListener("click", function(){

//     if(quadrado2.style.backgroundColor == "blue"){
//         quadrado2.style.backgroundColor="grey"

//     }else{
//         quadrado2.style.backgroundColor="blue"
//     }



    
// })

// Exercicio 2)
 
// let contador = 0 
// let botao = document.getElementById("contador")
// let texto = document.getElementById("NumeroDeClick")

// botao.addEventListener("click", function(){ 
//     contador = contador + 1
//     texto.innerText= contador
// })
//Exercicio 3)
// let botao = document.getElementById("botao2")
// let texto = document.getElementById("frase")
// botao.addEventListener('click', function(){ 
//     if (frase.style.display === 'none') {
//         frase.style.display = 'block'
//     } else {
//         frase.style.display = 'none'
        
//     }
// })
//Exercicio 4
//  let botao = document.getElementById('botao')
//  let mensagem = document.getElementById('mensagem')
//      botao.addEventListener('click', function() {
//          let escreva = prompt("escreva uma mensagem para substituir")
//          mensagem.innerText = escreva
//      })
//exercicio 5

    // document.addEventListener("keydown", (event) => {
    //     let mensagem = document.getElementById("mensagem")
    //     mensagem.innerText = `Você clicou a tecla: ${event.key}`
    // })
//Exercicio 6)
let votar = document.getElementById('votar')
let lewandowski = document.getElementById('lewandowski')
let neuer = document.getElementById('neuer')

lewandowski.style.display = 'none'
neuer.style.display = 'none'

votar.addEventListener('click', function() {
    votar.style.display = 'none'
    let voto = prompt("Qual seu voto (neuer ou lewandowski)?")
    if (voto === 'neuer') {
        prompt('Você tem certeza?')
        alert('Parabens, voce votou no neuer')
        neuer.style.display = 'block'
        
    } else if (voto === 'lewandowski') {
        prompt('Você tem certeza?')
        alert('Parabens, voce votou no lewandowski')
        lewandowski.style.display = 'block'
    } else {
        alert('Voto NULO')
    }
})