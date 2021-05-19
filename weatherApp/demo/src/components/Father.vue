<template>
  <div class="father">
    <router-view />

    <div class="foot">
      <div class="btnAll">
        <button>
          <router-link class="btnLink" to="/home">
            <p>今日</p>
          </router-link>
        </button>
        <button>
          <router-link class="btnLink" to="/detail">
            <p>未来</p>
          </router-link>
        </button>
        <button>
          <router-link class="btnLink" to="/setPage">
            <p>更多</p>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Father",
  data() {
    return {};
  }
};
</script>

<style>
.father {
  position: relative;
  height: 100%;
}
.foot {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8%;
}
.btnAll {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  width: 33%;
  height: 70%;
  font-size: 15px;
  margin: 0 5px;
  outline: none;
  border: none;
  background-color: rgb(224, 218, 218);
  opacity: 0.5;
  padding: 10px 0;
}

.btnLink {
  outline: none;
  color: #000;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 100%;
  vertical-align: middle;
  text-align: center;
}
</style>