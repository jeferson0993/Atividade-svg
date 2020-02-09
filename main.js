let eixo_x = 0;
let fill = false;
function limpar() {
    document.querySelector("#nome").value = '';
    document.querySelector("#qtd_votos").value = '';
    eixo_x += 10;
    fill = !fill;
}
function registrar() {    
    let nome = document.querySelector("#nome").value;
    let qtd_votos = Number.parseInt(document.querySelector("#qtd_votos").value);
    console.log(`nome: ${nome}, votos: ${qtd_votos}.`);
    let grafico = document.querySelector("#grafico").innerHTML;
    console.log(grafico);
    if (fill) {
        grafico += `<text x="${eixo_x}%" y="5%" class="small">${nome}</text>`;
        grafico += `<rect x="${eixo_x}%" y="10%" width="5%" height="${qtd_votos}" fill="blueviolet"/>`;
    } else {
        grafico += `<text x="${eixo_x}%" y="5%" class="small">${nome}</text>`;
        grafico += `<rect x="${eixo_x}%" y="10%" width="5%" height="${qtd_votos}" />`;
    }
    document.querySelector("#grafico").innerHTML = grafico;
    limpar();
}
