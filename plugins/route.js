import axios from 'axios'

let theData = null

export default ({ app }) => {
    app.router.beforeEach(async function (to, from, next) {
        if (!theData) {
            let ret = await axios.get(`http://localhost:8888/`)
            console.log(111, ret)
            theData = ret
        }
        next()
    })
}