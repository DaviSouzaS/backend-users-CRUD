interface iLoginRequest {
    email: string,
    password: string
}

interface iToken {
    token: string
}

export {
    iLoginRequest,
    iToken
}