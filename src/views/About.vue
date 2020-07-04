<template>
  <v-main>
    <v-container>
      <h1 class="page-title text-center mb-5-xs mb-sm-10">About</h1>
      <v-row class="px-sm-10">
        <v-col
          v-for="item in profile"
          :key="item.key"
          cols="12" sm="4"
        >
          <v-card dark class="text-center">
            <v-card-title class="justify-center">
              <v-icon v-text="item.icon" class="pr-3"></v-icon>
              {{ item.key }}
            </v-card-title>
            <v-card-text>
              {{ item.value }}
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-card dark class="text-center">
            <v-card-title class="justify-center">
              <v-icon v-text="'fas fa-pencil-alt'" class="pr-3"></v-icon>
               others
            </v-card-title>
            <v-card-text>
              埼玉県某所で妻と二人暮らし。<br>
              暇なときは、PCをカタカタしたり、RPG系のゲームをやったりしています。<br>
              休日は、カラオケ、温泉、旅行に行きたい。（あまり行けてない）<br>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      birthday: '1993-12-22',
    }
  },
  computed: {
    profile() {
      return [
        {
          icon: 'fas fa-signature',
          key: 'name',
          value: '大野 昂希'
        },
        {
          icon: 'fas fa-feather-alt',
          key: 'birthday',
          value: this.BDText,
        },
        {
          icon: 'fas fa-briefcase',
          key: 'job',
          value: 'Webエンジニア'
        },
      ]
    },
    BDText() {
      const data = this.calcAge(this.birthday);

      return `${data.date} (年齢: ${data.age})`;
    }
  },
  methods: {
    calcAge(date) {
      const birthday = moment(date);
      const today = moment();
      const birthdayThisYear = moment(date).set('year', today.year());
      
      let age = today.year() - birthday.year();

      if(today.isBefore(birthdayThisYear)) {
        age -= 1;
      }

      return {
        date: birthday.format('YYYY/MM/DD'),
        age
      };
    }
  },
}
</script>