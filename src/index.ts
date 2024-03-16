import Capitulo1 from './capitulo1/index';
import Capitulo2 from './capitulo2/index';
import Capitulo3 from './capitulo3/index';
import Capitulo4, { Resultado } from './capitulo4/index';
import Capitulo5 from './capitulo5/index';
import Capitulo6 from './capitulo6/index';
import Capitulo7, { Livro } from './capitulo7/index';



//-----------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------

const capitulo8_exercicio1 = (): void => {
  console.log('capitulo 8.1 Fácil: Declare um tipo para representar um usuário, com nome de usuário e e-mail')
  type Usuario = {
    usuario: string,
    email: string
  }  
}

const capitulo8_exercicio2 = (): void => {
  console.log('capitulo 8.2 Fácil: Crie uma função que combine dois objetos do tipo usuário.')
  type Usuario = {
    nome: string,
    email: string
  }
  let usuario: Usuario = {
    nome: 'Aryel',
    email: 'bolinha123@gmail.com'
}
  console.log(`nome: ${usuario.nome} , email: ${usuario.email}`) 
}

type ProdutoEx3 = {
  nome: string,
  descricao: string,
  preco: string
}
const capitulo8_exercicio3 = (): void => {
console.log('capitulo 8.3 Fácil: Defina um tipo para representar um produto, com nome, preço e descrição.')
let produto1: ProdutoEx3 = {
  nome: '3 pinças',
  descricao: 'esse produto é legal',
  preco: 'R$15.00'
   }
   let produto2: ProdutoEx3 = {
  nome: 'cera de depilação + fita de depilação',
   descricao: 'esse produto é daora',
   preco: 'R$100.00'
   }
   console.log(produto1, produto2)
}

type TProdutoCapitulo8Ex4 = {
  nome: string,
  descricao: string,
  preco: string
}
const capitulo8_exercicio4 = (produto1: TProdutoCapitulo8Ex4, produto2: TProdutoCapitulo8Ex4): TProdutoCapitulo8Ex4 => {
  console.log('capitulo 8.4 Fácil: Escreva uma função que aceite dois produtos e retorne um novo produto combinado')
    const preco: string = 'R$' + (Number(produto1.preco.replace('R$', '')) + Number(produto2.preco.replace('R$', ''))).toString()
  let novo_produto: TProdutoCapitulo8Ex4 = {

    nome: `kit ${produto1.nome} e ${produto2.nome}`,
    descricao: `${produto1.descricao}, ${produto2.descricao}`,
    preco 
  }
    return novo_produto
  }

const capitulo8_exercicio5 = (): void => {
    console.log('capitulo 8.5 Moderado: Declare um tipo para representar um evento, contendo título, data e um array de palestrantes')
    
  }
  type Evento = {
      titulo: string,
      data: string|Date,
      palestrantes: string[]
    } 
    
  const capitulo8_exercicio6 = (evento1: Evento, evento2: Evento): Evento => {
    console.log('capitulo 8.6 Moderado: Crie uma função que aceite dois eventos e retorne um novo evento combinado')
    let array: string[] = []
    array = array.concat(evento1.palestrantes, evento2.palestrantes)
    let novo_evento: Evento = {
      titulo: `${evento1.titulo} E ${evento2.titulo}`,
      data: `datas: ${evento1.data.toLocaleString('pt-br')} E ${evento2.data.toLocaleString('pt-br')}`,
      palestrantes: array
    }
    return novo_evento
  }

  type transacao_banc = {
    tipo: string,
    valor: string,
    data: string|Date
  } 

const capitulo8_exercicio7 = (): void => {
  console.log('capitulo 8.7 Moderado: Defina um tipo para representar uma transação bancária, com tipo, valor e data')
}

type Transacao_banc = {
  tipo: string,
  valor: string,
  data: string|Date
} 

const capitulo8_exercicio8 = (transacao1: Transacao_banc, transacao2: Transacao_banc): Transacao_banc => {
console.log('capitulo 8.8 Difícil: Escreva uma função que aceite duas transações bancárias e retorne um novo objeto com o saldo resultante')
  const novo_saldo: Transacao_banc = {
  tipo: 'Novo Saldo',
  valor: (parseFloat(transacao2.valor.replace('R$', '')) - parseFloat(transacao1.valor.replace('R$', ''))).toFixed(2).toString(),
  data: new Date()
}
return novo_saldo
}

