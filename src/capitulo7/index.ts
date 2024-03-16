

export type Endereco = {
    rua: string
    cidade: string
    codigoPostal: number
}

export type Curso = {
    nome: string,
    instrutor: string
    arrayAlunos: string[]
    notasAlunos: number[]
  }

export type Livro = {
    titulo: string;
    autor: string;
    anoPublicacao: number;
     }

export default class Capitulo7{
    exercicio1 = (): void => {
        console.log('Capítulo 7.1 Fácil: Declare um tipo que represente um endereço, contendo rua, cidade e código postal')
        const endereco: Endereco = {
            rua: 'Rua legal',
            cidade: 'Cascavel',
            codigoPostal: 10957823
        }
        console.log(endereco)
      }
      
      exercicio2 = (): void => {
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
      
      exercicio3 = (): void => {
        console.log('Capítulo 7.3 Fácil: Defina um tipo para representar um livro, com título, autor e ano de publicação')
        
      }
      
      
       exercicio4 = (livros: Livro[]): void => {
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
       
     
      
       exercicio5 = (): void => {
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
      
      exercicio6 = (): void => {
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
      
      exercicio7 = (): void => {
        console.log('Capítulo 7.7 Moderado: Defina um tipo para representar um curso, com nome, instrutor e um array de alunos');
          type Curso = {
              nome: string,
              instrutor: string
              arrayAlunos: string[]
          }

          const curso: Curso = {
            nome: 'Programaçao',
            instrutor: 'Jão',
            arrayAlunos: ['Yasmin']
          }
          console.log(curso)
        }
      
      
      
      exercicio8 = (curso: Curso): void => {
      console.log('Capítulo 7.7 Moderado: Defina um tipo para representar um curso, com nome, instrutor e um array de alunos');
      const notaAlta: number = Math.max(...curso.notasAlunos)
      console.log(notaAlta)
      }
      
}