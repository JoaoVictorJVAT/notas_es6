class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

class Turma {
    #alunos;

    constructor() {
        this.#alunos = [];
    }

    adicionarAluno(nome, nota) {
        const novoAluno = new Aluno(nome, nota);
        this.#alunos.push(novoAluno);
    }

    filtrarAprovados() {
        return this.#alunos.filter(aluno => aluno.nota >= 6);
    }

    exibirAprovados() {
        const aprovados = this.filtrarAprovados();
        aprovados.forEach(aluno =>
            console.log(`Aluno: ${aluno.nome}, nota: ${aluno.nota}`)
        );
    }
}

// Instanciando a turma e adicionando alunos
const minhaTurma = new Turma();
minhaTurma.adicionarAluno('Lázaro', 8);
minhaTurma.adicionarAluno('Bianca', 5);
minhaTurma.adicionarAluno('Vitória', 7);
minhaTurma.adicionarAluno('Arthur', 4);
minhaTurma.adicionarAluno('Tamires', 6);
minhaTurma.adicionarAluno('Leandro', 2);
minhaTurma.adicionarAluno('Julio', 7);
minhaTurma.adicionarAluno('Gilberto', 10);
minhaTurma.adicionarAluno('Ana', 1);

// Exibindo alunos aprovados
console.log('Alunos aprovados:');
minhaTurma.exibirAprovados();