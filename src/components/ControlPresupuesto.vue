<script setup>
    import imagen from '../assets/img/grafico.jpg'
    import { formatearCantidad } from '../helpers'


    const props = defineProps({
        presupuesto: {
            type: Number,
            required: true
        },
        disponible: {
            type: Number,
            required: true
        },
        gastado: {
            type: Number,
            required: true
        }
    })

</script>

<template>
    <div class="dos-columnas">
        <div class="contenedor-grafico">
            <img 
                :src="imagen"
            />

        </div>
        <div class="contenedor-presupuesto">
            <button
                class="reset-app"
            >Resetear App</button>
            <p>
                <span>Presupuesto:</span> {{ formatearCantidad( presupuesto )}}
            </p>
            <p>
                <span>Disponible:</span> {{ formatearCantidad( disponible )}}
            </p>
            <p>
                <span>Gastado: </span>{{ formatearCantidad( gastado ) }}
            </p>

        </div>
    </div>
</template>

<style scoped>
    .dos-columnas {
        display: flex;
        flex-direction: column;
    }

    .dos-columnas > :first-child {
        margin-bottom: 3rem;
    }

    @media (min-width: 768px) {
        .dos-columnas {
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }
        .dos-columnas > :first-child {
            margin-bottom: 0;
        }
    }

    .reset-app {
        background-color: #db2777;
        border-radius: .5rem;
        border: none;
        color: var(--blanco);
        font-weight: 900;
        padding: 1rem;
        text-transform: uppercase;
        transition-duration: .3s;
        transition-property: background-color;
        width: 100%;
    }

    .reset-app:hover {
        background-color: #be185d;
        cursor: pointer;
    }

    .contenedor-presupuesto {
        width: 100%;
    }

    .contenedor-presupuesto p {
        color: var(--gris-oscuro);
        font-size: 2.4rem;
        text-align: center;
    }

    @media (min-width: 768px) {
        .contenedor-presupuesto p {
            text-align: left;
        }
    }

    .contenedor-presupuesto p span {
        font-weight: 900;
        color: var(--azul);
    }

    .contenedor-grafico {
        max-width: 500px;
    }




</style>