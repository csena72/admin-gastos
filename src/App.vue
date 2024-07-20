<script setup>
import Presupuesto from './components/Presupuesto.vue'

</script>

<template>
  <div>
    <header>
      <h1>Planificador de Gastos</h1>
      <div class="contenedor-header contenedor sombra ">
        <Presupuesto
        
        />
      </div>
    </header>

  </div>
</template>

<style>
  :root {
    --azul: #3b82f6;
    --azul-oscuro: #1e40af;
    --blanco: #fff;
    --gris: #94a3b8;
    --gris-claro: #f5f5f5;
    --gris-oscuro: #64748b;
    --negro: #000;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    background-color: var(--gris-claro);
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

header {
    background-color: var(--azul);
}
header h1 {
    color: var(--blanco);
    margin: 0;
    padding: 3rem 0;
    text-align: center;
}

.contenedor {
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
}

.contenedor-header {
  margin-top: -5rem;
  transform: translateY(5rem);
  padding: 5rem;
}

.sombra {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    background-color: var(--blanco);
    border-radius: 1.2rem;
    padding: 2rem;
}

</style>
