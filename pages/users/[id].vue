<template lang="pug">
.container
    h1(style="text-align:center").mt-3 User Details
    .data.d-flex.mt-5.rounded.shadow-lg.p-3
        .image 
            img(src="/img/myusers.jpg", alt="")
        .contnet
            h2.mt-2 User Name : 
            p {{userdata.name}}
            h2.mt-2 User ID : 
            p   {{userdata.id}}
            h2.mt-2 User Todos : 
            ul
                li(v-if="userdata" v-for="todo in userdata.todos")
                    p created at: {{todo.created_at}}
                    p Todo: {{todo.title}}
                    p(v-if="todo.is_completed" ).fw-bold.fs-4 This todo is completed
                    p(v-else ).fw-bold.fs-4 This todo is not completed

</template>

<script lang="ts" setup>

const route = useRoute();
const { data, error } = await useAsyncGql({
    operation: "userbyid",
    variables: { id: route.params.id }
  });
let userdata = ref(data.value?.users[0])
watch(data.value, (curr , old)=>{
    userdata.value = curr.users[0]
    console.log(userdata.value)

})

</script>

<style lang="scss">
.image{
    padding: 1.2rem;
    width: 50%;
    align-items: center;
    img{
        width: 100%;
    }



}
.contnet{
    h2{
        color: $main-color;
    }
    p{
        color: $dark-color;
    
    }
    li{
        background-color: $main-color;
        padding: 1rem;
        border-radius: 1.2rem;
        p{
            color: white;
        }
        margin-top: 1rem;
    }
}   

</style>