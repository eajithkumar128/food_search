<template>
  <div style="margin-left:15%;margin-right:15%">
    <v-row class="mt-8 pa-0" style="width:300px">
      <v-text-field v-model="searchValue" label="Search your food here" prepend-icon="search"></v-text-field>
    </v-row>
    <v-row no-gutters>
      <v-col class="pa-0" align-self="end" align="right">
        <label>
          <div class="caption font-weight-regular gray--text">CATEGORY</div>
          <h2>Pizzas & Noodles</h2>
        </label>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <v-col
        style="padding:5px 0px !important"
        class="pa-0"
        v-for="(food, i) in filteredfoodResults"
        :key="i"
        @click="aboutFood(food.id)"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card style="border-radius:5px;position:relative" width="205px" class="pa-0" hover>
              <v-img
                :src="food.image"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                height="300px"
              >
                <v-card-title
                  style="background-image: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,1));"
                >
                  <v-row style="width:100%">
                    <v-col cols="8" class="caption pa-0 pl-1">
                      <div class="body-2 font-weight-bold">{{ food.name }}</div>
                      <div>
                        <img class="pt-2" src="../assets/Icons/Icon feather-clock.png" />
                        <span class="pl-2 font-weight-medium">45mins</span>
                      </div>
                    </v-col>
                    <v-col class="pa-0 pb-3" align-self="end" align="right">
                      <v-icon medium color="red">mdi-heart</v-icon>
                    </v-col>
                  </v-row>
                  <p class="pt-3" style="font-size:10px;line-height: normal;">{{ food.description }}</p>
                </v-card-title>
              </v-img>
              <v-fade-transition>
                <v-overlay
                  style="z-index:10"
                  :absolute="absolute"
                  color="rgba(0,0,0,4)"
                  :value="hover"
                >
                  <v-btn
                    class="ma-14"
                    outlined
                    small
                    color="white lighten-2 white--text"
                    @click.stop="aboutFood(food.id)"
                  >View More</v-btn>
                  <v-btn
                    outlined
                    class="ma-14"
                    small
                    color="white lighten-2 white--text"
                    @click.stop="dialog=true;quickView(food.id)"
                  >Quick View</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="1000px">
      <v-card>
        <AboutFood :val="val" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AboutFood from "../views/About";

export default {
  data() {
    return {
      searchValue: "",
      overlay: false,
      absolute: true,
      opacity: 1,
      dialog: false,
      val: 0
    };
  },
  components: {
    AboutFood
  },
  computed: {
    ...mapState({
      foodResults: state => state.foodResults
    }),
    filteredfoodResults() {
      return this.foodResults.filter(v => {
        return (
          !this.searchValue ||
          v.name.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      });
    }
  },
  methods: {
    quickView(val) {
      this.$store.commit("setSelection", val);
      this.val = val;
    },
    searchForFood() {
      this.$store.dispatch("action_search_food");
    },
    aboutFood(id) {
      this.$router.push("/" + id);
    }
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.$store.commit("setSelection", -1);
      }
    }
  },
  mounted() {
    this.searchForFood();
  }
};
</script>
