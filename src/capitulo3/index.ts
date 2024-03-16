export default class Capitulo3{
    exercicio1= (array: number[] = []): void => {
        console.log('capitulo 3.1 Fácil: Crie um array de números e imprima seus elementos')
        console.log(array)
      }
      
      exercicio2= (array: number[] = []): void => {
        console.log('capitulo 3.2 Fácil: Implemente uma função que some todos os elementos de um array numérico')
        let soma: number = 0
        array.forEach((valor: number)  => {
            soma = soma + valor
      
        })
        console.log(soma)
      }
      
      exercicio3= (array: number[] = []): void => {
        console.log('capitulo 3.3 Fácil: Escreva uma função que encontre o maior número em um array')
        let maior: number = 0
        array.forEach((valor: number) => {
            if(valor > maior){
                maior = valor
            }
        })
        console.log(maior)
      }
      
      exercicio4 = (array: number[]): void => {
        console.log('capitulo 3.4 Fácil: Crie um novo array removendo os elementos duplicados de outro array')
        console.log(new Set(array))
      }  
      
      exercicio5 = (array: number[]): void => {
        console.log('capitulo 3.5 Moderado: Desenvolva uma função que ordene um array de números')
        console.log(array.sort())
      }
      
      exercicio6 = (array: number[]): void => {
        console.log('capitulo 3.6 Moderado: Crie uma função que filtre os números pares de um array.')
        console.log(array.filter((valor: number) => valor % 2 === 0))
      }
      
      exercicio7 = (array: number[], array2: number[]): void => {
        console.log('capitulo 3.7 Moderado: Implemente uma função que concatene dois arrays')
        console.log(array.concat(array2))
      }
      
      exercicio8 = (array: number[]): number[] => {
        console.log('capitulo 3.8 Difícil: Escreva uma função que encontre a sublista contígua de maior soma em um array'); 
        let maximoAgora = array[0]
        let maximo = array[0]
        let comeco = 0
        let final = 0
      
        for (let i = 1; i < array.length; i++) {
            maximoAgora = Math.max(array[i], maximoAgora + array[i])
            if (maximoAgora === array[i]) {
                    comeco = i
            }
      
            if (maximoAgora > maximo) {
                    maximo = maximoAgora
                    final = i
            }
          }
      return array.slice(comeco, final + 1)
      }
}