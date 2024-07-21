<script setup>
import { formatearCantidad, formatearFecha } from '../helpers'
import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'


const diccionarioIconos = {
        ahorro : IconoAhorro,
        comida : IconoComida,
        casa : IconoCasa,
        varios : IconoGastos,
        ocio : IconoOcio,
        salud : IconoSalud,
        suscripciones : IconoSuscripciones
}

const props = defineProps({
    gasto: {
        type: Object,
        required: true
    }
})

defineEmits(['seleccionar-gasto'])

</script>

<template>
    <div class="gasto sombra">
        <div class="contenido">
            <img 
                :src="diccionarioIconos[gasto.categoria]" 
                alt="icono gasto"
                class="icono"
            >
            <div class="detalles">
                <p class="categoria">{{ gasto.categoria }}</p>
                <p 
                    class="nombre"
                    @click="$emit('seleccionar-gasto', gasto.id)"
                >{{ gasto.nombre }}</p>

                <div class="fecha">
                    Fecha: 
                    <span>
                        {{ formatearFecha(gasto.fecha) }}
                    </span>
                </div>
            </div>
        </div>
        <p class="cantidad">{{ formatearCantidad(gasto.cantidad) }}</p>
    </div>
</template>

<style scoped>
.gasto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.contenido {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.icono {
    width: 5rem;
}

.detalles p {
    margin: 0 0 1rem 0;
}

.categoria {
    color: var(--gris);
    font-weight: 900;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
}

.nombre {
    color: var(--gris-oscuro);
    font-weight: 700;
    font-size: 2.4rem;
    cursor: pointer;
}

.cantidad {
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
}

.fecha {
    color: var(--gris-oscuro);
    font-size: 1.6rem;
    font-weight: 900;
}

.fecha span {
    font-weight: 400;
}

.detalles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>