<template>
  <v-main>
    <v-container>
      <h1 class="page-title text-center mb-5-xs mb-sm-10">About</h1>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-simple-table dark class="py-sm-5">
            <template v-slot:default>
              <tr v-for="item in profile" :key="item.key">
                <td class="text-center py-sm-2">{{ item.key }}</td>
                <td class="text-center py-sm-2">{{ item.value }}</td>
              </tr>
            </template>
          </v-simple-table>
        </v-col>

        <v-col cols="12">
          <v-card dark>
          skills

          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      profile: [
        {key: '名前', value: '大野 昂希'},
        {key: '年齢', value: '26'},
        {key: '職業', value: 'Webエンジニア'},
        {key: 'Github', value: ''},
      ]
    }
  }
}
</script>