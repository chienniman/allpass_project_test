const viewmodel = Vue.createApp({
  //定義vue中的變數
  data() {
    return {
        allMenu:['奶茶','紅茶','綠茶','咖啡'],
    };
  },
  methods: {
    
  },
  //當vue物件綁定時要執行
  mounted() {
    console.log(allMenu);
  },
});
//掛載vue物件
viewmodel.mount("#vue_area");
