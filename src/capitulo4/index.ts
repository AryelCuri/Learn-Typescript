
export type Resultado = {
    valor: number,
    index: number
  }

export default class Capitulo4{
    exercicio1 = (a: number, b: number): void => {
        console.log('capitulo 4.1 Fácil: Crie uma função que receba dois números e retorne a soma deles')
        const resposta = a+b
        console.log(resposta)
      }
      
      exercicio2 = (numero: number): void => {
        if(numero > 0){
            console.log('positivo')
        }if(numero < 0){
            console.log('negativo')
        }if(numero === 0){
            console.log('0')
        }
      }
      
      exercicio3 = (numero: number): void => {
        console.log('capitulo  4.3 Fácil: Escreva uma função que calcule o fatorial de um número')
        let i: number = numero - 1
        let fatorial: number = numero
        while(i > 1){
            fatorial = fatorial * i
            i-- 
        }
        console.log(fatorial)
      }
      
      exercicio4 = (numero: number[] = []): void => {
        console.log('capitulo 4.4 Fácil: Crie uma função que receba um array de números e retorne a média')
        let media: number = 0
        let soma: number = 0
        numero.forEach((valor: number) => {
            soma = soma + valor
      
        })
        media = soma/numero.length
        
        console.log(media)
      
      
      }  
      
      exercicio5 = (palavra: string): void => {
          console.log('capitulo 4.5 Moderado: Desenvolva uma função que receba uma string e retorne a quantidade de vogais')
          let vogais: number = 0
          palavra.split('').forEach((valor: string) => {
              if(valor === 'a' ||valor === 'e' ||valor === 'i' ||valor === 'o' ||valor === 'u' ||valor === 'A' ||valor === 'E' ||valor === 'I' ||valor === 'O' ||valor === 'U')
              vogais = vogais + 1
          })
          console.log(vogais)
      }   
      
      exercicio6 = (palavra: string): void => {
        console.log('capitulo 4.6 Moderado: Implemente uma função que verifique se uma palavra é um palíndromo.')
        if(palavra.replace(/\s/g, '').split('').reverse().join('') === palavra.replace(/\s/g, '')){
            console.log('palíndromo')
        }else console.log('não é palíndromo')
      
      }
      
      exercicio7 = (array: string[] = []): void => {
        console.log('capitulo 4.7 Moderado: Crie uma função que receba um array de strings e retorne o maior comprimento')
        let maior: number = 0
        array.forEach((valor: string) => {
            if(valor.length > maior){
                maior = valor.length
            }
        })
        console.log(maior)
      }   
      
      
      exercicio8 = (alvo: number, array: number[]): Resultado => {
        console.log('capitulo 4.8 Difícil: Escreva uma função que realize a busca binária em um array ordenado.')
      
        let inicio: number = 0
        let fim: number = array.length - 1
      
      
        while(inicio <= fim){
          const meio: number = Math.floor((inicio + fim)/2)
      
          if(array[meio] === alvo){
            return {
              valor: array[meio],
              index: meio
            }
          }else if(array[meio] < alvo){
            inicio = meio + 1
          }else{
            fim = meio - 1
          }
        }
        return {
          valor: -1,
          index: -1
        }
      }
      
}