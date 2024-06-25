<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { $bs } = useNuxtApp();
const layout = "default";

onMounted(() => {
  try {
    const collapse = new $bs.Collapse('#navbarSupportedContent');
    collapse.show();
  } catch (e) {
    console.log('Bootstrap error: ', e);
  }
});
</script>

<style lang="scss">

</style>