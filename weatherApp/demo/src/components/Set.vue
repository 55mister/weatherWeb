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

export default {
  name: "set",
  data() {
    return {};
  },
  created: function() {
    console.log("123");
    axios
      .get("index.db", { responseType: "arraybuffer" })
      .then(function(response) {
        let db = new window.SQL.Database(new Uint8Array(response.data));
        // 执行查询

        let r = db.exec("SELECT * FROM cityform ");
        console.log(r);

        // 解析数据
        // let obj = dbToObj(r);
        // console.info(obj);
      })
      .catch(function(error) {
        console.info(error);
      });
  }
};
</script>