<template>
  <div class="set">
    <h1>我是设置页</h1>
    <img src alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "set",
  data() {
    return {};
  }
};
</script>

<style>
.set {
  height: 100%;
  background-image: url("../assets/rain.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  color: #fff;
}
</style>

<script>
import axios from "axios";
//axios.defaults.baseURL = "http://127.0.0.1:5500";

export default {
  name: "set",
  data() {
    return {
      cityKey: "101280101",
      cityname: "广州市"
    };
  },
  created: function() {
    console.log("123");
    axios
      .get("/two/getCityForm", {
        params: {
          name: this.cityname
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.info(error);
      });
  }
};
</script>