<script setup>
    defineProps(['filtro'])
    defineEmits(['update:filtro'])
</script>

<template>
    <div class="filtros sombra contenedor">
        <form>
            <label for="filtro">Filtrar Gastos</label>
            <select 
                name="filtro" 
                id="categoria" 
                :value="filtro"
                @input="$emit('update:filtro', $event.target.value)" 
            >
            <option value=""  selected>-- Seleccionar --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="varios">Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>

        </form>
    </div>
</template>



<style scoped>
.filtros {
    margin-top: 8rem;
}

.filtros form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.filtros .campo {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.filtros label {
    font-size: 3rem;
    font-weight: 900;
    color: var(--gris-oscuro);
}

.filtros select {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: .5rem;
    background-color: var(--gris-claro);
    text-align: center;
}

</style>