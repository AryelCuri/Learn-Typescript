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

const capitulo1_exercicio9 = (maximo: number): void => {
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

const capitulo2_exercicio8 = (): void => {
  console.log('capitulo 2.8 Difícil: Utilize tipos condicionais para definir um tipo com base em outra variável')
  type TetoAberto = {conversivel: true}
  type TetoFechado = {conversivel: false}
  const carroNovo: TetoAberto | TetoFechado = {conversivel: true}
  console.log('carroNovo =', carroNovo)
}

const capitulo2_exercicio9 = (numero: number): number => {
  console.log('capitulo 2.9 Difícil: Declare uma função com tipos de parâmetros e retorno explícitos')
  return numero
}

//-----------------------------------------------------------------------------------------------------


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

const capitulo3_exercicio4 = (array: number[]): void => {
  console.log('capitulo 3.4 Fácil: Crie um novo array removendo os elementos duplicados de outro array')
  console.log(new Set(array))
}  

const capitulo3_exercicio5 = (array: number[]): void => {
  console.log('capitulo 3.5 Moderado: Desenvolva uma função que ordene um array de números')
  console.log(array.sort())
}

const capitulo3_exercicio6 = (array: number[]): void => {
  console.log('capitulo 3.6 Moderado: Crie uma função que filtre os números pares de um array.')
  console.log(array.filter((valor: number) => valor % 2 === 0))
}

const capitulo3_exercicio7 = (array: number[], array2: number[]): void => {
  console.log('capitulo 3.7 Moderado: Implemente uma função que concatene dois arrays')
  console.log(array.concat(array2))
}

const capitulo3_exercicio8 = (array: number[]): number[] => {
  console.log('capitulo 3.8 Difícil: Escreva uma função que encontre a sublista contígua de maior soma em um array'); 
  let maximoAgora = array[0]
  let maximo = array[0]
  let comeco = 0
  let final = 0

  for (let i = 1; i < array.length; i++) {
      maximoAgora = Math.max(array[i], maximoAgora + array[i])
      if (maximoAgora === array[i]) {
              comeco = i
      }

      if (maximoAgora > maximo) {
              maximo = maximoAgora
              final = i
      }
    }
return array.slice(comeco, final + 1)
}
//-----------------------------------------------------------------------------------------------------


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

const capitulo4_exercicio5 = (palavra: string): void => {
    console.log('capitulo 4.5 Moderado: Desenvolva uma função que receba uma string e retorne a quantidade de vogais')
    let vogais: number = 0
    palavra.split('').forEach((valor: string) => {
        if(valor === 'a' ||valor === 'e' ||valor === 'i' ||valor === 'o' ||valor === 'u' ||valor === 'A' ||valor === 'E' ||valor === 'I' ||valor === 'O' ||valor === 'U')
        vogais = vogais + 1
    })
    console.log(vogais)
}   

const capitulo4_exercicio6 = (palavra: string): void => {
  console.log('capitulo 4.6 Moderado: Implemente uma função que verifique se uma palavra é um palíndromo.')
  if(palavra.replace(/\s/g, '').split('').reverse().join('') === palavra.replace(/\s/g, '')){
      console.log('palíndromo')
  }else console.log('não é palíndromo')

}

const capitulo4_exercicio7 = (array: string[] = []): void => {
  console.log('capitulo 4.7 Moderado: Crie uma função que receba um array de strings e retorne o maior comprimento')
  let maior: number = 0
  array.forEach((valor: string) => {
      if(valor.length > maior){
          maior = valor.length
      }
  })
  console.log(maior)
}   

type Resultado = {
  valor: number,
  index: number
}
const capitulo4_exercicio8 = (alvo: number, array: number[]): Resultado => {
  console.log('capitulo 4.8 Difícil: Escreva uma função que realize a busca binária em um array ordenado.')

  let inicio: number = 0
  let fim: number = array.length - 1


  while(inicio <= fim){
    const meio: number = Math.floor((inicio + fim)/2)

    if(array[meio] === alvo){
      return {
        valor: array[meio],
        index: meio
      }
    }else if(array[meio] < alvo){
      inicio = meio + 1
    }else{
      fim = meio - 1
    }
  }
  return {
    valor: -1,
    index: -1
  }
}

//-----------------------------------------------------------------------------------------------------


const capitulo5_exercicio1 = (): void => {
  console.log('capitulo 5.1 Fácil: Declare um enum para representar os dias da semana')
  enum DiasDaSemana {
  Domingo = 1,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}
console.log(DiasDaSemana)
}   

const capitulo5_exercicio2 = (): void => {
  console.log('capitulo 5.2 Fácil: Utilize um enum para representar os meses do ano')
  
enum MesesDoAno {
  Jan = 1,
  Fev,
  Mar,
  Abr,
  Mai,
  Jun,
  Jul,
  Ago,
  Set,
  Out,
  Nov,
  Dez

}
  console.log(MesesDoAno)
} 

const capitulo5_exercicio3 = (): void => {
  console.log('capitulo 5.3 Fácil: Crie um enum para os pontos cardeais (norte, sul, leste, oeste)')
  
enum PontosCardeais {
  Norte = 'Norte',
  Nordeste = 'Nordeste',
  Leste = 'Leste',
  Sudeste = 'Sudeste',
  Sul = 'Sul',
  Sudoeste = 'Sudoeste',
  Oeste = 'Oeste',
  Noroeste ='Noroeste'
 

}
console.log(PontosCardeais)
}   

const capitulo5_exercicio4 = (): void => {
  console.log('capitulo 5.4 Fácil: Defina um enum para representar as estações do ano')
  
enum Estacoes {
  Primavera = 'plantas crescem',
  Outono = 'folhas caem',
  Inverno = 'frio',
  Verao = 'calor'
 

}
console.log(Estacoes)
}   

const capitulo5_exercicio5 = (): void => {
  console.log('capitulo 5.5 Moderado: Utilize um enum para representar os tipos sanguíneos (A, B, AB, O)')
enum TipoSanguineo {
  A = 'A',
  B = 'B',
  AB = 'AB',
  O = 'O'
}
console.log(TipoSanguineo)
}

const capitulo5_exercicio6 = (): void => {
  console.log('capitulo 5.6 Moderado: Declare um enum para os planetas do sistema solar.')
enum Planetas {
  Saturno = '6°',
  Urano = '7°',
  Netuno = '8°',
  Mercurio ='1°',
  Venus = '2°',
  Marte = '4°',
  Terra = '3°',
  Jupter = '5°'
 
}
console.log(Planetas)
}

const capitulo5_exercicio7 = (): void => {
  console.log('capitulo 5.7 Moderado: Crie um enum para os principais tipos de moedas')
enum TipoMoeda {
  DOLAR = 'Dólar = 4.94 R$',
  EURO = 'Euro = 5.37 R$',
  LIBRA = 'Libra = 6.27 R$',
  IENE = 'Iene = 0.0333',
}
  console.log(TipoMoeda)
  console.log(TipoMoeda.DOLAR)
}

const capitulo5_exercicio8 = (): void => {
  console.log('capitulo 5.8 Difícil: Desenvolva um enum para as peças de xadrez')
enum Tabuleiro {
  WK = 'White King',
  WR = 'White Rook',
  WQ = 'White Queen',
  WB = 'White Bishop',
  WN ='White Knight',
  WP = 'White Pawn',
  BK = 'Black King',
  BR = 'Black Rook',
  BQ = 'Black Queen',
  BB = 'Black Bishop',
  BN = 'Black Knight',
  BP = 'Black Pawn'
}
  console.log(Tabuleiro)
  console.log(Tabuleiro.WN)
}


//-----------------------------------------------------------------------------------------------------

const capitulo6_exercicio1 = (string1: string, string2: string): void => {
  console.log('capitulo 6.1 Fácil: Crie uma função que concatene duas strings')
  let resultado = string1 + string2
  console.log(resultado)
}

const capitulo6_exercicio2 = (palavra: string, sufixo: string): void => {
  console.log('capitulo 6.2 Fácil: Implemente uma função que adicione um sufixo a uma palavra')

  let resultado = palavra + sufixo
  console.log(resultado)
}
const capitulo6_exercicio3 = (frase: string): void => {
  console.log('capitulo 6.3 Fácil: Escreva uma função que remova espaços em branco no início e no final de uma string')
  console.log(frase.trim())
}

const capitulo6_exercicio4 = (palavra: string, letraAntiga: string, letraNova: string): void => {
    console.log('Capítulo 6.4 Fácil: Crie uma função que substitua todas as ocorrências de uma letra por outra em uma string')
console.log(palavra.replaceAll(letraAntiga, letraNova))
}

const capitulo6_exercicio5 = (frase: string): void => {
  console.log('Capítulo 6.5 Moderado: Desenvolva uma função que inverta as palavras em uma frase')
  let array: string[] = frase.split(' ')
  let array2: string[] = []
  array.forEach((valor: string) => {
      array2.push(valor.split('').reverse().join(''))
  })
  console.log(array2.reverse().join(' '))
}

const capitulo6_exercicio6 = (frase: string): void => {
  console.log('Capítulo 6.6 Moderado: Implemente uma função que capitalize a primeira letra de cada palavra em uma string')
  let array: string[] = frase.split(' ')
  let array2: string[] =  []
  array.forEach((valor: string) => {  
      array2.push(valor.charAt(0).toUpperCase() + valor.slice(1)) 
  })
  console.log(array2.join(' '))
}

const capitulo6_exercicio7 =(frase: string): void => {
    console.log('capitulo 6.7 Moderado: Crie uma função que remova caracteres especiais de uma string')
    console.log(frase.replace(/[^\w\s]/gi, ''))
}

const capitulo6_exercicio8 = (): void => {
  console.log('capitulo  6.8 Difícil: Escreva uma função que formate uma data em formato específico')
  let data: Date = new Date(Date.now())
  console.log(data.toLocaleDateString('pt-br'))
  console.log(data.toLocaleTimeString('pt-br'))
  console.log(data.getDay(), data.getDate(), data.getFullYear())
  console.log(`Dia da semana = ${data.getDay()}, Dia do mês = ${data.getDate()}, Mês = ${data.getMonth() + 1}, Ano atual = ${data.getFullYear()}`)
}



//-------------------------------------------------------------------------------------------------------------------------------


const capitulo7_exercicio1 = (): void => {
  console.log('Capítulo 7.1 Fácil: Declare um tipo que represente um endereço, contendo rua, cidade e código postal')
  type Endereco = {
      rua: string
      cidade: string
      codigoPostal: number
  }
  
}

const capitulo7_exercicio2 = (): void => {
  console.log('Capítulo 7.1 Fácil: Declare um tipo que represente um endereço, contendo rua, cidade e código postal')
  type Endereco = {
      rua: string
      cidade: string
      codigoPostal: number
  }
  const enderecoaleatorio: Endereco = {
      rua: 'Souza Naves',
      cidade: 'Cascavel',
      codigoPostal: 85800-0o0
  }
  console.log(enderecoaleatorio)
}

const capitulo7_exercicio3 = (): void => {
  console.log('Capítulo 7.3 Fácil: Defina um tipo para representar um livro, com título, autor e ano de publicação')
  type Livro = {
 titulo: string;
 autor: string;
 anoPublicacao: number;
  }
}

type Livro = {
  titulo: string;
  autor: string;
  anoPublicacao: number;
   }
 const capitulo7_exercicio4 = (livros: Livro[]): void => {
   console.log('Capítulo 7.4 Fácil: Escreva uma função que aceite um array de livros e retorne o livro mais recente');
   let maisRecente: Livro | undefined
   let maiorAno: number = 0
   livros.forEach((livro: Livro) => {
     if (livro.anoPublicacao > maiorAno) {
       maiorAno = livro.anoPublicacao
       maisRecente = livro
     }
   })
   console.log(maisRecente)
 }
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

 const capitulo7_exercicio5 = (): void => {
  console.log('Capítulo 7.5 Moderado: Declare um tipo para representar um carro, contendo modelo, ano e um objeto de proprietario');
    type Carro = {
    modelo: string,
    ano: number
    }
    type Proprietario = {
        carro: Carro,
        nomemotorista: string
    }
    const proprietario: Proprietario = {
        carro: {
            ano: 2001,
            modelo: 'arco-íris'
        },
        nomemotorista: 'jeffin'
    }
    console.log(proprietario)
}

const capitulo7_exercicio6 = (): void => {
  console.log('Capítulo 7.5 Moderado: Declare um tipo para representar um carro, contendo modelo, ano e um objeto de proprietario');
    type Carro = {
    modelo: string,
    ano: number
    }
    type Proprietario = {
        carro: Carro,
        nomemotorista: string
    }
    const proprietario: Proprietario = {
        carro: {
            ano: 2001,
            modelo: 'arco-íris'
        },
        nomemotorista: 'jeffin'
    }
    console.log(proprietario)
}

const capitulo7_exercicio7 = (): void => {
  console.log('Capítulo 7.7 Moderado: Defina um tipo para representar um curso, com nome, instrutor e um array de alunos');
    type Curso = {
        nome: string,
        instrutor: string
        arrayAlunos: string[]
    }
}

type Curso = {
  nome: string,
  instrutor: string
  arrayAlunos: string[]
  notasAlunos: number[]
}

const capitulo7_exercicio8 = (curso: Curso): void => {
console.log('Capítulo 7.7 Moderado: Defina um tipo para representar um curso, com nome, instrutor e um array de alunos');
let notaAlta: number = Math.max(...curso.notasAlunos)
console.log(notaAlta)
}

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

const capitulo8_exercicio3 = (): void => {
  console.log('capitulo 8.3 Fácil: Defina um tipo para representar um produto, com nome, preço e descrição.')
  type Produto = {
    nome: string,
    descricao: string,
    preco: string
  }
  console.log() 
}

type Produto = {
  nome: string,
  descricao: string,
  preco: string
}
const capitulo8_exercicio4 = (produto1: Produto, produto2: Produto): Produto => {
  console.log('capitulo 8.4 Fácil: Escreva uma função que aceite dois produtos e retorne um novo produto combinado')
    const preco: string = 'R$' + (Number(produto1.preco.replace('R$', '')) + Number(produto2.preco.replace('R$', ''))).toString()
  let novo_produto: Produto = {

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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const main = (): void => {

  // capitulo1_exercicio1()
  // capitulo1_exercicio2('param')
  // capitulo1_exercicio3(1, 10)
  // capitulo1_exercicio4('palavra')
  // console.log(capitulo1_exercicio5(1, 100))
  // capitulo1_exercicio6(3)
  // capitulo1_exercicio7([12, 24, 65, 4])
  // capitulo1_exercicio8('asa')
  // capitulo1_exercicio9(22)





  // capitulo2_exercicio1()
  // capitulo2_exercicio2()
  // capitulo2_exercicio3()
  // capitulo2_exercicio4()
  // capitulo2_exercicio5()
  // capitulo2_exercicio6(['asc'])
  // capitulo2_exercicio7()
  // capitulo2_exercicio8()
  // console.log(capitulo2_exercicio9(1))




  // capitulo3_exercicio1([1, 2, 3])
  // capitulo3_exercicio2([1, 2, 3])
  // capitulo3_exercicio3([1, 1034, 3, 4, 5, 85])
  // capitulo3_exercicio4([1, 3, 4, 2, 7, 2, 4])
  // capitulo3_exercicio5([1, 3, 4, 2, 7])
  // capitulo3_exercicio6([1, 3, 4, 2, 7])
  // capitulo3_exercicio7([1, 3, 4, 2, 7], [8, 12, 18, 24,])
  // let maiorSub = capitulo3_exercicio8([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  // console.log(maiorSub)




  // capitulo4_exercicio1(12, 2)
  // capitulo4_exercicio2(1)
  // capitulo4_exercicio3(5)
  // capitulo4_exercicio4([1, 7, 9, 12])
  // capitulo4_exercicio5('hexagono')
  // capitulo4_exercicio6('a torre da derrota')
  // capitulo4_exercicio7(['a', 'adfs', 'asr'])
  //  const array: number[] = [1, 2, 3,4,5,6,7,8,9,10]
  //  const alvo: number = 7
  //  const resultado: Resultado = capitulo4_exercicio8(alvo, array)
  //  console.log(resultado)



  // capitulo5_exercicio1()
  // capitulo5_exercicio2()
  // capitulo5_exercicio3()
  // capitulo5_exercicio4()
  // capitulo5_exercicio5()
  // capitulo5_exercicio6()
  // capitulo5_exercicio7()
  // capitulo5_exercicio8()



  // capitulo6_exercicio1('Hello, ', 'World!')
  // capitulo6_exercicio2('alegre', 'mente')
  // capitulo6_exercicio3('     asdasd     ')
  // capitulo6_exercicio4('banana', 'a', 'o')
  // capitulo6_exercicio5('Eu estou aqui')
  // capitulo6_exercicio6('eu estou aqui')
  // capitulo6_exercicio7('Ola, mundo!')
  // capitulo6_exercicio8()





  // capitulo7_exercicio1()
  // capitulo7_exercicio2()
  // capitulo7_exercicio3()
  // capitulo7_exercicio4(livros)
  // capitulo7_exercicio5()
  // capitulo7_exercicio6()
  // capitulo7_exercicio7()
//   capitulo7_exercicio8({
//     nome: 'cursoBrabo',
//     instrutor: 'jeff',
//     arrayAlunos: ['aryel', 'jorgin', 'joaozin'],
//     notasAlunos: [6, 8, 7.5]
// })


  // capitulo8_exercicio1()
  // capitulo8_exercicio2()
  //capitulo8_exercicio3()
  //   let produto1: Produto = {
//     nome: '3 pinças',
//     descricao: 'esse produto é legal',
//     preco: 'R$15.00'
  //   }
  //   let produto2: Produto = {
//     nome: 'cera de depilação + fita de depilação',
//     descricao: 'esse produto é daora',
//     preco: 'R$100.00'
  // }
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
  

  //   capitulo8_exercicio7()
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


  //capitulo13_exercicio1()
  // const cliente1 = new Cliente("João", "jão123@gmail.com", 28, 500.0)
  // cliente1.capitulo13_exercicio2(200)
  // cliente1.capitulo13_exercicio2(100)
  // cliente1.capitulo13_exercicio2(400)
  //capitulo13_exercicio3()
  //capitulo13_exercicio4()

}
main()