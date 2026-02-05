export async function obterReadme(repoUrl: string) {
    const repositorio = repoUrl.split("github.com/")[1]

    // Tenta primeiro com "main"
    let readmeUrl = `https://raw.githubusercontent.com/${repositorio}/main/README.md`
    let resposta = await fetch(readmeUrl)

    // Se falhar, tenta com "master"
    if (!resposta.ok) {
        readmeUrl = `https://raw.githubusercontent.com/${repositorio}/master/README.md`
        resposta = await fetch(readmeUrl)
    }

    return resposta.text()
}
