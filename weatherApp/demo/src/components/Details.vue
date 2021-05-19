<template>
  <div class="detail">
    <div class="cityName">广州</div>
    <ul class="ulBox">
      <li v-for="item in dataAll" :key="item.api">
        <div class="line">
          <p class="pOne">{{item.week}}</p>
          <p class="pTwo">
            <img v-if="item.type=='晴'" src="../assets/sunIcon.png" alt />
            <img v-else-if="item.type=='雷阵雨' ||item.type=='小雨'" src="../assets/rainIcon.png" alt />
            <img v-else src="../assets/cloudIcon.png" alt />
          </p>
          <p class="pThree">{{item.high.slice(2)}} ~ {{item.low.slice(2)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      msg: "我是Home",
      cityKey: 101280101, //初始化广州
      dataAll: "",
      cityName: ""
    };
  },
  created: async function() {
    const res = await this.$axios.get("/api/" + this.cityKey);

    if (res.data.status == 200) {
      console.log("请求数据成功");
      // console.log(res.data);
      this.dataAll = res.data.data.forecast;
      // console.log(this.dataAll)
      // this.cityName=today.type
    } else {
      console.log("请求数据失败");
    }
  }
};
</script>

<style>
.detail {
  height: 100%;
  background-image: url("../assets/rain.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  color: #fff;
}

.cityName {
  font-size: 35px;
  padding-top: 20px;
}

.ulBox {
  /* padding-top: 80px; */
  margin-top: 18px;
}

.ulBox li {
  height: 25px;
  margin-bottom: 10px;
}

.line {
  position: relative;
}
li:hover {
  background-color: rgb(236, 119, 119);
  opacity: 0.8;
}

.line p {
  position: absolute;
  display: inline-block;
}

.pOne {
  left: 12%;
}

.pTwo {
  left: 40%;
}

.pThree {
  left: 65%;
}

.line img {
  width: 25px;
  height: 25px;
}
</style>