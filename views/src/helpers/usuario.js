let usuario = (() => {
    return JSON.parse(localStorage.getItem('usuario'));    
})
export default usuario;