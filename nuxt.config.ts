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
            token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzNzQwYmYzMzNhNjUyYWI1YjhiNDk0YiJ9LCJuaWNrbmFtZSI6Im1lbm5hZWxnYWxsYWQiLCJuYW1lIjoibWVubmFlbGdhbGxhZEBtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZmI4Y2JjMjhiYzllYzVjZDMyMTk3NmJiYjA4OWJiMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm1lLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTExLTE3VDA5OjMwOjM3LjQ5NloiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzc0MGJmMzMzYTY1MmFiNWI4YjQ5NGIiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY2ODY3NzQzOCwiZXhwIjoxNjY4NzEzNDM4LCJhdF9oYXNoIjoib1ppRzIyUGVvaF9lZUJyVzh2c0NmUSIsInNpZCI6Ijk3em9Fc3c3RWhtckhJcW9URG4zLUxyaWxLMmZVWmdOIiwibm9uY2UiOiJIMXZwZVRuenB4SlRfcTVCNnBoY2lrOXRicE5TfjFsZCJ9.gbSYn5cvJCujsuFJtpq04Qwjf0UQEv36ET6aaoFt47B7c1Wj7Fk8f4zYph9xqTSNs8BWREyXBIMEPkyS50zCMoXFVyFVqY41s5UrL0FaKaR5IUJmDjgIoNUsjHJ2KJ9qe5IevSDC8GrqiUrUxZ5AqTDV2jM_6ZvuiI0qeaqLRTl8Ap3s1vGnhnNUbRH97-fAYtmKgZKa9986GpPv7xcswUWD3FIWHICEi2qY9u0LzOS_4gl--qGQz7AHt8uQhAZ5RoJ_2QHphoItvMYs8EUVsWss9NUAq8MKkuHIUMmEWf2i1ItF_PnM6upu2xLXiQ8VDtgW-ZrXUsSzANODMB6R2w',
            // Advanced
           
        }
    }}
});
