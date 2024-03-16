export default class Capitulo6{
    exercicio1 = (string1: string, string2: string): void => {
        console.log('capitulo 6.1 Fácil: Crie uma função que concatene duas strings')
        const resultado = string1 + string2
        console.log(resultado)
      }
      
      exercicio2 = (palavra: string, sufixo: string): void => {
        console.log('capitulo 6.2 Fácil: Implemente uma função que adicione um sufixo a uma palavra')
      
        const resultado = palavra + sufixo
        console.log(resultado)
      }
      exercicio3 = (frase: string): void => {
        console.log('capitulo 6.3 Fácil: Escreva uma função que remova espaços em branco no início e no final de uma string')
        console.log(frase.trim())
      }
      
      exercicio4 = (palavra: string, letraAntiga: string, letraNova: string): void => {
          console.log('Capítulo 6.4 Fácil: Crie uma função que substitua todas as ocorrências de uma letra por outra em uma string')
      console.log(palavra.replaceAll(letraAntiga, letraNova))
      }
      
      exercicio5 = (frase: string): void => {
        console.log('Capítulo 6.5 Moderado: Desenvolva uma função que inverta as palavras em uma frase')
        const array: string[] = frase.split(' ')
        const array2: string[] = []
        array.forEach((valor: string) => {
            array2.push(valor.split('').reverse().join(''))
        })
        console.log(array2.reverse().join(' '))
      }
      
      exercicio6 = (frase: string): void => {
        console.log('Capítulo 6.6 Moderado: Implemente uma função que capitalize a primeira letra de cada palavra em uma string')
        const array: string[] = frase.split(' ')
        const array2: string[] =  []
        array.forEach((valor: string) => {  
            array2.push(valor.charAt(0).toUpperCase() + valor.slice(1)) 
        })
        console.log(array2.join(' '))
      }
      
      exercicio7 =(frase: string): void => {
          console.log('capitulo 6.7 Moderado: Crie uma função que remova caracteres especiais de uma string')
          console.log(frase.replace(/[^\w\s]/gi, ''))
      }
      
      exercicio8 = (): void => {
        console.log('capitulo  6.8 Difícil: Escreva uma função que formate uma data em formato específico')
        const data: Date = new Date(Date.now())
        console.log(data.toLocaleDateString('pt-br'))
        console.log(data.toLocaleTimeString('pt-br'))
        console.log(data.getDay(), data.getDate(), data.getFullYear())
        console.log(`Dia da semana = ${data.getDay()}, Dia do mês = ${data.getDate()}, Mês = ${data.getMonth() + 1}, Ano atual = ${data.getFullYear()}`)
      }
      
      
}