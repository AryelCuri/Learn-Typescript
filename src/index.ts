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

const capitulo1_exercicio5 = (min: number, max: number): number => {
  console.log('capitulo 1.5 Moderado: Escreva uma função que gere um número aleatório entre 1 e 100 e o imprima')
  return Math.floor(Math.random() * (max-min + 1) + min) 
}

const capitulo1_exercicio6 = (numero: number): void => {
  console.log('capitulo 1.6 Moderado: Implemente uma função que verifique se um número é par ou ímpar e imprima o resultado')
  if(numero % 2 === 0){

      console.log('numero é par')

  }else console.log('numero é impar')

}

const capitulo1_exercicio7 = (array: number[]=[]): void => {
  console.log('capitulo 1.7 Moderado: Crie uma função que aceite um array de números e imprima a média deles')
  let soma: number=0
  let media: number = 0
  array.forEach((valor: number) =>{
      soma= soma + valor
  })
  
  media = soma/array.length
  console.log(media)
}

const capitulo1_exercicio8 = (palavra: string): void => {
  console.log('capitulo 1.8 Difícil: Desenvolva uma função que determine se uma palavra é um palíndromo e imprima o resultado')
 
 if(palavra.split('').reverse().join('') === palavra){
  console.log(palavra, 'é um palíndromo')

 }else console.log(palavra, 'não é um palíndromo')
}



const capitulo2_exercicio1 = (): void => {
  console.log('capitulo 2.1 Fácil: Declare uma variável do tipo string e atribua um valor a ela')

  let variavel: string = 'valoraleatorio'
  console.log(variavel)
}

const capitulo2_exercicio2 = (): void => {
  console.log('capitulo 2.2 Fácil: Crie uma variável do tipo number e atribua um número decimal')

  let variavel: number = 3.14159
  console.log(variavel)
}

const capitulo2_exercicio3 = (): void => {
  console.log('capitulo 2.3 Fácil: Declare uma constante do tipo booleano e atribua um valor verdadeiro')
  let verdade = true
  console.log(verdade)
}

const capitulo2_exercicio4 = (): void => {
  console.log('capitulo 2.4 Fácil: Defina uma variável com um tipo explícito e atribua um valor')
  let valor: number = 2
  console.log(valor)
}

const capitulo2_exercicio5 = (): void => {
  console.log('capitulo 2.5 Moderado: Declare uma variável com tipo union que aceite string ou número')
  let x: number | string
  x = 10
  console.log(x)
  x = 'abc'
  console.log(x)
}

const capitulo2_exercicio6 = (array: string[] = []): void => {
  console.log('capitulo 2.6 Moderado: Crie um array de strings e atribua valores a ele')
  console.log(array)
}

const capitulo2_exercicio7 = (): void => {
  console.log('capitulo 2.7 Moderado: Defina um objeto com tipos explícitos para suas propriedades')
  let texto: {
      palavras: string,
      titulo: string,
      qntdlinhas: number
  }

  texto = {
      palavras: 'estou aprendendo a linguagem typescript',
      titulo: 'typescript',
      qntdlinhas: 1
  }
  
  console.log(texto.titulo)
  console.log(texto.palavras)
  console.log(texto.qntdlinhas)
}

const capitulo3_exercicio1= (array: number[] = []): void => {
  console.log('capitulo 3.1 Fácil: Crie um array de números e imprima seus elementos')
  console.log(array)
}

const capitulo3_exercicio2= (array: number[] = []): void => {
  console.log('capitulo 3.2 Fácil: Implemente uma função que some todos os elementos de um array numérico')
  let soma: number = 0
  array.forEach((valor: number)  => {
      soma = soma + valor

  })
  console.log(soma)
}

const capitulo3_exercicio3= (array: number[] = []): void => {
  console.log('capitulo 3.3 Fácil: Escreva uma função que encontre o maior número em um array')
  let maior: number = 0
  array.forEach((valor: number) => {
      if(valor > maior){
          maior = valor
      }
  })
  console.log(maior)
}

const capitulo4_exercicio1 = (a: number, b: number): void => {
  console.log('capitulo 4.1 Fácil: Crie uma função que receba dois números e retorne a soma deles')
  let resposta = a+b
  console.log(resposta)
}

const capitulo4_exercicio2 = (numero: number): void => {
  if(numero > 0){
      console.log('positivo')
  }if(numero < 0){
      console.log('negativo')
  }if(numero === 0){
      console.log('0')
  }
}

const capitulo4_exercicio3 = (numero: number): void => {
  console.log('capitulo  4.3 Fácil: Escreva uma função que calcule o fatorial de um número')
  let i: number = numero - 1
  let fatorial: number = numero
  while(i > 1){
      fatorial = fatorial * i
      i-- 
  }
  console.log(fatorial)
}

