<script setup>

import { ref } from 'vue'
import Alerta from './Alerta.vue'

const presupuesto = ref(0)
const error = ref('')

const definirPresupuesto = () => {
    if(presupuesto.value < 1) {
        error.value = 'No es un presupuesto válido'
        setTimeout(() => {
            error.value = ''
        }, 3000);
    }
    console.log(presupuesto.value)
}


</script>

<template>
    <form
        class="presupuesto"
        @submit.prevent="definirPresupuesto"
    >

        <Alerta v-if="error">
            {{ error }}
        </Alerta>

        <div class="campo">
            <label for="">Definir Presupuesto</label>
            
            <input
            id="nuevo-presupuesto"
            class="nuevo-presupuesto"
            placeholder="Ingresa tu presupuesto"
            type="number"
            v-model.number="presupuesto"
            />

        </div>

        <input type="submit" value="Definir Presupuesto">
    </form>
</template>

<style scoped>
    .presupuesto {
        width: 100%;
    }

    .campo {
        display: grid;
        gap: 2rem;
    }

    .presupuesto label {
        text-align: center;
        font-size: 2.4rem;
        color: var(--azul);
    }

    .presupuesto input[type="number"] {
        background-color: var(--gris-claro);
        border-radius: 1rem;
        padding: 1rem;
        border: none;
        font-size: 2.2rem;
        text-align: center;
    }

    .presupuesto input[type="submit"] {
        background-color: var(--azul);
        border: none;
        border-radius: .5rem;
        padding: 1rem;
        color: var(--blanco);
        font-size: 2rem;
        font-weight: 900;
        margin-top: 2rem;
        text-align: center;
        text-transform: uppercase;
        transition-property: background-color;
        transition-duration: .3s;
        width: 100%;
    }

    .presupuesto input[type="submit"]:hover {
        background-color: var(--azul-oscuro);
        cursor: pointer;
    }

</style>