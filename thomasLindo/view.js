const escola = [
    {name: "joao",serie: "3B"},
    {name: "joao joao",serie: "5C"},
    {name: "joao pedro",serie: "8A"}
]

function layout(titulo,content){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
</head>
<body>
    <nav>
        <a href="/cursos">CURSOS</a>
        <a href="/alunos">alunos</a>
        <a href="/contato">CONTATO</a>
        <a href="/">HOME</a>
    </nav>
    ${content}
</body>
</html>
    `;

}

export function pageHome() {
    return layout('HOME', `<img src="https://wallpapers.com/images/hd/meme-profile-picture-2rhxt0ddudotto63.jpg" style="width: 300px;height: 300px;">
        <h1>HOME</h1>`)
}
export function pageCursos() {
    return layout('CURSOS', `<h1>CURSOS</h1>`)
}
export function pageContato() {
    return layout('CONTATO', `<img src="https://wallpapers.com/images/hd/meme-profile-picture-2rhxt0ddudotto63.jpg" style="width: 300px;height: 300px;">
        <h1>CONTATO</h1>`)
}
export function pageAlunos() {
    const linhas = escola
    .map((A) => `<tr><td>${A.name}</td><td>R$ ${A.serie}</td></tr>`)
    return layout('ALUNOS', `<img src="https://wallpapers.com/images/hd/meme-profile-picture-2rhxt0ddudotto63.jpg" style="width: 300px;height: 300px;">
        <h1>ALUNOS</h1>
        <table>
        <tr><th>ALUNOS</th><th>SERIE</th></tr>
      ${linhas}
    </table>`)
}
export function pageNOTFOUND() {
    return layout('NOT FOUND 404', `<img src="https://wallpapers.com/images/hd/meme-profile-picture-2rhxt0ddudotto63.jpg" style="width: 300px;height: 300px;">
        <h1>PAGE NOT FOUND</h1>`)
}