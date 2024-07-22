<script setup>
    import { computed } from 'vue'
    import { formatearCantidad } from '../helpers'
    import CircleProgress from "vue3-circle-progress";
    import "vue3-circle-progress/dist/circle-progress.css";


    defineEmits(['reset-app'])


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

    const porcentaje = computed(() => {
        return Math.round((props.gastado / props.presupuesto) * 100)
    })

</script>

<template>
    <div class="dos-columnas">
        <div class="contenedor-grafico">

            <p class="porcentaje">{{ porcentaje }}%</p>

            <circle-progress 
                :percent="porcentaje"
                :Size="250"
                :border-width="15"
                :border-bg-width="15"
                :startPercent="0"
                :animation="true"
                empty-color="#e0e0e0"
                :is-gradient="true"
                :gradient="{
                    angle: 90,
                    startColor: '#ff0000',
                    stopColor: '#ffff00'
                }"
            />

        </div>
        <div class="contenedor-presupuesto">
            <button
                class="reset-app"
                @click="$emit('reset-app')"
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
        position: relative;
    }

    .porcentaje {
        position: absolute;
        margin: auto;
        top: calc(50% - 1.5rem);
        left: 0;
        right: 0;
        text-align: center;
        z-index: 100;
        font-size: 3rem;
        color: var(--azul);
        font-weight: 900;
    }
</style>