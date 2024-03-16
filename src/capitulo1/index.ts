export default class Capitulo1{
  exercicio1 = (): void => {
    console.log('capitulo 1.1 facil Crie uma função que imprima "Olá, mundo!" no console')
    console.log('Ola, Mundo!')
  
  
  }
  exercicio2 = (param: string): void => {
    console.log('capitulo1.2 facil Escreva uma função que aceite um parametro e o imprima no console.')
    console.log(param)
  
  }
  exercicio3 = (num1: number, num2: number): void => {
    console.log('capitulo 1.3 Fácil: Implemente uma função que calcule a soma de dois números e a imprima')
    console.log(num1 + num2)
  }
  exercicio4 = (palavra: string): void => {
    console.log('capitulo 1.4 Fácil: Crie uma função que receba uma string e a imprima invertida no console.')
    console.log(palavra.split('').reverse().join().replaceAll(',', ''))
  }
  
  exercicio5 = (min: number, max: number): number => {
    console.log('capitulo 1.5 Moderado: Escreva uma função que gere um número aleatório entre 1 e 100 e o imprima')
    return Math.floor(Math.random() * (max-min + 1) + min) 
  }
  
  exercicio6 = (numero: number): void => {
    console.log('capitulo 1.6 Moderado: Implemente uma função que verifique se um número é par ou ímpar e imprima o resultado')
    if(numero % 2 === 0){
  
        console.log('numero é par')
  
    }else console.log('numero é impar')
  
  }
  
  exercicio7 = (array: number[]=[]): void => {
    console.log('capitulo 1.7 Moderado: Crie uma função que aceite um array de números e imprima a média deles')
    let soma: number=0
    let media: number = 0
    array.forEach((valor: number) =>{
        soma= soma + valor
    })
    
    media = soma/array.length
    console.log(media)
  }
  
  exercicio8 = (palavra: string): void => {
    console.log('capitulo 1.8 Difícil: Desenvolva uma função que determine se uma palavra é um palíndromo e imprima o resultado')
   
   if(palavra.split('').reverse().join('') === palavra){
    console.log(palavra, 'é um palíndromo')
  
   }else console.log(palavra, 'não é um palíndromo')
  }
  
  exercicio9 = (maximo: number): void => {
    console.log('capitulo 9.15 Difícil: Desenvolva um loop que calcule a sequência de Fibonacci até o vigésimo termo.')
    const arrray: number[] = [1,1]
    
    for(let i = 0; i <= maximo; i++){
        console.log(arrray)
        if(i > 1){
            arrray.push(arrray[i - 1] + arrray[i - 2])
        }
    }
  }
}
