// export const useLogin = () => useState(() => false)
export const useUser = defineStore('user', {
  state: () => ({
    isLogin: false
  })
})