//---------------------------------------------------------------------------------------------------------------------------

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

const capitulo9_exercicio8 = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
      if (num % i === 0) return false;
  return true;
}

function encontrarPrimoProximo(alvo: number): number {
  let anterior = alvo - 1;
  let seguinte = alvo + 1;

  while (!capitulo9_exercicio8(anterior) && !capitulo9_exercicio8(seguinte)) {
      anterior--;
      seguinte++;
  }

  return capitulo9_exercicio8(anterior) ? anterior : seguinte;
}

const capitulo9_exercicio9 = (maximo: number): void => {
  console.log('capitulo 9.9 Moderado: Crie um loop que imprima os números de Fibonacci até o décimo termo')
  const arrray: number[] = [1,1]
  
  for(let i = 0; i <= maximo; i++){
      console.log(arrray)
      if(i > 1){
          arrray.push(arrray[i - 1] + arrray[i - 2])
      }
  }
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

  const capitulo9_exercicio11 = (frase: string): void => {
    console.log('Capítulo 9.11 Difícil: Desenvolva um loop que inverta cada palavra em uma frase')
    let array: string[] = frase.split(' ')
    let array2: string[] = []
    array.forEach((valor: string) => {
        array2.push(valor.split('').reverse().join(''))
    })
    console.log(array2.reverse().join(' '))
  }

  const capitulo9_exercicio12 = (): void => {
    console.log('capitulo 9.12 Difícil: Implemente um loop que calcule a raiz quadrada dos números de 1 a 10')
    let i: number =1
    let raiz: number 
    while(i < 11){
        raiz = Math.sqrt(i)
        console.log(raiz)
        i++
    }
}

const capitulo9_exercicio13 = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
      if (num % i === 0) return false;
  return true;
}

function encontrarPrimoProximod(alvo: number): number {
  let anterior = alvo - 1;
  let seguinte = alvo + 1;

  while (!capitulo9_exercicio13(anterior) && !capitulo9_exercicio13(seguinte)) {
      anterior--;
      seguinte++;
  }

  return capitulo9_exercicio13(anterior) ? anterior : seguinte;
}

