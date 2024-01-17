const capitulo1_exercicio1 = (): void => {
  console.log('capitulo 1.1 facil Crie uma função que imprima "Olá, mundo!" no console')
  console.log('Ola, Mundo!')


}
const capitulo1_exercicio2 = (param: string): void => {
  console.log('capitulo1.2 facil Escreva uma função que aceite um parâmetro e o imprima no console.')
  console.log(param)

}



const main = (): void => {
  
  capitulo1_exercicio1()
  capitulo1_exercicio2('param')
}
main()