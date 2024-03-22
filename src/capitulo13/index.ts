export interface Usuario {
  nome: string
  email: string
  idade: number
  telefone? : string
}
export interface Animal {
  nome: string
  barulhento: boolean
}
export interface Ave extends Animal {
  penas: boolean
  bico: boolean
  voa: boolean
}

export interface Papagaio extends Ave{
  fala: boolean
}

export class Cliente implements Usuario {
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

  exercicio2(valor: number): void {
    console.log('13.2 Fácil: Implementação de Interface.Crie uma classe chamada Cliente que implementa a interface Usuario. Adicione métodos e propriedades específicos da classe.')

    if (valor <= this.saldo) {
      console.log(`${this.nome} fez uma compra de R$${valor.toFixed(2)}`)
      this.saldo = this.saldo - valor
    } else {
      console.log(`${this.nome} não possui saldo suficiente para realizar a compra.`)
    }
  }
}

export interface FormaGeometrica {
  calcularArea():  number
  calcularPerimetro(): number
}

export class Retangulo implements FormaGeometrica {
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

export class Cliente1 implements Usuario {
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
  

   exercicio5(valor: number): void {
    console.log('capitulo 13.5 Fácil: Parâmetros Opcionais.Adicione um parâmetro opcional à interface Usuario chamado telefone. Atualize a classe Clientepara incluir ou não esse parâmetro.')
    if (valor <= this.saldo) {
      console.log(`${this.nome} fez uma compra de R$${valor.toFixed(2)}`)
      this.saldo = this.saldo - valor
    } else {
      console.log(`${this.nome} não possui saldo suficiente para realizar a compra.`)
    }
  
  }
}

export interface OperacaoMatematica {
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

export class Calculadora implements OperacaoMatematica { 
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

export interface Voo {
  voar(): void
}

export interface Nadar {
  nadar(): void
}

export class Pato implements Voo {
  voar() {
      console.log("Pato voa!")
  }
}

export class Peixe implements Nadar {
  nadar() {
      console.log("Peixe nada!")
  }
}

export interface Veiculo {
  modelo: string
  ano: number
}

export interface Carro extends Veiculo {
  marca: string
  cor: string
}

export interface Dicionario {
  [key: string]: string
}

export  interface IProduto {
  preco: number
  nome: string
}
export class Produto implements IProduto {
 readonly nome = 'caixa de som'
 readonly preco = 100
}


export interface ComponenteVisual{
  definecor(cor: string): void
  definetamanho(altura: number, largura: number): void
}

export class Butao implements ComponenteVisual{
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

export class CaixaTexto implements ComponenteVisual{
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

export interface Envio{
  dataEntrega: Date
  nomePessoaEnvio: string
  localEntrega: string
}
export interface Rastreio{
  codigoRastreio: string
  localizacao: string
  status: Status
}

export enum Status{
  Em_Transito,
  Aguardando_Retirada,
  Entregue
}
export interface Pacote extends Envio, Rastreio {
peso: number
altura: number
largura: number
comprimento: number
descricao: string
}

export interface Usuario1 {
  idadeUs: number
  nomeUs: string
  emailUs: string
  senhaUs: string
}
export interface Produto1 {
  nomeProduto: string
  precoProduto: number
  qntdEstoque: number
}

export function inserirUsuario(usuario: Usuario1){
  console.log(`inserindo ${usuario.nomeUs} no banco de dados`)
}
export function atualizarProduto(produto: Produto1){
  console.log(`atualizando o produto: ${produto.nomeProduto} no banco de dados`)
}
export default class Capitulo13{
    exercicio1 = (): void => {
        console.log('13.1 Fácil: Criando uma Interface Simples   Crie uma interface chamada Usuario com propriedades como nome, email e idade.')
      }
      

