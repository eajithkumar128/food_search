<template>
  <div class="pt-10" style="margin-left:15%;margin-right:15%;z-index:200">
    <v-btn v-if="selection === -1" @click="goToHome" icon class="pr-1">
      <v-icon>mdi-keyboard-backspace</v-icon>
    </v-btn>
    <span v-if="selection === -1" class="body-2">Go Back</span>
    <v-row>
      <v-col cols="6">
        <v-img :src="imgSrc.image"></v-img>
      </v-col>
      <v-col cols="6" align-self="end" align="right">
        <div style="font-size:10px">RECIPE</div>
        <h2>{{ imgSrc.name }}</h2>
        <p
          class="caption"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <h3>RECIPE</h3>
        <p
          class="caption"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .</p>
      </v-col>
      <v-col class="caption" cols="6">
        <div class="row pl-10" align="right">
          <div class="col-xs-12">
            <div class="circle">
              <p>
                8
                <br />Ingrediant
              </p>
            </div>
            <div class="circle">
              <p>
                {{imgSrc.price}}
                <br />bucks
              </p>
            </div>
            <div class="circle">
              <p>
                25
                <br />minutes
              </p>
            </div>
          </div>
        </div>
        <div class="pt-9 pr-10" align="right">
          Favaoutite this receipe :
          <v-icon medium color="red">mdi-heart</v-icon>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <h3>How to Prepare</h3>
        <p
          class="caption"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .</p>
      </v-col>
      <v-col class="caption" cols="6" large>
        Add comment:
        <v-textarea dense class="pa-0" hide-details outlined name="input-7-4"></v-textarea>
        <v-btn color="black" class="white--text caption mt-1" style="width:100%">Add comment</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      imgSrc: ""
    };
  },
  computed: {
    ...mapState({
      foodResults: state => state.foodResults,
      selection: state => state.selection
    })
  },
  mounted() {
    if (this.selection !== -1) {
      this.imgSrc = this.foodResults[this.selection];
    } else {
      this.imgSrc = this.foodResults[this.$router.currentRoute.params.id];
    }
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  },
  beforeDestroy() {
    this.$store.commit("setSelection", -1);
  }
};
</script>

<style scoped>
.circle {
  float: left;
  margin-right: 10px;
  width: 100px;
  height: 100px;
  border-radius: 150px;
  font-size: 16px;
  color: #fef;
  text-align: center;
  background: #000;
  position: relative;
}

.circle p {
  margin: 0;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
}
</style>