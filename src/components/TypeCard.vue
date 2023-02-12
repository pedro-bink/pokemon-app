<script>
export default {
  props: {
    type: Object,
  },
};
</script>

<template>
  <div class="card-type">
    <span class="stat">{{ type.stat.name }}</span>
    <span class="value"> {{ type.base_stat }}</span>
  </div>
</template>

<style>
.card-type {
  background-color: #d9d9d9;
  border: 2px solid rgb(82, 176, 255);
  border-radius: 10px;
  color: black;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 250px;
  width: 100%;
  height: 50px;
  position: relative;
}

.stat,
.value {
  font-size: large;
  position: absolute;
  top: 15px;
}
.value {
  font-size: small;
  color: white;
  background-color: orangered;
  height: 28px;
  width: 28px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  border-radius: 20px;
}

@media (max-width: 500px) {
  .stat {
    font-size: 10pt;
    text-align: center;
  }
  .card-type {
    padding: 0px;
  }
}

@media (max-width: 500px) {
  .stat {
    font-size: 8pt;
    text-align: center;
  }
}
</style>
