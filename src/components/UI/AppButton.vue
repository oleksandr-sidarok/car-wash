<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
  .button {
    padding: 20px 0;
    background: var(--accent-color);
    box-shadow: inset 0px -7px 7px #FF013E;
    border-radius: 10px;
    color: white;
  }
</style>
