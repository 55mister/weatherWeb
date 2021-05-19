<template>
  <div class="home">
    <div class="content">
      <div class="two">广州</div>

      <div class="three">{{type}}</div>
      <div class="one">{{wendu}}</div>
      <div class="three">{{high}} {{low}}</div>
      <div class="three">{{ymd}}</div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

.home {
  height: 100%;
  background-image: url("../assets/rain.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 60%;
}
.one {
  font-size: 80px;
}
.two {
  font-size: 35px;
}

.three {
  font-size: 20px;
  margin-top: 10px;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "我是Home",
      cityKey: 101280101, //初始化广州
      dataAll: "",
      cityName: "",
      wendu: "",
      ymd: "",
      type: "", //天气类型
      high: "", //最高温度
      low: "", //最低温度
      notice: "" //温馨提醒
    };
  },
  created: async function() {
    const res = await this.$axios.get("/api/" + this.cityKey);

    if (res.data.status == 200) {
      console.log("请求数据成功");
      // console.log(res.data);
      this.wendu = res.data.data.wendu;
      this.dataAll = res.data.data.forecast;

      // console.log(this.dataAll);
      var today = this.dataAll[0];
      // this.cityName=today.type
      this.type = today.type;
      this.high = today.high;
      this.low = today.low;
      this.ymd = today.ymd;
    } else {
      console.log("请求数据失败");
    }
  },
  methods: {}
};
</script>

