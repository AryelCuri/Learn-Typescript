export default class Capitulo10{

exercicio1 = (numero: number): boolean => {
    console.log('capitulo 10.1 Fácil: Crie uma função que verifique se um número é positivo.')
    if (numero > 0) {
      return (true)
    } else {
      return (false)
    }
  }
  
  exercicio2 = (paroun: number): boolean => {
    console.log('capitulo 10.2 Fácil: Implemente uma função que determine se um número é par.')
    if (paroun % 2 === 0) {
      console.log(paroun)
      return (true)
    } else {
      console.log(paroun)
      return (false)
    }
  
  }
  exercicio3 = (vazia: string): boolean => {
    console.log('capitulo 10.3 Fácil: Escreva uma função que verifique se uma string é vazia.')
    if (vazia === '' || vazia.length === 0) {
      return (true)
    } else {
      return (false)
    }
  
  }
  
  exercicio4 = (str1: string, str2: string): boolean => {
    console.log('capitulo 10.4 Fácil: Desenvolva uma função que compare duas strings e retorne se são iguais.')
    if (str1 === str2) return true
    return false
  
  }
  
  exercicio5 = (numero: number): void => {
    console.log('capitulo 10.5 Fácil: Crie uma função que determine se um número é positivo, negativo ou zero.')
    if (numero > 0) {
      console.log('positivo')
    } else if (numero < 0) console.log('negativo')
    else console.log('igual a 0')
  
  }
  
  exercicio6 = (ano: number): boolean => {
    console.log('capitulo 10.6 Moderado: Implemente uma função que verifique se um ano é bissexto')
    if(ano % 4 === 0 || ano % 400 === 0){
      console.log(ano)
      return true
    }
    return false
  }
  exercicio7 = (idade: number): void => {
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
  exercicio8 = (numero: number): void => {
    console.log('capitulo 10.8 Moderado: Crie uma função que aceite um número e retorne "Fizz" se for divisível por 3, "Buzz" se for divisível por 5 e "FizzBuzz" se for divisível por ambos')
    if(numero % 3 === 0 && numero % 5 !== 0){
      console.log('Fizz')
    }if(numero % 5 === 0 && numero % 3 !== 0){
      console.log('Buzz')
    }if(numero % 5 === 0 && numero % 3 === 0){
      console.log('FizzBuzz')
    } 
  }
  
  exercicio9 = (palavra1: string, palavra2: string): void => {
    console.log('capitulo 10.9 Moderado: Desenvolva uma função que determine se uma palavra é um anagrama de outra')
    palavra1 = palavra1.split('').sort().join('')
    palavra2 = palavra2.split('').sort().join('')
    if(palavra1===palavra2){
      console.log('São anagramas!')
    }else console.log('Não são anagramas')
  }
  
  exercicio10 = (idade: number): void => {
    console.log('capitulo 10.10 Moderado: Implemente uma função que verifique se uma pessoa pode votar com base na idade')
      if(idade > 15){
      console.log('pode votar')
    }if(idade <16){
      console.log('não pode votar')
    }
  }  
  
  exercicio11 = (numero: number): boolean => {
    console.log('capitulo 10.11 Difícil: Escreva uma função que determine se um número é primo')
    if(numero < 2){
      console.log(numero)
      return false
    }if(numero === 2 || numero === 3 || numero === 5 || numero ===7){
      console.log(numero)
      return true
    }if(numero % 2 ===0){
      return false
    }if(numero % 3 ===0){
      return false
    }if(numero % 5 === 0){
      return false
    }if(numero % 7 === 0){
      return false
    }
    return true
  }
  
  exercicio12 = (senha: string): void => {
    console.log('capitulo 10.12 Difícil: Desenvolva uma função que valide se uma senha atende a critérios de segurança (mínimo de caracteres, presença de letras e números)')
    let temLetra = false
    let temNumero = false
    let temEspecial = false
  
  
   if (senha.length >= 8){
    senha.split('').forEach((caracter: string) => {
      if (!isNaN(parseInt(caracter))) { 
      temNumero = true
  
      }else if(/[^a-zA-Z0-9]/.test(caracter)) {
          
          temEspecial = true;
        } else {
          temLetra = true;
        }
    })
   }
  
    if(senha.length < 8){
      console.log('precisa de pelo menos 8 caracteres')
    }if(temLetra && temNumero && temEspecial){
      console.log('senha aceita')
    }else console.log('precisa ter numeros, letras e caracteres especiais')
  }
  
  exercicio13 = (palavra: string): void => {
    console.log('capitulo 1.8 Difícil: Desenvolva uma função que determine se uma palavra é um palíndromo e imprima o resultado')
   
   if(palavra.split('').reverse().join('') === palavra){
    console.log(palavra, 'é um palíndromo')
  
   }else console.log(palavra, 'não é um palíndromo')
  }
  
  exercicio14 = (lado1: number, lado2: number, lado3: number): void => {
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
  
}