      exercicio3 = (): void => {
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
      

      
      exercicio4 = (): void => {
        console.log(' capitulo 13.4 Fácil: Métodos em Interfaces. Defina uma interface FormaGeometrica com métodos como calcularArea e calcularPerimetro. Implemente essa interface em classes como Circulo e Retangulo')
      const retangulo = new Retangulo(5, 2) 
      console.log(retangulo.calcularArea(), retangulo.calcularPerimetro())
      }
      
      
      
      
       cliente1: Cliente1 = new Cliente1(
        'Jão',
        'Jão123@gmail.com',
        23,
        1000
      
      )
      
      
      
      exercicio6 = (): void => {
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
      
      
      
      exercicio7= (): void => {
      console.log('13.7 Moderado: Múltiplas Interfaces. Defina interfaces Voo e Nadar para representar comportamentos de animais. Implemente essas interfaces em classes como Pato e Peixe.')
      
      const pato = new Pato()
      pato.voar()
      
      const peixe = new Peixe()
      peixe.nadar()
      }
      
      
      
      exercicio8 = (): void =>{
        console.log('13.8 Moderado: Extensão de Interfaces. Crie uma interface Veiculo com propriedades como modelo e ano. Em seguida, crie uma interface  Carro que estenda a interface Veiculo e adicione propriedades específicas de carros.')
      
      const meuCarro: Carro = {
        modelo: "Sedan",
        ano: 2022,
        marca: "Toyota",
        cor: "Prata"
      };
      
      console.log("Meu carro:", meuCarro)
      }
      
      
       dicionario = {
        catual: 'juiz criminal ou governador da cidade.',
        cadeira: 'Assento dotado de encosto, geralmente com quatro pernas, com ou sem braços, para uma só pessoa.',
        aselho: 'Pequeno crustáceo isópode de água doce.',
        ftalato: 'sal do ácido ftálico',
        praca: 'Lugar largo e espaçoso, ordinariamente rodeado de edifícios.'
      }
      
      exercicio9 = (): void => {
        console.log('13.9 Moderado: Index Signatures. Defina uma interface chamada Dicionario que utilize index signatures para representar um dicionário com chaves e valores de tipos específicos')
      console.log(this.dicionario['catual'])
      const dicionario_daora: Dicionario = this.dicionario
      Object.keys(dicionario_daora).forEach((palavra: string) => {
        console.log(`${palavra}: ${dicionario_daora[palavra]}`)
      })
      }
      
     
      exercicio10= (): void => {
        console.log('13.10 Moderado: Readonly Properties. Adicione propriedades readonly à interface Produto para representar informações que não devem ser modificadas após a criação do objeto.')
      const produto: Produto = new Produto()
      console.log(produto.nome, produto.preco)
      }
      
      
      exercicio11 = () =>{
        console.log('13.11 Difícil: Crie uma interface Interface para Componentes VisuaisCrie uma interface ComponenteVisual que represente propriedades comuns a componentes visuais, como cor e tamanho. Implemente essa interface em classes como Botao e CaixaTexto')
        const botao = new Butao(1, 2, 'laranga')
        botao.definetamanho(7, 7)
        botao.definecor('azulanga')
        console.log('butão: ',botao.cor, botao.largura, botao.altura)
        const caixaTexto = new CaixaTexto(1, 2, 'zul')
        caixaTexto.definetamanho(3, 8)
        caixaTexto.definecor('branca')
        console.log('caixinha de texto: ',caixaTexto.cor, caixaTexto.largura, caixaTexto.altura)
      }
      
      
      exercicio12 = (): void => {
        console.log('13.12 Difícil: Extensão de Múltiplas Interfaces. Defina interfaces Envio e Rastreio para representar informações sobre o envio e rastreio de um pacote. Crie uma interface Pacote que estenda ambas as interfaces')
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
      
      
      exercicio14 = (): void => {
        console.log('13.14 Difícil: Interfaces para Banco de Dados. Desenvolva interfaces que representem entidades em um banco de dados (por exemplo, Usuario,Produto). Utilize essas interfaces em funções que interagem com o banco de dados.')
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
}