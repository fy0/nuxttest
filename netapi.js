import axios from 'axios'

export default {
    misc: async function (page = 1) {
        return axios.get(`http://localhost:8888/`)
    }
}
