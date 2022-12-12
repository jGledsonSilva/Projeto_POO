import { Api } from '../index'


const postUser = async (email, nickname, password) => {

    try {

        const body = {
            email: email,
            password: password,
            login: nickname
        }


        console.log(body)

        const { data } = await Api.post("/save", body)

        return data
    } catch(error) {
        console.log(error)

        throw ("algo deu errado")
    }
}

export const userServide = {
    postUser
}
