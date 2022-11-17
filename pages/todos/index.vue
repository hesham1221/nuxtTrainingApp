<template lang="pug">
.container 
    h1 {{$t("addtodo")}}
    .adding.d-flex.mt-4.justify-content-between(style="gap:20px")
      input(type="text" v-model="todo" placeholder="Add your todo") 
      button.primary-button(@click="inserttodo()") insert todo
    .todos

      ul.mt-4 
        li(@click="completed(mytodo.id)" v-for="mytodo in myalltodos")
          transition(name="slide" )
            .content.d-flex.justify-content-between.align-items-center(v-if="mytodo.id===addedtodo.insert_todos_one?.id" :class="{complited: mytodo.is_completed}")
              .data
                h2 {{mytodo.title}}  
                p {{mytodo.id}}{{addedtodo.insert_todos_one?.id}}
                h5.mt-2 Created at 
                  span {{mytodo.created_at}}
              button(class="mx-5" @click="deletetodo(mytodo.id)").primary-button delete
          .content.d-flex.justify-content-between.align-items-center(v-if="mytodo.id!==addedtodo.insert_todos_one?.id" :class="{complited: mytodo.is_completed}")
            .data
              h2 {{mytodo.title}}  
              h5.mt-2 Created at 
                span {{mytodo.created_at}}
            button(class="mx-5" @click="deletetodo(mytodo.id)").primary-button delete    

</template>

<script setup lang="ts">
const todo = ref("");
let addedtodo = ref("");
async function inserttodo() {
  addedtodo.value = null;
  useGqlToken(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE3VDA5OjMwOjM3LjQ5NloiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODY3NzQzOCwiZXhwIjoxNjY4NzEzNDM4LCJhdF9oYXNoIjoib1ppRzIyUGVvaF9lZUJyVzh2c0NmUSIsInNpZCI6Ijk3em9Fc3c3RWhtckhJcW9URG4zLUxyaWxLMmZVWmdOIiwibm9uY2UiOiJIMXZwZVRuenB4SlRfcTVCNnBoY2lrOXRicE5TfjFsZCJ9.gbSYn5cvJCujsuFJtpq04Qwjf0UQEv36ET6aaoFt47B7c1Wj7Fk8f4zYph9xqTSNs8BWREyXBIMEPkyS50zCMoXFVyFVqY41s5UrL0FaKaR5IUJmDjgIoNUsjHJ2KJ9qe5IevSDC8GrqiUrUxZ5AqTDV2jM_6ZvuiI0qeaqLRTl8Ap3s1vGnhnNUbRH97-fAYtmKgZKa9986GpPv7xcswUWD3FIWHICEi2qY9u0LzOS_4gl--qGQz7AHt8uQhAZ5RoJ_2QHphoItvMYs8EUVsWss9NUAq8MKkuHIUMmEWf2i1ItF_PnM6upu2xLXiQ8VDtgW-ZrXUsSzANODMB6R2w"
  );
  const { data, error } = await useAsyncGql({
    operation: "InsertTodos",
    variables: { title: todo.value }
  });
  addedtodo.value = data.value;
  console.log("addedtodo ", addedtodo.value.insert_todos_one?.id);
}
const { data: alltodos } = await useAsyncGql({
  operation: "GetTodos"
});
const myalltodos = ref(alltodos.value.todos);
console.log(myalltodos.value);
watch(addedtodo, (curr, old) => {
  console.log("from watch", curr.insert_todos_one);
  myalltodos.value.unshift(curr.insert_todos_one);
  console.log("alltodos", myalltodos.value);
});

