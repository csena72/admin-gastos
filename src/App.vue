<script setup>
import { ref, reactive, watch } from 'vue'
import { uid } from 'uid'
import Presupuesto from './components/Presupuesto.vue'
import ControlPresupuesto from './components/ControlPresupuesto.vue'
import Modal from './components/Modal.vue'
import Gasto from './components/Gasto.vue'
import iconoNuevoGasto from './assets/img/nuevo-gasto.svg'


const modal = reactive({
  mostrar: false,
  animar: false,
})
const presupuesto = ref(0)
const disponible = ref(0)
const gastado     = ref(0)

const gasto = reactive({
  nombre: '',
  cantidad: '',
  categoria: '',
  id: null,
  fecha: Date.now(),
})

const gastos = ref([])

watch(gastos, () => {
  const totalGastado = gastos.value.reduce((total, gasto) => total + Number(gasto.cantidad), 0)  
  gastado.value = totalGastado
  disponible.value = presupuesto.value - totalGastado
}, { deep: true })

watch(modal, () => {
  if(!modal.mostrar) {
    resetearGasto()
  }
}, { deep: true })

const definirPresupuesto = (cantidad) => {
  presupuesto.value = cantidad
  disponible.value = cantidad
}

const mostrarModal = () => {
  modal.mostrar = true
  setTimeout(() => {
      modal.animar = true
  }, 300);
}

const ocultarModal = () => {
  modal.animar = false
  setTimeout(() => {
    modal.mostrar = false
  }, 300)
}

const guardarGasto = () => { 

  if(gasto.id) {
    const { id } = gasto
    const index = gastos.value.findIndex(gasto => gasto.id === id)
    gastos.value[index] = { ...gasto }
    
  } else {
    gastos.value.push({
      ...gasto,
      id: uid()
    })
  }

  ocultarModal()
  resetearGasto()
}

const resetearGasto = () => {
  Object.assign(gasto, {
    nombre: '',
    cantidad: '',
    categoria: '',
    id: null,
    fecha: Date.now(),
  })
}


const seleccionarGasto = (id) => {
  const gastoEditar = gastos.value.filter(gasto => gasto.id === id)[0]

  Object.assign(gasto, gastoEditar)
  mostrarModal()
}

</script>

<template>
  <div
    :class="{'fijar': modal.mostrar}"
  >
    <header>
      <h1>Planificador de Gastos</h1>
      <div class="contenedor-header contenedor sombra ">
        <Presupuesto
          v-if="presupuesto === 0"
          @definir-presupuesto="definirPresupuesto"
        />
        <ControlPresupuesto 
          v-else
          :presupuesto="presupuesto"
          :disponible="disponible"
          :gastado="gastado"
        />
      </div>
    </header>
    
    <main v-if="presupuesto > 0">

      <div class="listado-gastos contenedor">
        <h2>{{ gastos.length > 0 ? 'Lista de Gastos' : 'No hay Gastos' }}</h2>
        <Gasto
          v-for="gasto in gastos"
          :key="gasto.id"
          :gasto="gasto"
          @seleccionar-gasto="seleccionarGasto"
        />
      </div>

      <div class="crear-gasto">
        <img
          :src="iconoNuevoGasto"
          alt="icono nuevo gasto"
          @click="mostrarModal"
        />
      </div>

      <Modal
        v-if="modal.mostrar"
        :modal="modal"
        :disponible="disponible"
        :id="gasto.id"
        v-model:nombre="gasto.nombre"
        v-model:cantidad="gasto.cantidad"
        v-model:categoria="gasto.categoria"
        @ocultar-modal="ocultarModal"
        @guardar-gasto="guardarGasto"
      />

    </main>

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

.fijar {
  overflow: hidden;
  height: 100vh;
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

.crear-gasto {
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  border-radius: 50%;
  border: none;
  background-color: var(--azul);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: all .3s ease;
}

.crear-gasto img {
    width: 100%;
}

.crear-gasto img:hover {
    transform: scale(1.1);
    cursor: pointer;
}

.listado-gastos {
  margin-top: 10rem;
}

.listado-gastos h2 {
  color: var(--gris-oscuro);
  font-weight: 900;
}

</style>
