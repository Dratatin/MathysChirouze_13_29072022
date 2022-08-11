import axios from "axios"
import { postResolved, postRejected, login } from "./authReducer"

export const connectionRequest = ((store, logCredential) => {
    // const status = store.getState().post.status
    // if (status === 'pending') {
    //     return
    // }

    store.dispatch(login())
    axios.post('http://localhost:3001/api/v1/user/login', {
        email: logCredential.email,
        password: logCredential.password
    }).then(response => {
        store.dispatch(postResolved(response.data.body.token))
    }).catch(error => {
        store.dispatch(postRejected({
            message: error.message,
            status: error.response.status
        }))
    })
})