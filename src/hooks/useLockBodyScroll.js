import { useEffect } from "react"



const useLockBodyScroll = (locked) => {
    useEffect(() => {
        if (!locked) return;                               // Si locked es false, el efecto no hace nada. No bloquea el scroll.
        const original = document.body.style.overflow;     // Si locked es true, primero guarda el valor actual de overflow que tenía el <body>
        document.body.style.overflow = "hidden";           // Luego le pone overflow: hidden al <body>, lo que impide que la página haga scroll, sin importar cuánto contenido tenga. 
        return () => {
            document.body.style.overflow = original;       // Al desmontar el componente, restaura el valor original de overflow. 
        }
    }, [locked])
}
export { useLockBodyScroll }
export default useLockBodyScroll