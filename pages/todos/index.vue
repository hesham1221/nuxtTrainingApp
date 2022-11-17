<template lang="pug">
.container 
    h1 {{$t("addtodo")}}
    .adding.d-flex.mt-4.justify-content-between(style="gap:20px")
      input(type="text" v-model="todo" placeholder="Add your todo") 
      button.primary-button(@click="inserttodo()") insert todo
    .todos

      ul.mt-4 
        li(@click="completed(todo.id)" v-for="todo in myalltodos")
          transition(name="slide" appear)
            .content.d-flex.justify-content-between.align-items-center(v-if="todo.id===addedtodo.insert_todos_one?.id" :class="{complited: todo.is_completed}")
              .data
                h2 {{todo.title}}  
                p {{todo.id}}{{addedtodo.insert_todos_one?.id}}
                h5.mt-2 Created at 
                  span {{todo.created_at}}
              button(class="mx-5" @click="deletetodo(todo.id)").primary-button delete
          .content.d-flex.justify-content-between.align-items-center(v-if="todo.id!==addedtodo.insert_todos_one?.id" :class="{complited: todo.is_completed}")
            .data
              h2 {{todo.title}}  
              h5.mt-2 Created at 
                span {{todo.created_at}}
            button(class="mx-5" @click="deletetodo(todo.id)").primary-button delete    

</template>

<script setup lang="ts">
const todo = ref("");
let addedtodo = ref("");
async function inserttodo() {
  addedtodo.value = null;
  useGqlToken(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE1VDIyOjAwOjIwLjUxOFoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODYzMTM2MiwiZXhwIjoxNjY4NjY3MzYyLCJhdF9oYXNoIjoiMkF6TkZFLTdDaDVRdXk3c1JkTkhnQSIsInNpZCI6IlhQZ3g1VGE5Rk5lWXZNeENHUkp4X1BmXzRJbzVpZmpWIiwibm9uY2UiOiJreGYtSlJvelF1Mmhfd0lrWEFPQmZjNTBxbUF1aHBDOSJ9.BsDfVUg2r-addMULy6vv-mL9nKJl-sg9CA1Jim-zcfQ3rJPcrdRjXCMyeBD7rDKw1SZSEVOpfPLt3b1v5tD9Xa9xON_6XfIo1GPVEfuMSfpAFuPTlpdoNT_dYRPDNXmjBhTeRJlKRj4EoILW50UWc_0ZU8CaVlKr0Ii59bokirrdMFox4MH9Taqk3_piPpeMfZvOKE7964BeNMtPvRSlAIjYqMuzaXt1ot2wqFtMHWzKdOxXTGAXxI2psiu7OGcwuJDNn18CjVIiRQ8VMz0Q9fbzThQKtJpfoElqWGWylNxoCQLQu7_fySgstj1fJAuOcod-S_dePtf5IYEMJH3P8A"
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
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE1VDIyOjAwOjIwLjUxOFoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODYzMTM2MiwiZXhwIjoxNjY4NjY3MzYyLCJhdF9oYXNoIjoiMkF6TkZFLTdDaDVRdXk3c1JkTkhnQSIsInNpZCI6IlhQZ3g1VGE5Rk5lWXZNeENHUkp4X1BmXzRJbzVpZmpWIiwibm9uY2UiOiJreGYtSlJvelF1Mmhfd0lrWEFPQmZjNTBxbUF1aHBDOSJ9.BsDfVUg2r-addMULy6vv-mL9nKJl-sg9CA1Jim-zcfQ3rJPcrdRjXCMyeBD7rDKw1SZSEVOpfPLt3b1v5tD9Xa9xON_6XfIo1GPVEfuMSfpAFuPTlpdoNT_dYRPDNXmjBhTeRJlKRj4EoILW50UWc_0ZU8CaVlKr0Ii59bokirrdMFox4MH9Taqk3_piPpeMfZvOKE7964BeNMtPvRSlAIjYqMuzaXt1ot2wqFtMHWzKdOxXTGAXxI2psiu7OGcwuJDNn18CjVIiRQ8VMz0Q9fbzThQKtJpfoElqWGWylNxoCQLQu7_fySgstj1fJAuOcod-S_dePtf5IYEMJH3P8A"
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
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE1VDIyOjAwOjIwLjUxOFoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODYzMTM2MiwiZXhwIjoxNjY4NjY3MzYyLCJhdF9oYXNoIjoiMkF6TkZFLTdDaDVRdXk3c1JkTkhnQSIsInNpZCI6IlhQZ3g1VGE5Rk5lWXZNeENHUkp4X1BmXzRJbzVpZmpWIiwibm9uY2UiOiJreGYtSlJvelF1Mmhfd0lrWEFPQmZjNTBxbUF1aHBDOSJ9.BsDfVUg2r-addMULy6vv-mL9nKJl-sg9CA1Jim-zcfQ3rJPcrdRjXCMyeBD7rDKw1SZSEVOpfPLt3b1v5tD9Xa9xON_6XfIo1GPVEfuMSfpAFuPTlpdoNT_dYRPDNXmjBhTeRJlKRj4EoILW50UWc_0ZU8CaVlKr0Ii59bokirrdMFox4MH9Taqk3_piPpeMfZvOKE7964BeNMtPvRSlAIjYqMuzaXt1ot2wqFtMHWzKdOxXTGAXxI2psiu7OGcwuJDNn18CjVIiRQ8VMz0Q9fbzThQKtJpfoElqWGWylNxoCQLQu7_fySgstj1fJAuOcod-S_dePtf5IYEMJH3P8A"
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