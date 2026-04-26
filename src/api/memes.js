const BASE_URL = "https://meme-api.com/gimme"

export const getMeme = async () => {
    const result = await fetch(`${BASE_URL}`)
    return result.json()
}