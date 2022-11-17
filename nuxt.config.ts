export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],
  css: ["@/assets/style/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/globals.scss" as *;`,
        },
      },
    },
  },
 
  'graphql-client': {
    clients: {
        default: {
            host: 'https://hasura.io/learn/graphql',
            // Basic
            token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE1VDIyOjAwOjIwLjUxOFoiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODYzMTM2MiwiZXhwIjoxNjY4NjY3MzYyLCJhdF9oYXNoIjoiMkF6TkZFLTdDaDVRdXk3c1JkTkhnQSIsInNpZCI6IlhQZ3g1VGE5Rk5lWXZNeENHUkp4X1BmXzRJbzVpZmpWIiwibm9uY2UiOiJreGYtSlJvelF1Mmhfd0lrWEFPQmZjNTBxbUF1aHBDOSJ9.BsDfVUg2r-addMULy6vv-mL9nKJl-sg9CA1Jim-zcfQ3rJPcrdRjXCMyeBD7rDKw1SZSEVOpfPLt3b1v5tD9Xa9xON_6XfIo1GPVEfuMSfpAFuPTlpdoNT_dYRPDNXmjBhTeRJlKRj4EoILW50UWc_0ZU8CaVlKr0Ii59bokirrdMFox4MH9Taqk3_piPpeMfZvOKE7964BeNMtPvRSlAIjYqMuzaXt1ot2wqFtMHWzKdOxXTGAXxI2psiu7OGcwuJDNn18CjVIiRQ8VMz0Q9fbzThQKtJpfoElqWGWylNxoCQLQu7_fySgstj1fJAuOcod-S_dePtf5IYEMJH3P8A',
            // Advanced
           
        }
    }}
});
