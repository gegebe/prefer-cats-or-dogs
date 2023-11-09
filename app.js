import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const favoriteAnimal = ref("");

    const CatsOrDogs = computed(()=>{
      favoriteAnimal.value ? "gatos" : "perros";
      return CatsOrDogs
    })

    return {
      favoriteAnimal,
      CatsOrDogs
    };
  },
}).mount("#app");
