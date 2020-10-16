<template>
  <div class="body">
    <div class="question">
      <div class="title">
        <div class="step">STEP4</div>
        <h1>以下の内容をご確認ください</h1>
      </div>
      <div class="content" id="content">
        <h2>-性別-</h2>
        <p>{{ $store.state.sex }}</p>

        <h2>-生年月日-</h2>
        <p>{{ birthday }}</p>

        <h2>-現在生命保険に加入されていますか？-</h2>
        <p>{{ $store.state.question1 }}</p>

        <h2>-現在入院中ですか。または、最近３か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</h2>
        <p>{{ $store.state.question2 }}</p>

        <h2>-過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？-</h2>
        <p>{{ $store.state.question3 }}</p>

        <h2>-ご相談内容-</h2>
        <p>{{ $store.state.content }}</p>

      </div>
    </div>
    <div class="buttons">
      <div @click="toStep3" class="button">
        前へ戻る
        <span>&gt;</span>
      </div>
      <div class="button">
        送信
        <span>&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      birthday:''
    }
  },
  created() {
    this.createBirthday();
  },
  methods: {
    toStep3() {
      this.$router.push("step3");
    },
    createBirthday() {
      this.birthday = `${this.$store.state.year}年 ${this.$store.state.month}月${this.$store.state.day}日` ;
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
    height: 1000px;
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
  h2 {
    font-weight: normal;
    font-size:20px;
    padding: 20px;
    color: rgb(90, 178, 219);
  }
  p {
    font-size: 20px;
    color: #777;
    padding-left: 40px;
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