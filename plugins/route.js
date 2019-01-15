import api from '@/netapi'

export default ({ app }) => {
    app.router.beforeEach(async function (to, from, next) {
        let ret = await api.misc()
        console.log(111, ret)
        next()
    })
}
