import Capitulo1 from './capitulo1/index';
import Capitulo2 from './capitulo2/index';
import Capitulo3 from './capitulo3/index';
import Capitulo4, { Resultado } from './capitulo4/index';
import Capitulo5 from './capitulo5/index';
import Capitulo6 from './capitulo6/index';
import Capitulo7, { Curso, Livro } from './capitulo7/index';
import Capitulo8, { Evento, ProdutoEx3, TProdutoCapitulo8Ex4, transacao_banc } from './capitulo8/index';
import Capitulo9 from './capitulo9/index';
import Capitulo10 from './capitulo10/index';
import Capitulo12, { Pessoa1, Pessoa2, Pessoa3, Pessoa4, Pessoa5 } from './capitulo12/index';
import Capitulo13 from './capitulo13/index';
import { Animal, Ave, Butao, CaixaTexto, Calculadora, Carro, Cliente, Cliente1, ComponenteVisual, Dicionario, Envio, FormaGeometrica, IProduto, Nadar, OperacaoMatematica, Pacote, Papagaio, Pato, Peixe, Produto, Produto1, Rastreio, Retangulo, Status, Usuario, Usuario1, Veiculo, Voo, atualizarProduto,inserirUsuario } from './capitulo13/index';




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
  const curso: Curso = {
    nome: 'curso daora',
    instrutor: 'Joao',
    arrayAlunos: ['yasmin'],
    notasAlunos: [2]
  }
   capitulo7.exercicio8(curso)


  const capitulo8: Capitulo8 = new Capitulo8()
  capitulo8.exercicio1()
  capitulo8.exercicio2()
  capitulo8.exercicio3()
  const produto1: ProdutoEx3 = {
    nome: '3 pinças',
    descricao: 'esse produto é legal',
    preco: 'R$15.00'
     }
     const produto2: ProdutoEx3 = {
    nome: 'cera de depilação + fita de depilação',
     descricao: 'esse produto é daora',
     preco: 'R$100.00'
     }
  const novo_produto: TProdutoCapitulo8Ex4 = capitulo8.exercicio4(produto1, produto2)
  console.log(novo_produto)
  
  capitulo8.exercicio5()
  const evento1: Evento = {
    titulo: 'Typescript',
    data: new Date('2024-02-19 13:30:00'),
    palestrantes: ['Jeffin', 'Jorgin']

  }
  const evento2: Evento = {
    titulo: 'Códigos',
    data: new Date('2024-02-24 14:30:00'),
    palestrantes: ['Joao', 'Pedro']
  }
  const novo_evento: Evento = capitulo8.exercicio6(evento1, evento2)
  console.log(novo_evento)
  

     capitulo8.exercicio7()
    const transacao1: transacao_banc = {
      tipo: 'Retirada de Dinheiro',
      valor: 'R$20.00',
      data: new Date('2024-02-19 13:30:00')
  } 

    const transacao2: transacao_banc = {
      tipo: 'Depósito em Dinheiro',
      valor: 'R$40.00',
      data: new Date('2024-02-19 14:30:00')
  } 
  const novoSaldo = capitulo8.exercicio8(transacao1, transacao2)
  console.log(novoSaldo)



  const capitulo9: Capitulo9 = new Capitulo9()
  capitulo9.exercicio1()
  capitulo9.exercicio2()
  capitulo9.exercicio3()
  capitulo9.exercicio4()
  capitulo9.exercicio5(['abc', 'dfg', 'hij'])
  capitulo9.exercicio6()
  capitulo9.exercicio7([1, 2, 3, 4, 5])

  console.log('capitulo 9.8 Moderado: Desenvolva um loop que encontre o número primo mais próximo de 100') // exercicio 8
  let numeroAlvo = 100;
  let primoMaisProximo = capitulo9.encontrarPrimoProximo(numeroAlvo)
  console.log(`Alvo: ${numeroAlvo}, mais proximo é: ${primoMaisProximo}.`)

  capitulo9.exercicio9(10)
  capitulo9.exercicio10()
  capitulo9.exercicio11('asd dsa asd')
  capitulo9.exercicio12()
  console.log('capitulo 9.13 Difícil: Escreva um loop que encontre o maior número primo menor que 1000')
  numeroAlvo = 1000
   primoMaisProximo = capitulo9.encontrarPrimoProximod(numeroAlvo)
  console.log(`Maior primo menos que ${numeroAlvo}: ${primoMaisProximo}.`)

  capitulo9.exercicio14()
  capitulo9.exercicio15(20)

  


  const capitulo10: Capitulo10 = new Capitulo10()
  console.log(capitulo10.exercicio1(12))
  console.log(capitulo10.exercicio2(3))
  console.log(capitulo10.exercicio3(''))
  console.log(capitulo10.exercicio4('asd', 'asad'))
  capitulo10.exercicio5(-1)
  capitulo10.exercicio5(0)
  capitulo10.exercicio5(1)
  console.log(capitulo10.exercicio6(400))
  capitulo10.exercicio7(12)
  capitulo10.exercicio8(15)
   capitulo10.exercicio9('listen', 'silent')
  capitulo10.exercicio10(16)
  console.log(capitulo10.exercicio11(2))
  capitulo10.exercicio12('Leyra123@')
  capitulo10.exercicio13('asa')
  capitulo10.exercicio14(5, 6, 7)





  const capitulo12: Capitulo12 = new Capitulo12()
  capitulo12.exercicio1()
  capitulo12.exercicio2()
  capitulo12.exercicio3()
  capitulo12.exercicio4()
  capitulo12.exercicio5()
  capitulo12.exercicio6()
  capitulo12.exercicio7()
  capitulo12.exercicio8()


  

 
  const capitulo13: Capitulo13 = new Capitulo13()
  const cliente1 = new Cliente("João", "joao@example.com", 30, 1000)
  cliente1.exercicio2(500)
  capitulo13.exercicio6()
  capitulo13.exercicio7()
  capitulo13.exercicio8()
  capitulo13.exercicio9()
  capitulo13.exercicio10()
  capitulo13.exercicio11()
  capitulo13.exercicio12()
  capitulo13.exercicio14()

}
main()
