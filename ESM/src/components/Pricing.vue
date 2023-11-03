<template>
  <div class="flex h-screen">
    <div class="w-1/2 flex items-center justify-center">
      <img class="rounded-full h-64 w-64 object-cover" src="src/assets/EricaHeadshot.png" alt="Erica Headshot" />
    </div>
    <div class="w-1/2 overflow-auto p-4 flex flex-col justify-center">
      <h1 class="font-bold items-center ">Headshots:</h1>
      <p class="px-8"> Personal: $50 </p>
      <p class="px-8"> Groups: $40 Per Person </p>
      <p> Graduation: $150 </p>
      <p> With Additional Film Photos: $200 </p>
      <p> Personal: $175-250 Per Hour (Depending on amount of outfits) </p>
      <p> Video: $75 (Including Editing)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  // More Vue options here
}
</script>

<style scoped>
/* CSS styles here */
</style>