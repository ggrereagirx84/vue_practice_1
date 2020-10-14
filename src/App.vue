<template>
  <div>
    <router-view 
      :userData="userData"
      @change-user-data='changeUserData'
      @change-question='changeQuestion'
      @change-consultation='changeConsultation'
    ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        sex:'',
        year: '1990年 (平成2)',
        month:'1',
        day: '1',
        question1: '',
        question2: '',
        question3: '',
        content: '',
      }
    };
  },
  methods: {
    changeUserData(selectSex, selectYear, selectMonth, selectDay) {
      this.userData.sex = selectSex;
      this.userData.year = selectYear;
      this.userData.month = selectMonth;
      this.userData.day = selectDay;
    },
    changeQuestion(selectQuestion1, selectQuestion2, selectQuestion3) {
      this.userData.question1 = selectQuestion1;
      this.userData.question2 = selectQuestion2;
      this.userData.question3 = selectQuestion3;
    },
    changeConsultation(consultation) {
      this.userData.content = consultation;
    }
  }
}
</script>