let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
        },
        {
            nome: "Fernando Puntel",
            notas: [8, 10, 10, 7, 9.33]
        },
        {
            nome: "Daiane Jelinsky",
            notas: [7, 10, 9.5, 9.5, 8]
        },
        {
            nome: "Bruno Castro",
            notas: [10, 10, 10, 9, 9.5]
        }
    ];

    // Função para calcular a média das notas
    function calcularMedia(atletas) {
        for (let i = 0; i < atletas.length; i++) {
            let atleta = atletas[i];
            // Ordena as notas
            let notasOrdenadas = atleta.notas.sort((a,b) => a-b);
            // Remove a menor e a maior nota
            let notasComputadas = notasOrdenadas.slice(1, 4);
            // Calcula a média das notas restantes
            let soma = 0;
            for (let j = 0; j < notasComputadas.length; j++) {
                soma += notasComputadas[j];  
            }
            let media = soma / notasComputadas.length;
            // Apresenta o resultado para o usuário
            console.log(`Atleta: ${atleta.nome}`);
            console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
            console.log(`Média Válida: ${media.toFixed(6)}`);
        }
    }

    // Chama a função com a matriz de atletas
    calcularMedia(atletas);