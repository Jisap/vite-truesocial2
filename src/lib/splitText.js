

// separa el texto en palabras
export const splitWords = (text) => {
    return text.split(" ").filter(Boolean)
}



// separa cada palabra en letras
export const splitChars = (word) => {
    return word.split("")
}