import axios from "axios"

function submitForm(loggin) {
    axios.post('http://localhost:3001/api/v1/user/login', {
        email: loggin.email,
        password: loggin.password
    }).then(res => {
        console.log(res.data)
    })
}

export default submitForm