<script setup>


</script>

<template>
  <div>
    <header>
      <h1>Planificador de Gastos</h1>
    </header>
  </div>
</template>

<style>
  :root {
    --azul: #3b82f6;
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

</style>
