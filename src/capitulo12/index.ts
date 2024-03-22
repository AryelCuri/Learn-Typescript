export class Carro implements Veiculo {
  constructor(
      public modelo: string,
      public ano: number,
      public marca: string,
      public cor: string
  ) {}
}

export class Moto implements Veiculo {
  constructor(
      public modelo: string,
      public ano: number,
      public marca: string,
      public cilindradas: number
  ) {}
}

export class Pessoa5 {
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

export class Pessoa4 {
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

export class Alunoo extends Pessoa4 {
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

export class Pessoa2 {
  constructor(public nome: string, public idade: number) {}

  informacoes(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
  }
}

export class Aluno extends Pessoa2 {
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

export class Pessoa1 {
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
export interface OperacoesMatematica {
  soma( num: number, num1: number): number
  subtracao(num: number, num1: number): number
  multiplicacao(num: number, num1: number): number
  divisao(num: number, num1: number): number
}

export class Calculadora1 implements OperacoesMatematica { 
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
export class Pessoa3 {
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
export class Endereco {
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

export interface Veiculo {
  modelo: string
  ano: number
}
export default class Capitulo12 {
    
      
      exercicio1 = (): void => {
          console.log('12.1 Fácil: Criando uma Classe Básica. Crie uma classe simples chamada Pessoa com propriedades como nome, idade, e um método para imprimir os detalhes da pessoa.')
      const pessoa1 = new Pessoa1("Fulano", 25)
      pessoa1.imprimirDetalhes()
      }
      
      
      exercicio2 = (): void => {
        console.log('12.2 Fácil: Adicionando Métodos. Expanda a classe Pessoa adicionando métodos para aumentar a idade da pessoa e alterar onome.')
      const pessoa1 = new Pessoa1('Jão1', 25)
      pessoa1.imprimirDetalhes()
      pessoa1.aumentarIdade(3)
      pessoa1.alterarNome('Jão2')
      pessoa1.imprimirDetalhes()
      }
      
      
      exercicio3 = (): void => {
        console.log('12.3 Fácil: Herança. Crie uma classe Aluno que herde da classe Pessoa. Adicione propriedades específicas do aluno,como matricula e métodos relacionados.')
      const aluno1 = new Aluno("João", 20, 12345)
      aluno1.informacoes()
      aluno1.estudar()
      }
      
      
      
      exercicio4 = (): void => {
        console.log('12.4 Fácil: Sobrescrita de Método. Na classe Aluno, sobrescreva o método de impressão da classe Pessoa para incluir informações específicas do aluno.')
      const aluno1 = new Alunoo("João", 20, 12345)
      aluno1.exibirInformacoes()
      aluno1.estudar()
      }
      
      
      exercicio5 = (): void => {
        console.log('12.5 Fácil: Encapsulamento. Modifique a classe Pessoa para tornar suas propriedades privadas e adicione métodos de acesso(getters e setters).')
      const pessoa1 = new Pessoa5("Maria", 25)
      console.log(pessoa1.nome)
      console.log(pessoa1.idade)
      
      pessoa1.nome = "Ana"
      pessoa1.idade = 30
      
      pessoa1.exibirInformacoes()
      }
      
      
      exercicio6 = (): void => {
        console.log('12.6 Moderado: Classes Estáticas. Crie uma classe estática Calculadora com métodos estáticos para realizar operações matemáticas simples, como adição, subtração, multiplicação e divisão')
      const calculadora1: Calculadora1 = new Calculadora1()
      console.log('soma: ',calculadora1.soma(1, 1))
      console.log('subtracao: ',calculadora1.subtracao(1, 1))
      console.log('multiplicacao: ',calculadora1.multiplicacao(2, 2))
      console.log('divisão: ',calculadora1.divisao(2, 2))
      }
      
      
      
      
      exercicio7 = (): void => {
      console.log('12.7 Moderado: Composição. Crie uma classe Endereco e uma classe Pessoa que possui uma instância da classe Endereco. Adicione métodos para imprimir os detalhes da pessoa e do endereço.')
      const endereco = new Endereco('Rua Principal', 'Cidade Exemplo', 'Estado Exemplo', '12345-678');
      const pessoa = new Pessoa3('João', 30, endereco);
      
      pessoa.imprimirDetalhesPessoa();
      }
      
      
      
      
      exercicio8 = (): void => {
        console.log('12.8 Moderado: Interface. Defina uma interface Veiculo com propriedades comuns a veículos (por exemplo, modelo, ano) eimplemente essa interface em classes como Carro e Moto.')
      const carro = new Carro('Fusca', 1972, 'Volkswagen', 'Azul')
      const moto = new Moto('CG 125', 2005, 'Honda', 125)
      
      console.log(carro)
      console.log(moto)
      }
}