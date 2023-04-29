export const getFlagUrl = (code = "") => {
    return `https://flagsapi.com/${code.toUpperCase()}/flat/64.png`
}