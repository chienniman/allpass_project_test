  //vue新物件建立
  const viewmodel = Vue.createApp({
    data() {
      return {
        allMenu: [
        {
            teaname: "阿薩姆紅茶",
            EngName: "Assam Black Tea",
            price: "60",
            hot: true,
            ice: true,
          },
          {
            teaname: "茉香綠茶",
            EngName: "Green Tea",
            price: "60",
            hot: true,
            ice: true,
          },
          {
            teaname: "芒果綠茶",
            EngName: "Mango Green Tea",
            price: "80",
            hot: false,
            ice: true,
          },
          {
            teaname: "葡萄柚綠茶",
            EngName: "Grapefruit green Tea",
            price: "80",
            hot: false,
            ice: true,
          },
          {
            teaname: "蔓越莓綠茶",
            EngName: "Cranberry Green Tea",
            price: "80",
            hot: false,
            ice: true,
          },
          {
            teaname: "蜂蜜檸檬綠茶",
            EngName: "Lemon Honry Green Tea",
            price: "90",
            hot: false,
            ice: true,
          },
          {
            teaname: "奶茶",
            EngName: "Milk Tea",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "香草奶茶",
            EngName: "Vanilla Milk Tea",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "榛果奶茶",
            EngName: "Hazelnut Milk Tea",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖奶茶",
            EngName: "Caramel Milk Tea",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "太妃糖奶茶",
            EngName: "Toffee Milk Tea",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "鮮榨檸檬汁",
            EngName: "Lemon Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨柳橙汁",
            EngName: "Orange Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨葡萄柚汁",
            EngName: "Grapefruit Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨奇異果汁",
            EngName: "Kiwi Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "當季水果牛奶",
            EngName: "Fruit Milk",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨鮮榨蔬果汁",
            EngName: "Seasonal Fruit and Vegetable Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "皇家伯爵茶",
            EngName: "Earl Grey Tea",
            price: "120",
            hot: true,
            ice: false,
          },
          {
            teaname: "有機洋甘菊茶",
            EngName: "Organic Chamomile Tisane",
            price: "120",
            hot: true,
            ice: false,
          },
          {
            teaname: "百箱花樣水果茶",
            EngName: "Gerry Tea Pasionfruit Natural",
            price: "120",
            hot: true,
            ice: false,
          },
          {
            teaname: "萊茵野莓水果茶",
            EngName: "Strawberry Popcorn Mild Fruit ",
            price: "150",
            hot: true,
            ice: false,
          },
          {
            teaname: "原味鮮奶",
            EngName: "Original Milk",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "香草鮮奶",
            EngName: "Vanilla Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "榛果鮮奶",
            EngName: "Hazelnut Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖鮮奶",
            EngName: "Caramel Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "太妃糖鮮奶",
            EngName: "Toffee Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "阿薩姆紅茶牛奶",
            EngName: "Assam Black Tea Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "宇治抹茶牛奶",
            EngName: "Matcha",
            price: "120",
            hot: true,
            ice: true,
          },
          {
            teaname: "巧克力歐蕾",
            EngName: "Original Chocolate Milk",
            price: "120",
            hot: true,
            ice: true,
          },
          {
            teaname: "美式黑咖啡",
            EngName: "American Coffee",
            price: "60",
            hot: true,
            ice: true,
          },
          {
            teaname: "原味拿鐵",
            EngName: "Original Latte",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "香草拿鐵",
            EngName: "Vanilla Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "榛果拿鐵",
            EngName: "Hazelnut Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖拿鐵",
            EngName: "Caramel Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "太妃糖拿鐵",
            EngName: "Toffee Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "摩卡咖啡",
            EngName: "Mocha",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "卡布奇諾咖啡",
            EngName: "Cappuccino",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖瑪奇朵咖啡",
            EngName: "Caramel Macchiato",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "宇治抹茶拿鐵咖啡",
            EngName: "Coffee Matcha Latte",
            price: "120",
            hot: true,
            ice: true,
          },
        ],
        tempMenu: [],
        // 調茶飲
        FreshTea: [
          {
            teaname: "阿薩姆紅茶",
            EngName: "Assam Black Tea",
            price: "60",
            hot: true,
            ice: true,
          },
          {
            teaname: "茉香綠茶",
            EngName: "Green Tea",
            price: "60",
            hot: true,
            ice: true,
          },
          {
            teaname: "芒果綠茶",
            EngName: "Mango Green Tea",
            price: "80",
            hot: true,
            ice: false,
          },
          {
            teaname: "葡萄柚綠茶",
            EngName: "Grapefruit green Tea",
            price: "80",
            hot: true,
            ice: false,
          },
          {
            teaname: "蔓越莓綠茶",
            EngName: "Cranberry Green Tea",
            price: "80",
            hot: true,
            ice: false,
          },
          {
            teaname: "蜂蜜檸檬綠茶",
            EngName: "Lemon Honry Green Tea",
            price: "90",
            hot: true,
            ice: false,
          },
          {
            teaname: "奶茶",
            EngName: "Milk Tea",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "香草奶茶",
            EngName: "Vanilla Milk Tea",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "榛果奶茶",
            EngName: "Hazelnut Milk Tea",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖奶茶",
            EngName: "Caramel Milk Tea",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "太妃糖奶茶",
            EngName: "Toffee Milk Tea",
            price: "90",
            hot: true,
            ice: true,
          },
        ],
        // 手選茶飲
        HandPick_Tea: [
          {
            teaname: "皇家伯爵茶",
            EngName: "Earl Grey Tea",
            price: "120",
            hot: true,
            ice: false,
          },
          {
            teaname: "有機洋甘菊茶",
            EngName: "Organic Chamomile Tisane",
            price: "120",
            hot: true,
            ice: false,
          },
          {
            teaname: "百箱花樣水果茶",
            EngName: "Gerry Tea Pasionfruit Natural",
            price: "120",
            hot: true,
            ice: false,
          },
          {
            teaname: "萊茵野莓水果茶",
            EngName: "Strawberry Popcorn Mild Fruit",
            price: "150",
            hot: true,
            ice: false,
          },
        ],
        // 牛奶跟果汁
        Milk_and_Juice: [
          {
            teaname: "原味鮮奶",
            EngName: "Original Milk",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "香草鮮奶",
            EngName: "Vanilla Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "榛果鮮奶",
            EngName: "Hazelnut Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖鮮奶",
            EngName: "Caramel Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "太妃糖鮮奶",
            EngName: "Toffee Flavor Milk",
            price: "90",
            hot: true,
            ice: true,
          },
          {
            teaname: "鮮榨檸檬汁",
            EngName: "Lemon Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨柳橙汁",
            EngName: "Orange Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨葡萄柚汁",
            EngName: "Grapefruit Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨奇異果汁",
            EngName: "Kiwi Juice",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "當季水果牛奶",
            EngName: "Fruit Milk",
            price: "100",
            hot: false,
            ice: true,
          },
          {
            teaname: "鮮榨鮮榨蔬果汁",
            EngName: "Seasonal Fruit and Vegetable Juice",
            price: "100",
            hot: false,
            ice: true,
          },
        ],
        // 茶拿鐵
        TeaLatte: [
          {
            teaname: "阿薩姆紅茶牛奶",
            EngName: "Assam Black Tea Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "宇治抹茶牛奶",
            EngName: "Matcha",
            price: "120",
            hot: true,
            ice: true,
          },
          {
            teaname: "巧克力歐蕾",
            EngName: "Original Chocolate Milk",
            price: "120",
            hot: true,
            ice: true,
          },
        ],
        // 咖啡跟拿鐵
        Coffee_and_Latte: [
          {
            teaname: "美式黑咖啡",
            EngName: "American Coffee",
            price: "60",
            hot: true,
            ice: true,
          },
          {
            teaname: "原味拿鐵",
            EngName: "Original Latte",
            price: "80",
            hot: true,
            ice: true,
          },
          {
            teaname: "香草拿鐵",
            EngName: "Vanilla Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "榛果拿鐵",
            EngName: "Hazelnut Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖拿鐵",
            EngName: "Caramel Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "太妃糖拿鐵",
            EngName: "Toffee Flavor Latte",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "摩卡咖啡",
            EngName: "Mocha",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "卡布奇諾咖啡",
            EngName: "Cappuccino",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "焦糖瑪奇朵咖啡",
            EngName: "Caramel Macchiato",
            price: "100",
            hot: true,
            ice: true,
          },
          {
            teaname: "宇治抹茶拿鐵咖啡",
            EngName: "Coffee Matcha Latte",
            price: "120",
            hot: true,
            ice: true,
          },
        ],
        // 按鈕上的品項數量 
        all_length:0,
        fresh_length:0,
        HandPick_Tea_length:0,
        Milk_and_Juice_length:0,
        TeaLatte_length:0,
        Coffee_and_Latte_length:0, 
        cold_length:0,
        hot_length:0,
        cold_and_hot_length:0,    
      };
    },
    methods: {
      showAllMenu: function () {
        this.tempMenu = this.allMenu;
      },
      showFreshTea: function () {
        this.tempMenu = this.FreshTea;
      },
      showHandPick_Tea: function () {
        this.tempMenu = this.HandPick_Tea;
      },
      showMilk_and_Juice: function () {
        this.tempMenu = this.Milk_and_Juice;
      },
      showTeaLatte: function () {
        this.tempMenu = this.TeaLatte;
      },
      showCoffee_and_Latte: function () {
        this.tempMenu = this.Coffee_and_Latte;
      },
      showColdDrink:function(){
        // 從所有菜單中把冷飲過濾出來
        var coldDrink=this.allMenu.filter(
          drink=>(drink.ice==true && drink.hot==false)
        )
        // 頁面上顯示
        this.tempMenu=coldDrink;
        // 在按鈕上顯示冷飲的總數量
        this.cold_length=coldDrink.length
      },
      showHotDrink:function(){
        // 從所有菜單中把熱飲過濾出來
        var HotDrink=this.allMenu.filter(
          drink=>(drink.ice==false && drink.hot==true)
        )
        // 頁面上顯示
        this.tempMenu=HotDrink;
        // 熱飲按鈕上顯示數量
        this.hot_length=HotDrink.length;
      },
      show_cold_and_Hot_Drink:function(){
         // 從所有菜單中把冷熱飲過濾出來
        var cold_and_Hot_Drink=this.allMenu.filter(
          drink=>(drink.ice==true && drink.hot==true)
        )
        // 頁面上顯示
        this.tempMenu=cold_and_Hot_Drink;
        // 冷熱飲按鈕上顯示數量
        this.cold_and_hot_length=cold_and_Hot_Drink.length
      },
    },
    //當vue物件綁定時要執行
    mounted() {
      // 回傳菜單上品項數量
      this.all_length=this.allMenu.length;
      this.fresh_length=this.FreshTea.length;
      this.HandPick_Tea_length=this.HandPick_Tea.length;
      this.Milk_and_Juice_length=this.Milk_and_Juice.length;
      this.TeaLatte_length=this. TeaLatte.length;
      this.Coffee_and_Latte_length=this.Coffee_and_Latte.length;
      // 回傳冷、熱、冷熱飲的品項數量
      this.showColdDrink();
      this.showHotDrink();
      this.show_cold_and_Hot_Drink();
    },
  });
  //掛載vue物件
  viewmodel.mount("#vue_menu");