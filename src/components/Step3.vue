<template>
  <div class="body">
    <div class="question">
      <div class="title">
        <div class="step">STEP3</div>
        <h1>ご相談内容をご記入ください</h1>
      </div>
      <div class="content" id="content">
        <fieldset>
          <legend>-ご相談内容-</legend>
          <textarea v-model="content" @change="changeContent"></textarea>
        </fieldset>
      </div>
    </div>
    <div class="buttons">
    <div @click="toStep2" class="button">前へ戻る<span>&gt;</span></div>
    <div @click="toStep4" class="button">次へ進む<span>&gt;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      content: this.$store.state.content
    }
  },
  methods: {
    toStep2() {
      this.$router.push("step2");
    },
    toStep4() {
      this.$router.push("step4");
    },
    changeContent() {
      this.$store.commit('changeContent', this.content);
    },
  }
  
}
</script>

<style scoped>
  .body {
    width: 100%;
    margin: 20px;
  }
  .question {
    width: 1000px;
    height: 500px;
    margin: auto;
    border: solid 1px rgb(27, 233, 199);
    border-radius: 5px;
  }
  .title {
    width: 1000px;
    height: 60px;
    background:  rgb(214, 242, 255);
    color: #777;
    display: flex;
    border: solid 1px rgb(27, 233, 199);
  }
  .step {
    width: 60px;
    height: 25px;
    background: rgb(90, 178, 219);
    color: #fff;
    border-radius: 5px;
    text-align: center;
  }
  h1 {
    width: 800px;
    height: 40px;
    font-size: 20px;
    margin: auto;
    text-align: center;
    line-height: 40px;
    font-weight: 300;
  }
  .content {
    height: 340px;
  }
  fieldset {
    border: none;
    height: 100%;
  }
  legend {
    padding: 20px;
    color: rgb(90, 178, 219);
  }
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
  }
  .button {
    width: 100px;
    height: 50px;
    text-align: center;
    background: rgb(27, 233, 199);
    color: #fff;
    margin: 20px;
    line-height: 50px;
    cursor: pointer; 
    border-radius: 5px;
  }
  span {
    margin-left: 10px;
  }
  .buttons {
    width: 280px;
    display: flex;
    margin: auto;
  }
  </style>