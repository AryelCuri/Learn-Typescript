const capitulo1_exercicio1 = (): void => {
  console.log('capitulo 1.1 facil Crie uma função que imprima "Olá, mundo!" no console')
  console.log('Ola, Mundo!')


}
const capitulo1_exercicio2 = (param: string): void => {
  console.log('capitulo1.2 facil Escreva uma função que aceite um parâmetro e o imprima no console.')
  console.log(param)

}
const capitulo1_exercicio3 = (num1: number, num2: number): void => {
  console.log('capitulo 1.3 Fácil: Implemente uma função que calcule a soma de dois números e a imprima')
  console.log(num1 + num2)
}
const capitulo1_exercicio4 = (palavra: string): void => {
  console.log('capitulo 1.4 Fácil: Crie uma função que receba uma string e a imprima invertida no console.')
  console.log(palavra.split('').reverse().join().replaceAll(',', ''))
}

const capitulo9_exercicio1 = (): void =>{
  console.log('capitulo 9.1 Fácil: Crie um loop que imprima os números de 1 a 10.')
  let i: number = 1
  while(i <= 10){
    console.log(i)
    i = i+1
  }
}

const capitulo9_exercicio2 =(): void =>{
  console.log('capitulo 9.2 Fácil: Implemente um loop que calcule a soma dos números de 1 a 50.')
  let i: number = 1
  let soma: number= 0
  while(i<=50){
    soma = soma + i
    console.log(soma)
    i += 1
  }
}
const capitulo9_exercicio3 = (): void =>{
  console.log('capitulo 9.3 Fácil: Escreva um loop que imprima os números pares de 2 a 20')
    let i: number = 2
    while(i <= 20){
      console.log(i)
      i += 2
    }
}
const capitulo9_exercicio4 =(): void => {
  console.log('capitulo 9.4 Fácil: Desenvolva um loop que preencha um array com os quadrados dos números de 1 a 5')
  const quadrados: number[] = []
  let i: number =1
  while(i <= 5){
    quadrados.push(Math.pow(i,2))
    i++
  }
    console.log(quadrados.join())
}

const capitulo9_exercicio5 =(nomedaoraarray: string[] =[]): void => {
  console.log('capitulo 9.5 Fácil: Crie um loop que itere sobre um array de strings e imprima cada uma.')
  nomedaoraarray.forEach((valor: string) =>{
      console.log(valor)
  })
}

const capitulo10_exercicio1 = (numero: number): boolean => {
  console.log('capitulo 10.1 Fácil: Crie uma função que verifique se um número é positivo.')
  if (numero > 0) {
    return (true)
  } else {
    return (false)
  }
}

const capitulo10_exercicio2 = (paroun: number): boolean => {
  console.log('capitulo 10.2 Fácil: Implemente uma função que determine se um número é par.')
  if (paroun % 2 === 0) {
    console.log(paroun)
    return (true)
  } else {
    console.log(paroun)
    return (false)
  }

}
const capitulo10_exercicio3 = (vazia: string): boolean => {
  console.log('capitulo 10.3 Fácil: Escreva uma função que verifique se uma string é vazia.')
  if (vazia === '' || vazia.length === 0) {
    return (true)
  } else {
    return (false)
  }

}

const capitulo10_exercicio4 = (str1: string, str2: string): boolean => {
  console.log('capitulo 10.4 Fácil: Desenvolva uma função que compare duas strings e retorne se são iguais.')
  if (str1 === str2) return true
  return false

}

const capitulo10_exercicio5 = (numero: number): void => {
  console.log('capitulo 10.5 Fácil: Crie uma função que determine se um número é positivo, negativo ou zero.')
  if (numero > 0) {
    console.log('positivo')
  } else if (numero < 0) console.log('negativo')
  else console.log('igual a 0')

}


const main = (): void => {

  capitulo1_exercicio1()
  capitulo1_exercicio2('param')
  capitulo1_exercicio3(1, 10)
  capitulo1_exercicio4('palavra')
  capitulo9_exercicio1()
  capitulo9_exercicio2()
  capitulo9_exercicio3()
  capitulo9_exercicio4()
  capitulo9_exercicio5(['abc', 'dfg', 'hij'])
  console.log(capitulo10_exercicio1(1))
  console.log(capitulo10_exercicio2(3))
  console.log(capitulo10_exercicio3(''))
  console.log(capitulo10_exercicio4('asd', 'asad'))
  capitulo10_exercicio5(-1)
  capitulo10_exercicio5(0)
  capitulo10_exercicio5(1)
}
main()