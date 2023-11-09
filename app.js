import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const favoriteAnimal = ref("");

    const CatsOrDogs = computed(()=>{
      return favoriteAnimal.value == "gatos";
    })

    return {
      favoriteAnimal,
      CatsOrDogs
    };
  },
}).mount("#app");