async function completed(id) {
  useGqlToken(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE3VDA5OjMwOjM3LjQ5NloiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODY3NzQzOCwiZXhwIjoxNjY4NzEzNDM4LCJhdF9oYXNoIjoib1ppRzIyUGVvaF9lZUJyVzh2c0NmUSIsInNpZCI6Ijk3em9Fc3c3RWhtckhJcW9URG4zLUxyaWxLMmZVWmdOIiwibm9uY2UiOiJIMXZwZVRuenB4SlRfcTVCNnBoY2lrOXRicE5TfjFsZCJ9.gbSYn5cvJCujsuFJtpq04Qwjf0UQEv36ET6aaoFt47B7c1Wj7Fk8f4zYph9xqTSNs8BWREyXBIMEPkyS50zCMoXFVyFVqY41s5UrL0FaKaR5IUJmDjgIoNUsjHJ2KJ9qe5IevSDC8GrqiUrUxZ5AqTDV2jM_6ZvuiI0qeaqLRTl8Ap3s1vGnhnNUbRH97-fAYtmKgZKa9986GpPv7xcswUWD3FIWHICEi2qY9u0LzOS_4gl--qGQz7AHt8uQhAZ5RoJ_2QHphoItvMYs8EUVsWss9NUAq8MKkuHIUMmEWf2i1ItF_PnM6upu2xLXiQ8VDtgW-ZrXUsSzANODMB6R2w"
  );
  const { data, error } = await useAsyncGql({
    operation: "completed",
    variables: { id: id }
  });
  console.log(data.value.update_todos_by_pk);
  myalltodos.value = myalltodos.value.map(function(ele) {
    console.log("ele", ele);
    if (ele) {
      if (ele.id === id) {
        return data.value.update_todos_by_pk;
      } else {
        return ele;
      }
    }
  });

  console.log(myalltodos.value);
}

async function deletetodo(id) {
  useGqlToken(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE3VDA5OjMwOjM3LjQ5NloiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODY3NzQzOCwiZXhwIjoxNjY4NzEzNDM4LCJhdF9oYXNoIjoib1ppRzIyUGVvaF9lZUJyVzh2c0NmUSIsInNpZCI6Ijk3em9Fc3c3RWhtckhJcW9URG4zLUxyaWxLMmZVWmdOIiwibm9uY2UiOiJIMXZwZVRuenB4SlRfcTVCNnBoY2lrOXRicE5TfjFsZCJ9.gbSYn5cvJCujsuFJtpq04Qwjf0UQEv36ET6aaoFt47B7c1Wj7Fk8f4zYph9xqTSNs8BWREyXBIMEPkyS50zCMoXFVyFVqY41s5UrL0FaKaR5IUJmDjgIoNUsjHJ2KJ9qe5IevSDC8GrqiUrUxZ5AqTDV2jM_6ZvuiI0qeaqLRTl8Ap3s1vGnhnNUbRH97-fAYtmKgZKa9986GpPv7xcswUWD3FIWHICEi2qY9u0LzOS_4gl--qGQz7AHt8uQhAZ5RoJ_2QHphoItvMYs8EUVsWss9NUAq8MKkuHIUMmEWf2i1ItF_PnM6upu2xLXiQ8VDtgW-ZrXUsSzANODMB6R2w"
  );
  const { data, error } = await useAsyncGql({
    operation: "deletetodo",
    variables: { id: id }
  });
  console.log(data.value.delete_todos_by_pk);
  myalltodos.value = myalltodos.value.filter(ele => ele.id !== id);
  console.log(myalltodos.value);
}
</script>

<style lang="scss" scoped>
input {
  width: 80%;
}
ul {
  background-color: $main-color;
  padding: 3rem;
  border-radius: 1.2rem;

  .content {
    position: relative;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 2px 12px #b6a08b;
      cursor: pointer;
    }
    &.complited {
      background-color: rgba(255, 255, 255, 0.496);
      opacity: 0.5;
      // &::after {
      //   content: "";
      //   width: 90%;
      //   height: 1px;
      //   background-color: #777;
      //   top: 40%;
      //   transform: translateY(-50%);
      //   position: absolute;
      //   z-index: 100;
      // }
    }
    width: 100%;
    .data {
      h5 {
        color: $main-color;
        span {
          color: #777;
          font-size: 15px;
        }
      }
    }

    padding: 1rem;
    background-color: white;
    border-radius: 1.2rem;
    margin-top: 1.2rem;
  }
}
</style>