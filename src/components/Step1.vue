<template>
  <div class="body">
    <div class="question">
      <div class="title">
        <div class="step">STEP1</div>
        <h1>お客様の情報を入力してください</h1>
      </div>
      <div class="content">
        <fieldset>
          <legend>-性別-</legend>
          <label><input type="radio" name="sex" v-model="selectSex" value="男性" @change="changeSex">男性</label>
          <label><input type="radio" name="sex" v-model="selectSex" value="女性" @change="changeSex">女性</label>
        </fieldset>
        <fieldset>
          <legend>-生年月日-</legend>
          <label>
            <select v-model="selectYear" @change="changeYear">
            <option v-for="year in years" :key="year.index">{{ year }}</option>
            </select>
          年</label>
          <label>
            <select v-model="selectMonth" @change="changeMonth">
            <option v-for="month in months" :key="month.index">{{ month }}</option>
            </select>
          月</label>
          <label>
            <select v-model="selectDay" @change="changeDay">
            <option v-for="day in days" :key="day.index">{{ day }}</option>
            </select>
          日</label>
        </fieldset>
      </div>
    </div>
    <div @click="toStep2()" class="button">次へ進む<span>&gt;</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      years: [],
      months: [],
      days: [],
      selectSex: this.$store.state.sex,
      selectYear: this.$store.state.year,
      selectMonth: this.$store.state.month,
      selectDay: this.$store.state.day,
    };
  },
  created() {
    this.createYears(),
    this.createMonths(),
    this.createDays()
  },
  methods: {
    createYears() {
      let christianEra = 1926;
      for (let i = 1; i < 64; i++) {
        this.years.push(`${christianEra}年 (昭和${i})`);
        christianEra++;
      }
      for (let i = 1; i < 31; i++) {
        this.years.push(`${christianEra}年 (平成${i})`);
        christianEra++;
      }
      for (let i = 1; i < 3; i++) {
        this.years.push(`${christianEra}年 (令和${i})`);
        christianEra++;
      }
    },
    createMonths() {
      for (let i = 1; i < 13; i++) {
        this.months.push(i);
      }
    },
    createDays() {
      for (let i = 1; i < 32; i++) {
        this.days.push(i);
      }
    },
    changeSex() {
      this.$store.commit('changeSex', this.selectSex);
    },
    changeYear() {
      this.$store.commit('changeYear', this.selectYear);
    },
    changeMonth() {
      this.$store.commit('changeMonth', this.selectMonth);
    },
    changeDay() {
      this.$store.commit('changeDay', this.selectDay);
    },
    toStep2() {
      this.$router.push('step2');
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
    height: 300px;
    margin: auto;
    border: solid 1px rgb(27, 233, 199);
    border-radius: 5px;
  }
  .title {
    width: 1000px;
    height: 60px;
    background: rgb(214, 242, 255);
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
    color: #777;
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
    margin: 20px auto;
    line-height: 50px;
    cursor: pointer;
    border-radius: 5px;
  }
  span {
    margin-left: 10px;
  }
</style>