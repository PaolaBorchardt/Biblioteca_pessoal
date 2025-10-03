
const { input, select, checkbox } = require('@inquirer/prompts');
const fs = require('fs').promises;


async function cadastrarLivro() {
    try {
        await fs.writeFile('livros.json', JSON.stringify(livros, null, 2));
        mostrarMensagem("✔️ Livro cadastrado com sucesso!");
    } catch (error) {
        mostrarMensagem("❌ Erro ao salvar: ",  error.mensagem);
    }
}

async function cadastrarLivro () {
    const titulo = await input({ message: "Título do livro:" });
    const autor = await input({ message: "Autor do livro:" });
    const paginas = await input({ message: "Número de páginas:" });
    const genero = await input({ message: "Gênero do livro:" });

    //|| ou
if (!titulo.trim() || !autor.trim() || !paginas.trim() || !genero.trim()) {
        console.log("\n❌ Todos os campos devem ser preenchidos!\n");
        return; // não cadastra 
    }   
    
    console.log(`Título: ${titulo}, autor: ${autor}, páginas: ${paginas}, gènero: ${genero}`);
    
        
       /* livros.push({ 
           // id: aleatoriocomarrod,
            titulo: titulo,
            autor: autor,
            paginas: paginas,
            genero: genero,
           // status: "lendo", // quero_ler, lendo, lido
           // paginaAtual: 120,
           // avaliacao: null, // 1-5 quando lido
           // dataInicio: "2024-01-15",
            //dataFim: null
        
        });  //dps empurra pro banco de dados (let metas [])               //adicionando a nova meta à lista
    
        console.log("✅ Livro cadastrado com sucesso!");*/

}


cadastrarLivro();