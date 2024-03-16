export default class Capitulo9{
    exercicio1 = (): void =>{
        console.log('capitulo 9.1 Fácil: Crie um loop que imprima os números de 1 a 10.')
        let i: number = 1
        while(i <= 10){
          console.log(i)
          i = i+1
        }
      }
      
      exercicio2 =(): void =>{
        console.log('capitulo 9.2 Fácil: Implemente um loop que calcule a soma dos números de 1 a 50.')
        let i: number = 1
        let soma: number= 0
        while(i<=50){
          soma = soma + i
          console.log(soma)
          i += 1
        }
      }
      exercicio3 = (): void =>{
        console.log('capitulo 9.3 Fácil: Escreva um loop que imprima os números pares de 2 a 20')
          let i: number = 2
          while(i <= 20){
            console.log(i)
            i += 2
          }
      }
      exercicio4 =(): void => {
        console.log('capitulo 9.4 Fácil: Desenvolva um loop que preencha um array com os quadrados dos números de 1 a 5')
        const quadrados: number[] = []
        let i: number =1
        while(i <= 5){
          quadrados.push(Math.pow(i,2))
          i++
        }
          console.log(quadrados.join())
      }
      
      exercicio5 =(nomedaoraarray: string[] =[]): void => {
        console.log('capitulo 9.5 Fácil: Crie um loop que itere sobre um array de strings e imprima cada uma.')
        nomedaoraarray.forEach((valor: string) =>{
            console.log(valor)
        })
      }
      
      exercicio6 =(): void => {
        console.log('capitulo 9.6 Moderado: Implemente um loop que calcule o produto dos números de 1 a 10')
          let i: number = 1
          let produto: number =1
          while(i <=10){
            produto = produto*i
            console.log(produto)
            i = i+1
          }
      
      }
      
      exercicio7 = (array: number[] =[]): void => {
        console.log('capitulo 9.7 Moderado: Escreva um loop que inverta um array de números')
      
        const invertido: number[] = []
        array.forEach((valor: number) => {
          invertido.unshift(valor)
          
        })
        console.log(invertido)
      }
      
      exercicio8 = (num: number): boolean => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i === 0) return false;
        return true;
      }
      
       encontrarPrimoProximo(alvo: number): number {
        let anterior = alvo - 1;
        let seguinte = alvo + 1;
      
        while (!this.exercicio8(anterior) && !this.exercicio8(seguinte)) {
            anterior--;
            seguinte++;
        }
      
        return this.exercicio8(anterior) ? anterior : seguinte;
      }
      
      exercicio9 = (maximo: number): void => {
        console.log('capitulo 9.9 Moderado: Crie um loop que imprima os números de Fibonacci até o décimo termo')
        const arrray: number[] = [1,1]
        
        for(let i = 0; i <= maximo; i++){
            console.log(arrray)
            if(i > 1){
                arrray.push(arrray[i - 1] + arrray[i - 2])
            }
        }
      }
      
      exercicio10 = (): void => {
        console.log('ca9.10 Moderado: Implemente um loop que preencha um array com os números quadrados perfeitos até 100')
          const quadrados: number[] = []
          let i: number = 1
          while(i <= 10){
            quadrados.push(Math.pow(i,2))
            i++
            
          }
          console.log(quadrados)
        
        }
      
        exercicio11 = (frase: string): void => {
          console.log('Capítulo 9.11 Difícil: Desenvolva um loop que inverta cada palavra em uma frase')
          const array: string[] = frase.split(' ')
          const array2: string[] = []
          array.forEach((valor: string) => {
              array2.push(valor.split('').reverse().join(''))
          })
          console.log(array2.reverse().join(' '))
        }
      
        exercicio12 = (): void => {
          console.log('capitulo 9.12 Difícil: Implemente um loop que calcule a raiz quadrada dos números de 1 a 10')
          let i: number =1
          let raiz: number 
          while(i < 11){
              raiz = Math.sqrt(i)
              console.log(raiz)
              i++
          }
      }
      
      exercicio13 = (num: number): boolean => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i === 0) return false;
        return true;
      }
      
       encontrarPrimoProximod(alvo: number): number {
        let anterior = alvo - 1;
        let seguinte = alvo + 1;
      
        while (!this.exercicio13(anterior) && !this.exercicio13(seguinte)) {
            anterior--;
            seguinte++;
        }
      
        return this.exercicio13(anterior) ? anterior : seguinte;
      }
      
      exercicio14 = (): void => {
        console.log('Capítulo 9.14 Difícil: Crie um loop que imprima os números palíndromos de 1 a 100')
        let i1= 1
        let i2 = 11
          while(i1 < 10){
              console.log(i1)
              i1++
          }
          while(i2 < 100){
              console.log(i2)
              i2 = i2 + 11
          }
      }
      
      exercicio15 = (maximo: number): void => {
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