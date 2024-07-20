<template>
    <div class="alerta">
        <slot></slot>
    </div>
</template>

<style scoped>
    .alerta {
        background-color: red;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.6rem;
        text-align: center;
        background-color: var(--blanco);
        border-left: .5rem solid #b91c1c;
        color: #b91c1c;
        margin-bottom: 2rem;
        padding: 1rem;
    }

</style>