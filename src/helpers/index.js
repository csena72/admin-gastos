export const formatearCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
};

export const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}