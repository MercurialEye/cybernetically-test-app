export const addZero = (value: number | string): string => {
    const text = value.toString()
    if (text.length > 1) return text
    return `0${text}`
}