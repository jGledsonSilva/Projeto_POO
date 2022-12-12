import { Api } from '../index'


const postUser = async (email, nickname, password) => {

    try {

        const id = null
        const body = {
            id:id,
            email: email,
            password: password,
            login: nickname
        }

        const { data } = await Api.post("/save", body)

        console.log(data)

        return data
    } catch(error) {
        
        throw (error.response.data)
    }
}

export const userServide = {
    postUser
}
