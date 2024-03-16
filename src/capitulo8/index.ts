
export type Usuario = {
    usuario: string,
    email: string
  }

export type transacao_banc = {
    tipo: string,
    valor: string,
    data: string|Date
  } 

export type Evento = {
    titulo: string,
    data: string|Date,
    palestrantes: string[]
  } 

export type TProdutoCapitulo8Ex4 = {
    nome: string,
    descricao: string,
    preco: string
  }

export type ProdutoEx3 = {
    nome: string,
    descricao: string,
    preco: string
  }

export default class Capitulo8{
    exercicio1 = (): void => {
        console.log('capitulo 8.1 Fácil: Declare um tipo para representar um usuário, com nome de usuário e e-mail')
          const usuario: Usuario = {
            email: 'asd@gmail.com',
            usuario: 'Aryel'
          }
          console.log(usuario)
      }
      
      exercicio2 = (): void => {
        console.log('capitulo 8.2 Fácil: Crie uma função que combine dois objetos do tipo usuário.')
        type Usuario = {
          nome: string,
          email: string
        }
        const usuario: Usuario = {
          nome: 'Aryel',
          email: 'bolinha123@gmail.com'
      }
        console.log(`nome: ${usuario.nome} , email: ${usuario.email}`) 
      }
      
      
      exercicio3 = (): void => {
      console.log('capitulo 8.3 Fácil: Defina um tipo para representar um produto, com nome, preço e descrição.')
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
         console.log(produto1, produto2)
      }
      
      
      exercicio4 = (produto1: TProdutoCapitulo8Ex4, produto2: TProdutoCapitulo8Ex4): TProdutoCapitulo8Ex4 => {
        console.log('capitulo 8.4 Fácil: Escreva uma função que aceite dois produtos e retorne um novo produto combinado')
          const preco: string = 'R$' + (Number(produto1.preco.replace('R$', '')) + Number(produto2.preco.replace('R$', ''))).toString()
        const novo_produto: TProdutoCapitulo8Ex4 = {
      
          nome: `kit ${produto1.nome} e ${produto2.nome}`,
          descricao: `${produto1.descricao}, ${produto2.descricao}`,
          preco 
        }
          return novo_produto
        }
      
      exercicio5 = (): void => {
          console.log('capitulo 8.5 Moderado: Declare um tipo para representar um evento, contendo título, data e um array de palestrantes')
          
        }
        
          
        exercicio6 = (evento1: Evento, evento2: Evento): Evento => {
          console.log('capitulo 8.6 Moderado: Crie uma função que aceite dois eventos e retorne um novo evento combinado')
          let array: string[] = []
          array = array.concat(evento1.palestrantes, evento2.palestrantes)
          const novo_evento: Evento = {
            titulo: `${evento1.titulo} E ${evento2.titulo}`,
            data: `datas: ${evento1.data.toLocaleString('pt-br')} E ${evento2.data.toLocaleString('pt-br')}`,
            palestrantes: array
          }
          return novo_evento
        }
      
        
      
      exercicio7 = (): void => {
        console.log('capitulo 8.7 Moderado: Defina um tipo para representar uma transação bancária, com tipo, valor e data')
      }
      
      
      
      exercicio8 = (transacao1: transacao_banc, transacao2: transacao_banc): transacao_banc => {
      console.log('capitulo 8.8 Difícil: Escreva uma função que aceite duas transações bancárias e retorne um novo objeto com o saldo resultante')
        const novo_saldo: transacao_banc = {
        tipo: 'Novo Saldo',
        valor: (parseFloat(transacao2.valor.replace('R$', '')) - parseFloat(transacao1.valor.replace('R$', ''))).toFixed(2).toString(),
        data: new Date()
      }
      return novo_saldo
      }
}