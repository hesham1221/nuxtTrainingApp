<template lang="pug">
.container   
    h1 Main users
    input(type="text" v-model="searchval") 
    button.primary-button(@click="finduser") search 
    .cardele
        Card(v-for="user in users" :name="user.name" :id="user.id" todos="user" )
       
</template>

<script setup lang="ts">
const searchval = ref("");

const { data } = await useAsyncGql({
  operation: "GetUsers"
});
const users = ref(data.value.users);

// watch(searchval, (currentValue, oldValue) => {
//       console.log(currentValue);

//     });

function finduser() {
  users.value = users.value.filter(ele => ele.id.includes(searchval.value));
  console.log(searchval.value);
}

// console.log(data.value.users)
</script>

<style lang="scss" scoped>
.cardele {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>