const capitulo9_exercicio14 = (): void => {
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

const capitulo9_exercicio15 = (maximo: number): void => {
  console.log('capitulo 9.15 Difícil: Desenvolva um loop que calcule a sequência de Fibonacci até o vigésimo termo.')
  const arrray: number[] = [1,1]
  
  for(let i = 0; i <= maximo; i++){
      console.log(arrray)
      if(i > 1){
          arrray.push(arrray[i - 1] + arrray[i - 2])
      }
  }
}

//-----------------------------------------------------------------------------------------------------



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

const capitulo10_exercicio9 = (palavra1: string, palavra2: string): void => {
  console.log('capitulo 10.9 Moderado: Desenvolva uma função que determine se uma palavra é um anagrama de outra')
  palavra1 = palavra1.split('').sort().join('')
  palavra2 = palavra2.split('').sort().join('')
  if(palavra1===palavra2){
    console.log('São anagramas!')
  }else console.log('Não são anagramas')
}

const capitulo10_exercicio10 = (idade: number): void => {
  console.log('capitulo 10.10 Moderado: Implemente uma função que verifique se uma pessoa pode votar com base na idade')
    if(idade > 15){
    console.log('pode votar')
  }if(idade <16){
    console.log('não pode votar')
  }
}  

const capitulo10_exercicio11 = (numero: number): boolean => {
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

const capitulo10_exercicio12 = (senha: string): void => {
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

const capitulo10_exercicio13 = (palavra: string): void => {
  console.log('capitulo 1.8 Difícil: Desenvolva uma função que determine se uma palavra é um palíndromo e imprima o resultado')
 
 if(palavra.split('').reverse().join('') === palavra){
  console.log(palavra, 'é um palíndromo')

 }else console.log(palavra, 'não é um palíndromo')
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


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
class Pessoa {
  nome: string
  idade: number
  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }
  imprimirDetalhes(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
  }
}

const capitulo12_exercicio1 = (): void => {
    console.log('12.1 Fácil: Criando uma Classe Básica. Crie uma classe simples chamada Pessoa com propriedades como nome, idade, e um método para imprimir os detalhes da pessoa.')
const pessoa1 = new Pessoa("Fulano", 25)
pessoa1.imprimirDetalhes()
}

class Pessoaa {
  constructor(public nome: string, public idade: number) {}

  imprimirDetalhes(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
  }

  aumentarIdade(anos: number): void {
    this.idade += anos
  }

  alterarNome(novoNome: string): void {
    this.nome = novoNome
  }
}
const capitulo12_exercicio2 = (): void => {
  console.log('12.2 Fácil: Adicionando Métodos. Expanda a classe Pessoa adicionando métodos para aumentar a idade da pessoa e alterar onome.')
const pessoa1 = new Pessoaa('Jão1', 25)
pessoa1.imprimirDetalhes()
pessoa1.aumentarIdade(3)
pessoa1.alterarNome('Jão2')
pessoa1.imprimirDetalhes()
}

class Pessoaaa {
  constructor(public nome: string, public idade: number) {}

  informacoes(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
  }
}

class Aluno extends Pessoaaa {
  constructor(nome: string, idade: number, public matricula: number) {
    super(nome, idade)
  }

  informacoes(): void {
    super.informacoes()
    console.log(`Matrícula: ${this.matricula}`)
  }

  estudar(): void {
    console.log(`${this.nome} está estudando.`)
  }
}
const capitulo12_exercicio3 = (): void => {
  console.log('12.3 Fácil: Herança. Crie uma classe Aluno que herde da classe Pessoa. Adicione propriedades específicas do aluno,como matricula e métodos relacionados.')
const aluno1 = new Aluno("João", 20, 12345)
aluno1.informacoes()
aluno1.estudar()
}

class Pessoaaaaa {
  nome: string
  idade: number

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }

  exibirInformacoes(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
  }
}

class Alunoo extends Pessoaaaaa {
  matricula: number

  constructor(nome: string, idade: number, matricula: number) {
    super(nome, idade)
    this.matricula = matricula
  }

  exibirInformacoes(): void {
    super.exibirInformacoes()
    console.log(`Matricula: ${this.matricula}`)
  }

  estudar(): void {
    console.log(`${this.nome} está estudando.`)
  }
}

const capitulo12_exercicio4 = (): void => {
  console.log('12.4 Fácil: Sobrescrita de Método. Na classe Aluno, sobrescreva o método de impressão da classe Pessoa para incluir informações específicas do aluno.')
const aluno1 = new Alunoo("João", 20, 12345)
aluno1.exibirInformacoes()
aluno1.estudar()
}

class Pessoaaaaaa {
  private _nome: string;
  private _idade: number;

  constructor(nome: string, idade: number) {
    this._nome = nome
    this._idade = idade
  }

  get nome(): string {
    return this._nome
  }

  set nome(novoNome: string) {
    this._nome = novoNome
  }

  get idade(): number {
    return this._idade
  }

  set idade(novaIdade: number) {
    this._idade = novaIdade
  }

  exibirInformacoes(): void {
    console.log(`Nome: ${this._nome}, Idade: ${this._idade}`)
  }
}
const capitulo12_exercicio5 = (): void => {
  console.log('12.5 Fácil: Encapsulamento. Modifique a classe Pessoa para tornar suas propriedades privadas e adicione métodos de acesso(getters e setters).')
const pessoa1 = new Pessoaaaaaa("Maria", 25)
console.log(pessoa1.nome)
console.log(pessoa1.idade)

pessoa1.nome = "Ana"
pessoa1.idade = 30

pessoa1.exibirInformacoes()
}
interface OperacoesMatematica {
  soma( num: number, num1: number): number
  subtracao(num: number, num1: number): number
  multiplicacao(num: number, num1: number): number
  divisao(num: number, num1: number): number
}
class Calculadora1 implements OperacoesMatematica { 
    soma = (num: number, num1: number): number => {
      return num + num1
    }
    subtracao = (num: number, num1: number): number => {
      return num - num1
    }
    multiplicacao = (num: number, num1: number): number => {
      return num * num1  
    }
    divisao = (num: number, num1: number): number => {
      return num/num1
    }
}
const capitulo12_exercicio6 = (): void => {
  console.log('12.6 Moderado: Classes Estáticas. Crie uma classe estática Calculadora com métodos estáticos para realizar operações matemáticas simples, como adição, subtração, multiplicação e divisão')
const calculadora1: Calculadora1 = new Calculadora1()
console.log('soma: ',calculadora1.soma(1, 1))
console.log('subtracao: ',calculadora1.subtracao(1, 1))
console.log('multiplicacao: ',calculadora1.multiplicacao(2, 2))
console.log('divisão: ',calculadora1.divisao(2, 2))
}

class Endereco {
  constructor(
      public rua: string,
      public cidade: string,
      public estado: string,
      public cep: string
  ) {}

  imprimirDetalhesEndereco(): void {
      console.log(`Endereço: ${this.rua}, ${this.cidade}, ${this.estado}, CEP: ${this.cep}`);
  }
}

class Pessoaaaa {
  constructor(
      public nome: string,
      public idade: number,
      public endereco: Endereco
  ) {}

  imprimirDetalhesPessoa(): void {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
      this.endereco.imprimirDetalhesEndereco();
  }
}
const capitulo12_exercicio7 = (): void => {
console.log('12.7 Moderado: Composição. Crie uma classe Endereco e uma classe Pessoa que possui uma instância da classe Endereco. Adicione métodos para imprimir os detalhes da pessoa e do endereço.')
const endereco = new Endereco('Rua Principal', 'Cidade Exemplo', 'Estado Exemplo', '12345-678');
const pessoa = new Pessoaaaa('João', 30, endereco);

pessoa.imprimirDetalhesPessoa();
}

interface Veiculo {
  modelo: string
  ano: number
}

class Carro implements Veiculo {
  constructor(
      public modelo: string,
      public ano: number,
      public marca: string,
      public cor: string
  ) {}
}

class Moto implements Veiculo {
  constructor(
      public modelo: string,
      public ano: number,
      public marca: string,
      public cilindradas: number
  ) {}
}
const capitulo12_exercicio8 = (): void => {
  console.log('12.8 Moderado: Interface. Defina uma interface Veiculo com propriedades comuns a veículos (por exemplo, modelo, ano) eimplemente essa interface em classes como Carro e Moto.')
const carro = new Carro('Fusca', 1972, 'Volkswagen', 'Azul')
const moto = new Moto('CG 125', 2005, 'Honda', 125)

console.log(carro)
console.log(moto)
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const capitulo13_exercicio1 = (): void => {
  console.log('13.1 Fácil: Criando uma Interface Simples   Crie uma interface chamada Usuario com propriedades como nome, email e idade.')
  interface Usuario {
  nome: string;
  email: string;
  idade: number;
  } 
}

interface Usuario {
  nome: string
  email: string
  idade: number
}


class Cliente implements Usuario {
  nome: string
  email: string
  idade: number
  saldo: number

  constructor(nome: string, email: string, idade: number, saldo: number) {
    this.nome = nome
    this.email = email
    this.idade = idade
    this.saldo = saldo
  }

  capitulo13_exercicio2(valor: number): void {
    console.log('13.2 Fácil: Implementação de Interface.Crie uma classe chamada Cliente que implementa a interface Usuario. Adicione métodos e propriedades específicos da classe.')

    if (valor <= this.saldo) {
      console.log(`${this.nome} fez uma compra de R$${valor.toFixed(2)}`)
      this.saldo = this.saldo - valor
    } else {
      console.log(`${this.nome} não possui saldo suficiente para realizar a compra.`)
    }
  }
}

interface Animal {
  nome: string
  barulhento: boolean
}
interface Ave extends Animal {
  penas: boolean
  bico: boolean
  voa: boolean
}

interface Papagaio extends Ave{
  fala: boolean
}
const capitulo13_exercicio3 = (): void => {
  console.log('capitulo 13.3 Fácil: Herança de Interface.Crie uma interface Animal com propriedades como nome e som. Em seguida, crie uma interface Ave que estenda a interface Animal e adicione propriedades específicas de aves')
const papagaio: Papagaio = {
  nome: 'paraguaio',
  barulhento: true,
  bico: true,
  penas: true,
  voa: true,
  fala: true
} 
console.log(papagaio)
}


interface FormaGeometrica {
  calcularArea():  number
  calcularPerimetro(): number
}
class Retangulo implements FormaGeometrica {
    largura: number;
    altura: number;
    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(): number {
        return this.largura * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}
const capitulo13_exercicio4 = (): void => {
  console.log(' capitulo 13.4 Fácil: Métodos em Interfaces. Defina uma interface FormaGeometrica com métodos como calcularArea e calcularPerimetro. Implemente essa interface em classes como Circulo e Retangulo')
const retangulo = new Retangulo(5, 2) 
console.log(retangulo.calcularArea(), retangulo.calcularPerimetro())
}


interface Usuario {
  nome: string
  email: string
  idade: number
  telefone? : string
}
class Cliente1 implements Usuario {
  nome: string
  email: string
  idade: number
  saldo: number
  telefone?: string

  constructor(nome: string, email: string, idade: number, saldo: number, telefone: string ='') {
    this.nome = nome
    this.email = email
    this.idade = idade
    this.saldo = saldo
    this.telefone = telefone
  }
  

   capitulo13_exercicio5(valor: number): void {
    console.log('capitulo 13.5 Fácil: Parâmetros Opcionais.Adicione um parâmetro opcional à interface Usuario chamado telefone. Atualize a classe Clientepara incluir ou não esse parâmetro.')
    if (valor <= this.saldo) {
      console.log(`${this.nome} fez uma compra de R$${valor.toFixed(2)}`)
      this.saldo = this.saldo - valor
    } else {
      console.log(`${this.nome} não possui saldo suficiente para realizar a compra.`)
    }
  
  }
}
const cliente1: Cliente1 = new Cliente1(
  'Jão',
  'Jão123@gmail.com',
  23,
  1000

)

interface OperacaoMatematica {
  soma( num: number, num1: number): number
  subtracao(num: number, num1: number): number
  multiplicacao(num: number, num1: number): number
  divisao(num: number, num1: number): number
  raizQuadrada(num: number): number
  restoDivisao(num: number, num1: number): number
  porcentagem(num: number, num1: number): number
  fatorial(num: number): number
  potencia(base: number, expoente: number): number

}
class Calculadora implements OperacaoMatematica { 
    soma = (num: number, num1: number): number => {
      return num + num1
    }
    subtracao = (num: number, num1: number): number => {
      return num - num1
    }
    multiplicacao = (num: number, num1: number): number => {
      return num * num1  
    }
    divisao = (num: number, num1: number): number => {
      return num/num1
    }
    raizQuadrada = (num: number): number =>{
      return Math.sqrt(num)
    }

    restoDivisao = (num: number, num1: number): number => {
        return num % num1
    }
    porcentagem = (num: number, num1: number): number => {
        return (num/num1) * 100
    }
    fatorial = (num: number): number => {
        return num <= 1 ? 1 : num * this.fatorial(num - 1);
    }
     potencia = (base: number, expoente: number): number => {
        return Math.pow(base, expoente);
    }
}
const capitulo13_exercicio6 = (): void => {
  console.log('13.6 Moderado: Interfaces para Funções. Crie uma interface chamada OperacaoMatematica que representa uma função matemática. Implemente essa interface em funções como soma, subtracao e multiplicacao')
const calculadora: Calculadora = new Calculadora()
console.log('soma: ',calculadora.soma(1, 1))
console.log('subtracao: ',calculadora.subtracao(1, 1))
console.log('multiplicacao: ',calculadora.multiplicacao(2, 2))
console.log('divisão: ',calculadora.divisao(2, 2))
console.log('raiz quadrada: ',calculadora.raizQuadrada(4))
console.log('resto divisão: ',calculadora.restoDivisao(3,2))
console.log('porcentagem: ',calculadora.porcentagem(25,50))
console.log('fatorial: ',calculadora.fatorial(5))
console.log('potencia: ',calculadora.potencia(2, 3))
}


interface Voo {
  voar(): void
}

interface Nadar {
  nadar(): void
}

class Pato implements Voo {
  voar() {
      console.log("Pato voa!")
  }
}

class Peixe implements Nadar {
  nadar() {
      console.log("Peixe nada!")
  }
}
const capitulo13_exercicio7= (): void => {
console.log('13.7 Moderado: Múltiplas Interfaces. Defina interfaces Voo e Nadar para representar comportamentos de animais. Implemente essas interfaces em classes como Pato e Peixe.')

const pato = new Pato()
pato.voar()

const peixe = new Peixe()
peixe.nadar()
}


interface Veiculo {
  modelo: string
  ano: number
}

interface Carro extends Veiculo {
  marca: string
  cor: string
}
const capitulo13_exercicio8 = (): void =>{
  console.log('13.8 Moderado: Extensão de Interfaces. Crie uma interface Veiculo com propriedades como modelo e ano. Em seguida, crie uma interface  Carro que estenda a interface Veiculo e adicione propriedades específicas de carros.')

const meuCarro: Carro = {
  modelo: "Sedan",
  ano: 2022,
  marca: "Toyota",
  cor: "Prata"
};

console.log("Meu carro:", meuCarro)
}

interface Dicionario {
  [key: string]: string
}
const dicionario = {
  catual: 'juiz criminal ou governador da cidade.',
  cadeira: 'Assento dotado de encosto, geralmente com quatro pernas, com ou sem braços, para uma só pessoa.',
  aselho: 'Pequeno crustáceo isópode de água doce.',
  ftalato: 'sal do ácido ftálico',
  praca: 'Lugar largo e espaçoso, ordinariamente rodeado de edifícios.'
}

const capitulo13_exercicio9 = (): void => {
  console.log('capitulo 13.9 Moderado: Index Signatures. Defina uma interface chamada Dicionario que utilize index signatures para representar um dicionário com chaves e valores de tipos específicos.')
console.log(dicionario['catual'])
const dicionario_daora: Dicionario = dicionario
Object.keys(dicionario_daora).forEach((palavra: string) => {
  console.log(`${palavra}: ${dicionario_daora[palavra]}`)
})
}

interface IProduto {
  preco: number
  nome: string
}
class Produto implements IProduto {
 readonly nome = 'caixa de som'
 readonly preco = 100
}
const capitulo13_exercicio10= (): void => {
  console.log('13.10 Moderado: Readonly Properties. Adicione propriedades readonly à interface Produto para representar informações que não devem ser modificadas após a criação do objeto.')
const produto: Produto = new Produto()
console.log(produto.nome, produto.preco)
}

interface ComponenteVisual{
  definecor(cor: string): void
  definetamanho(altura: number, largura: number): void
}

class Butao implements ComponenteVisual{
  cor: string = ''
  altura: number = 0
  largura: number = 0

  definecor = (cor: string) => {
      this.cor = cor
  }

  definetamanho = (altura: number, largura: number) => {
      this.altura = altura
      this.largura= largura
  }
  
  constructor(altura: number, largura: number, cor: string) {
      this.altura = altura
      this.largura = largura
      this.cor = cor
  }
}

class CaixaTexto implements ComponenteVisual{
  cor: string = ''
  altura: number = 0
  largura: number = 0

  definecor = (cor: string) => {
      this.cor = cor
  }

  definetamanho = (altura: number, largura: number) => {
      this.altura = altura
      this.largura= largura
  }
  
  constructor(altura: number, largura: number, cor: string) {
      this.altura = altura
      this.largura = largura
      this.cor = cor
  }
}
const capitulo13_exercicio11 = () =>{
  const botao = new Butao(1, 2, 'laranga')
  botao.definetamanho(7, 7)
  botao.definecor('azulanga')
  console.log('butão: ',botao.cor, botao.largura, botao.altura)
  const caixaTexto = new CaixaTexto(1, 2, 'zul')
  caixaTexto.definetamanho(3, 8)
  caixaTexto.definecor('branca')
  console.log('caixinha de texto: ',caixaTexto.cor, caixaTexto.largura, caixaTexto.altura)
}
interface Envio{
  dataEntrega: Date
  nomePessoaEnvio: string
  localEntrega: string
}
interface Rastreio{
  codigoRastreio: string
  localizacao: string
  status: Status
}
enum Status{
      Em_Transito,
      Aguardando_Retirada,
      Entregue
  }
interface Pacote extends Envio, Rastreio {
  peso: number
  altura: number
  largura: number
  comprimento: number
  descricao: string
}
const capitulo13_exercicio12 = (): void => {
const pacote: Pacote = {
  altura: 7,
  largura: 4,
  comprimento: 5,
  dataEntrega: new Date(2024, 5, 1),
  codigoRastreio: '7Xf24BR',
  peso: 84,
  descricao: 'esse produto é daora',
  status: Status.Aguardando_Retirada,
  localizacao: 'Paraguai',
  localEntrega: 'Canada',
  nomePessoaEnvio: 'Ratinho Jr.'

}
console.log(pacote)
}
interface Usuario1 {
  idadeUs: number
  nomeUs: string
  emailUs: string
  senhaUs: string
}
interface Produto1 {
  nomeProduto: string
  precoProduto: number
  qntdEstoque: number
}
function inserirUsuario(usuario: Usuario1){
  console.log(`inserindo ${usuario.nomeUs} no banco de dados`)
}
function atualizarProduto(produto: Produto1){
  console.log(`atualizando o produto: ${produto.nomeProduto} no banco de dados`)
}
const capitulo13_exercicio14 = (): void => {
  const usuario1: Usuario1 = {
      idadeUs: 18,
      nomeUs: "Jorge",
      emailUs: "Jorgin123@gmail.com",
      senhaUs: "@j0Rg3"
  }
  inserirUsuario(usuario1)


  const produto1: Produto1 = {
      nomeProduto: "caixa",
      precoProduto: 5.00,
      qntdEstoque: 12
  }
  atualizarProduto(produto1)
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const main = (): void => {
  const capitulo1: Capitulo1 = new Capitulo1()
  capitulo1.exercicio1()
  capitulo1.exercicio2('param')
  capitulo1.exercicio3(1, 10)
  capitulo1.exercicio4('palavra')
  console.log(capitulo1.exercicio5(1, 100))
  capitulo1.exercicio6(3)
  capitulo1.exercicio7([12, 24, 65, 4])
  capitulo1.exercicio8('asa')
  capitulo1.exercicio9(22)




  const capitulo2: Capitulo2 = new Capitulo2()
  capitulo2.exercicio1()
  capitulo2.exercicio2()
  capitulo2.exercicio3()
  capitulo2.exercicio4()
  capitulo2.exercicio5()
  capitulo2.exercicio6(['asc'])
  capitulo2.exercicio7()
  capitulo2.exercicio8()
  console.log(capitulo2.exercicio9(1))



  const capitulo3: Capitulo3 = new Capitulo3()
  capitulo3.exercicio1([1, 2, 3])
  capitulo3.exercicio2([1, 2, 3])
  capitulo3.exercicio3([1, 1034, 3, 4, 5, 85])
  capitulo3.exercicio4([1, 3, 4, 2, 7, 2, 4])
  capitulo3.exercicio5([1, 3, 4, 2, 7])
  capitulo3.exercicio6([1, 3, 4, 2, 7])
  capitulo3.exercicio7([1, 3, 4, 2, 7], [8, 12, 18, 24,])
  const maiorSub = capitulo3.exercicio8([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  console.log(maiorSub)



  const capitulo4: Capitulo4 = new Capitulo4()
 capitulo4.exercicio1(12, 2)
 capitulo4.exercicio2(1)
 capitulo4.exercicio3(5)
 capitulo4.exercicio4([1, 7, 9, 12])
 capitulo4.exercicio5('hexagono')
 capitulo4.exercicio6('a torre da derrota')
 capitulo4.exercicio7(['a', 'adfs', 'asr'])
   const array: number[] = [1, 2, 3,4,5,6,7,8,9,10]
   const alvo: number = 7
   const resultado: Resultado =capitulo4.exercicio8(alvo, array)
   console.log(resultado)


  const capitulo5: Capitulo5 = new Capitulo5()
  capitulo5.exercicio1()
  capitulo5.exercicio2()
  capitulo5.exercicio3()
  capitulo5.exercicio4()
  capitulo5.exercicio5()
  capitulo5.exercicio6()
  capitulo5.exercicio7()
  capitulo5.exercicio8()


  const capitulo6: Capitulo6 = new Capitulo6()
  capitulo6.exercicio1('Hello, ', 'World!')
  capitulo6.exercicio2('alegre', 'mente')
  capitulo6.exercicio3('     asdasd     ')
  capitulo6.exercicio4('banana', 'a', 'o')
  capitulo6.exercicio5('Eu estou aqui')
  capitulo6.exercicio6('eu estou aqui')
  capitulo6.exercicio7('Ola, mundo!')
  capitulo6.exercicio8()




const capitulo7: Capitulo7 = new Capitulo7()
  capitulo7.exercicio1()
  capitulo7.exercicio2()
  capitulo7.exercicio3()
  const livros: Livro[] = [
    {
    titulo: 'unicornios, onde vivem?',
    autor: 'Jeffinho',
    anoPublicacao:2022
    },
    {
    titulo: 'O Silêncio nas Estrelas',
    autor: 'Renata Almeida',
    anoPublicacao: 2024
    }
]
  capitulo7.exercicio4(livros)
  capitulo7.exercicio5()
  capitulo7.exercicio6()
  capitulo7.exercicio7()
   capitulo7.exercicio8(curso1)


  // capitulo8_exercicio1()
  // capitulo8_exercicio2()
  // capitulo8_exercicio3()
  // let novo_produto: Produto = capitulo8_exercicio4(produto1, produto2)
  // console.log(novo_produto)
  
  //capitulo8_exercicio5()
  // let evento1: Evento = {
  //   titulo: 'Typescript',
  //   data: new Date('2024-02-19 13:30:00'),
  //   palestrantes: ['Jeffin', 'Jorgin']

  // }
  // let evento2: Evento = {
  //   titulo: 'Códigos',
  //   data: new Date('2024-02-24 14:30:00'),
  //   palestrantes: ['Joao', 'Pedro']
  // }
  // const novo_evento: Evento = capitulo8_exercicio6(evento1, evento2)
  // console.log(novo_evento)
  

     //capitulo8_exercicio7()
  //   let transacao1: Transacao_banc = {
  //     tipo: 'Retirada de Dinheiro',
  //     valor: 'R$20.00',
  //     data: new Date('2024-02-19 13:30:00')
  // } 

  //   let transacao2: Transacao_banc = {
  //     tipo: 'Depósito em Dinheiro',
  //     valor: 'R$40.00',
  //     data: new Date('2024-02-19 14:30:00')
  // } 
  // const novoSaldo = capitulo8_exercicio8(transacao1, transacao2)
  // console.log(novoSaldo)




  // capitulo9_exercicio1()
  // capitulo9_exercicio2()
  // capitulo9_exercicio3()
  // capitulo9_exercicio4()
  // capitulo9_exercicio5(['abc', 'dfg', 'hij'])
  // capitulo9_exercicio6()
  // capitulo9_exercicio7([1, 2, 3, 4, 5])

  // console.log('capitulo 9.8 Moderado: Desenvolva um loop que encontre o número primo mais próximo de 100') // exercicio 8
  // const numeroAlvo = 100;
  // const primoMaisProximo = encontrarPrimoProximo(numeroAlvo)
  // console.log(`Alvo: ${numeroAlvo}, mais proximo é: ${primoMaisProximo}.`)

  // capitulo9_exercicio9(10)
  // capitulo9_exercicio10()
  // capitulo9_exercicio11('asd dsa asd')
  // capitulo9_exercicio12()
  // console.log('capitulo 9.13 Difícil: Escreva um loop que encontre o maior número primo menor que 1000')
  // const numeroAlvo = 1000
  // const primoMaisProximo = encontrarPrimoProximod(numeroAlvo)
  // console.log(`Maior primo menos que ${numeroAlvo}: ${primoMaisProximo}.`)

  // capitulo9_exercicio14()
  // capitulo9_exercicio15(20)

  



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
  //  capitulo10_exercicio9('listen', 'silent')
  // capitulo10_exercicio10(16)
  // console.log(capitulo10_exercicio11(2))
  // capitulo10_exercicio12('Leyra123@')
  // capitulo10_exercicio13('asa')
  // capitulo10_exercicio14(5, 6, 7)






  // capitulo12_exercicio1()
  // capitulo12_exercicio2()
  // capitulo12_exercicio3()
  // capitulo12_exercicio4()
  // capitulo12_exercicio5()
  // capitulo12_exercicio6()
  // capitulo12_exercicio7()
  // capitulo12_exercicio8()






  // capitulo13_exercicio1()
  // const cliente1 = new Cliente("João", "jão123@gmail.com", 28, 500.0)
  // cliente1.capitulo13_exercicio2(200)
  // cliente1.capitulo13_exercicio2(100)
  // cliente1.capitulo13_exercicio2(400)
  // capitulo13_exercicio3()
  // capitulo13_exercicio4()
  // const cliente1 = new Cliente1("João", "jão123@gmail.com", 28, 500.0)
  // cliente1.capitulo13_exercicio5(200)
  // capitulo13_exercicio6()
  // capitulo13_exercicio7()
  // capitulo13_exercicio8()
  // capitulo13_exercicio9()
  // capitulo13_exercicio10()
  // capitulo13_exercicio11()
  // capitulo13_exercicio12()
  // capitulo13_exercicio14()

}
main()