const capitulo4_exercicio4 = (numero: number[] = []): void => {
  console.log('capitulo 4.4 Fácil: Crie uma função que receba um array de números e retorne a média')
  let media: number
  let soma: number = 0
  numero.forEach((valor: number) => {
      soma = soma + valor

  })
  media = soma/numero.length
  
  console.log(media)


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

const capitulo9_exercicio6 =(): void => {
  console.log('capitulo 9.6 Moderado: Implemente um loop que calcule o produto dos números de 1 a 10')
    let i: number = 1
    let produto: number =1
    while(i <=10){
      produto = produto*i
      console.log(produto)
      i = i+1
    }

}

const capitulo9_exercicio7 = (array: number[] =[]): void => {
  console.log('capitulo 9.7 Moderado: Escreva um loop que inverta um array de números')

  const invertido: number[] = []
  array.forEach((valor: number) => {
    invertido.unshift(valor)
    
  })
  console.log(invertido)
}

const capitulo9_exercicio10 = (): void => {
  console.log('ca9.10 Moderado: Implemente um loop que preencha um array com os números quadrados perfeitos até 100')
    const quadrados: number[] = []
    let i: number = 1
    while(i <= 10){
      quadrados.push(Math.pow(i,2))
      i++
      
    }
    console.log(quadrados)
  
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

const capitulo10_exercicio6 = (ano: number): boolean => {
  console.log('capitulo 10.6 Moderado: Implemente uma função que verifique se um ano é bissexto')
  if(ano % 4 === 0 || ano % 400 === 0){
    console.log(ano)
    return true
  }
  return false
}
const capitulo10_exercicio7 = (idade: number): void => {
  console.log('capitulo10.7 Moderado: Escreva uma função que aceite uma idade e retorne "Criacça", "Adolescente", "Adulto" ou "idoso"')
  if(idade < 12 && idade > 0){
    console.log('Criança')
    console.log(idade)
}if(idade >= 12 && idade < 18){
    console.log('Adolescente')
        console.log(idade)

}if(idade> 17 && idade < 60){
  console.log('Adulto')
      console.log(idade)

}if(idade >59){
  console.log('Idoso')
      console.log(idade)

}if(idade <0){
  console.log('alien')
      console.log(idade)

}

}
const capitulo10_exercicio8 = (numero: number): void => {
  console.log('capitulo 10.8 Moderado: Crie uma função que aceite um número e retorne "Fizz" se for divisível por 3, "Buzz" se for divisível por 5 e "FizzBuzz" se for divisível por ambos')
  if(numero % 3 === 0 && numero % 5 !== 0){
    console.log('Fizz')
  }if(numero % 5 === 0 && numero % 3 !== 0){
    console.log('Buzz')
  }if(numero % 5 === 0 && numero % 3 === 0){
    console.log('FizzBuzz')
  } 
}

const capitulo10_exercicio10 = (idade: number): void => {
  console.log('capitulo 10.10 Moderado: Implemente uma função que verifique se uma pessoa pode votar com base na idade')
    if(idade > 15){
    console.log('pode votar')
  }if(idade <16){
    console.log('não pode votar')
  }
}  

const capitulo10_exercicio14 = (lado1: number, lado2: number, lado3: number): void => {
  console.log('capitulo10.14 Difícil: Implemente uma função que classifique um triângulo com base em seus lados (equilátero,isósceles ou escaleno)')

  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 >lado3){
      if(lado1 === lado2 && lado2 === lado3){
        console.log('O triângulo é equilátero')
      }if(lado1 === lado2 && lado1 !== lado3 || lado2 === lado3 && lado3 !== lado1){
        console.log('O triângulo é isósceles')
      }if(lado1 !== lado2 && lado2 !== lado3)
        console.log('O triângulo é escaleno')
  }else console.log('O triângulo não existe')
}

const main = (): void => {

  // capitulo1_exercicio1()
  // capitulo1_exercicio2('param')
  // capitulo1_exercicio3(1, 10)
  // capitulo1_exercicio4('palavra')
  //console.log(capitulo1_exercicio5(1, 100))
  //capitulo1_exercicio6(3)
  //capitulo1_exercicio7([12, 24, 65, 4])
  //capitulo1_exercicio8('asa')


  //  capitulo2_exercicio1()
  //  capitulo2_exercicio2()
  //  capitulo2_exercicio3()
  //  capitulo2_exercicio4()
  //  capitulo2_exercicio5()
  //  capitulo2_exercicio6(['asc'])
  //  capitulo2_exercicio7()
   
  //capitulo3_exercicio1([1, 2, 3])
  //capitulo3_exercicio2([1, 2, 3])
  // capitulo3_exercicio3([1, 1034, 3, 4, 5, 85])

  //capitulo4_exercicio1(12, 2)
  //capitulo4_exercicio2(1)
  //capitulo4_exercicio3(5)
  capitulo4_exercicio4([1, 7, 9, 12])


  // capitulo9_exercicio1()
  // capitulo9_exercicio2()
  // capitulo9_exercicio3()
  // capitulo9_exercicio4()
  // capitulo9_exercicio5(['abc', 'dfg', 'hij'])
  // capitulo9_exercicio6()
  // capitulo9_exercicio7([1, 2, 3, 4, 5])
  // capitulo9_exercicio10()

  // console.log(capitulo10_exercicio1(1))
  // console.log(capitulo10_exercicio2(3))
  // console.log(capitulo10_exercicio3(''))
  // console.log(capitulo10_exercicio4('asd', 'asad'))
  // capitulo10_exercicio5(-1)
  // capitulo10_exercicio5(0)
  // capitulo10_exercicio5(1)
  // console.log(capitulo10_exercicio6(400))
  // capitulo10_exercicio7(12)
  // capitulo10_exercicio8(15)
  // capitulo10_exercicio10(16)
  // capitulo10_exercicio14(5, 6, 7)
}
main()