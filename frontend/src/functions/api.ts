const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
    try {
        const response = await fetch(normalizarUrl(`${baseURL}/${url}`), {
            next: { revalidate: 3600 },
        })
        if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`)
            return []
        }
        return response.json()
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error)
        return []
    }
}

function normalizarUrl(url: string) {
    const protocolo = url.split("://")[0]
    const restante = url.split("://")[1]
    return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`
}
