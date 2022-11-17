<template lang="pug">
.mycard
    .title
        h1 name : {{name}}
        p id : {{id}}
    .todos 
        h1 Todos 
        p {{todos}}
</template>


<script lang="ts" setup>
const props = defineProps({
    name : String  , 
    id : String , 
    todos : String

})


</script>

<style lang="scss" scoped>

.mycard{
    padding: 2rem ;
    box-shadow: 0 2px 8px #ccc ;
    border-radius: 1.2rem ;
    margin-top: 2rem ;
    width: 30%;
}


</style>

