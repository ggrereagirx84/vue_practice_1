<template>
  <div class="body">
    <div class="question">
      <div class="title">
        <div class="step">STEP2</div>
        <h1>以下にお答えください</h1>
      </div>
      <div class="content" id="content">
        <fieldset>
          <legend>現在、生命保険に加入されていますか？</legend>
          <label @click="displayQuestion2"><input type="radio" name="insurance" v-model="selectQuestion1" value="はい">はい</label>
          <label @click="displayQuestion2"><input type="radio" name="insurance" v-model="selectQuestion1" value="いいえ">いいえ</label>
        </fieldset>
        <template>
          <fieldset v-if="question2">
            <legend>現在入院中ですか。または、最近３か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</legend>
            <label @click="displayQuestion3"><input type="radio" name="hospitalization" v-model="selectQuestion2" value="はい">はい</label>
            <label @click="displayQuestion3"><input type="radio" name="hospitalization" v-model="selectQuestion2" value="いいえ">いいえ</label>
          </fieldset>
        </template>
        <template v-if="question3">
          <fieldset>
            <legend>過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</legend>
            <label><input type="radio" name="experience" v-model="selectQuestion3" value="はい">はい</label>
            <label><input type="radio" name="experience" v-model="selectQuestion3" value="いいえ">いいえ</label>
          </fieldset>
        </template>
      </div>
    </div>
    <div class="buttons">
    <div @click="toStep1" class="button">前へ戻る<span>&gt;</span></div>
    <div @click="toStep3" class="button">次へ進む<span>&gt;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "userData",
  ],
  data() {
    return{
      question2: false,
      question3: false,
      selectQuestion1: this.userData.question1,
      selectQuestion2: this.userData.question2,
      selectQuestion3: this.userData.question3,
    }
  },
  methods: {
    toStep1() {
      this.$router.push('/');
    },
    toStep3() {
      this.$router.push("step3");
      this.changeQuestion();
    },
    displayQuestion2() {
      this.question2 = true;
    },
    displayQuestion3() {
      this.question3 = true;
    },
    changeQuestion() {
      this.$emit(
        "change-question",
        this.selectQuestion1,
        this.selectQuestion2,
        this.selectQuestion3,
      )
    }
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
    height: 400px;
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
  fieldset {
    border: none;
  }
  legend {
    padding: 20px;
    color: rgb(90, 178, 219);
  }
  select {
    height: 30px;
    font-size: 20px;
    color: #777;
  }
  label {
    font-size: 20px;
    color: #777;
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