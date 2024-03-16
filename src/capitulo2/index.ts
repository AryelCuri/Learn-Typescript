export default class Capitulo2{
    exercicio1 = (): void => {
        console.log('capitulo 2.1 Fácil: Declare uma variável do tipo string e atribua um valor a ela')
      
        const variavel: string = 'valoraleatorio'
        console.log(variavel)
      }
      
      exercicio2 = (): void => {
        console.log('capitulo 2.2 Fácil: Crie uma variável do tipo number e atribua um número decimal')
      
        const variavel: number = 3.14159
        console.log(variavel)
      }
      
      exercicio3 = (): void => {
        console.log('capitulo 2.3 Fácil: Declare uma constante do tipo booleano e atribua um valor verdadeiro')
        const verdade = true
        console.log(verdade)
      }
      
      exercicio4 = (): void => {
        console.log('capitulo 2.4 Fácil: Defina uma variável com um tipo explícito e atribua um valor')
        const valor: number = 2
        console.log(valor)
      }
      
      exercicio5 = (): void => {
        console.log('capitulo 2.5 Moderado: Declare uma variável com tipo union que aceite string ou número')
        let x: number | string
        x = 10
        console.log(x)
        x = 'abc'
        console.log(x)
      }
      
      exercicio6 = (array: string[] = []): void => {
        console.log('capitulo 2.6 Moderado: Crie um array de strings e atribua valores a ele')
        console.log(array)
      }
      
      exercicio7 = (): void => {
        console.log('capitulo 2.7 Moderado: Defina um objeto com tipos explícitos para suas propriedades')
        const texto: {
            palavras: string,
            titulo: string,
            qntdlinhas: number
        } = {
            palavras: 'estou aprendendo a linguagem typescript',
            titulo: 'typescript',
            qntdlinhas: 1
        }
        
        console.log(texto.titulo)
        console.log(texto.palavras)
        console.log(texto.qntdlinhas)
      }
      
      exercicio8 = (): void => {
        console.log('capitulo 2.8 Difícil: Utilize tipos condicionais para definir um tipo com base em outra variável')
        type TetoAberto = {conversivel: true}
        type TetoFechado = {conversivel: false}
        const carroNovo: TetoAberto | TetoFechado = {conversivel: true}
        console.log('carroNovo =', carroNovo)
      }
      
      exercicio9 = (numero: number): number => {
        console.log('capitulo 2.9 Difícil: Declare uma função com tipos de parâmetros e retorno explícitos')
        return numero
      }
      
}