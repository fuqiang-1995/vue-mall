import router from '@/router'

router.beforeEach((to, from, next) => {
    console.log("前置守卫")
    next()
    console.log(to)
    console.log(from)
    console.log(next)
})