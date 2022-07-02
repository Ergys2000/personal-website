type Response<T> = {
    status: string;
    result: T | null;
    message: string;
}
export function authenticate(username: string, password: string): Promise<Response<any>> {
    if(username === "test" && password === "test") {
        return new Promise((resolve, reject) => {
            resolve({status: "OK", result: {userId: 0, token: "akdjfasdf"}, message: "Message"});
        })
    }
    return new Promise((resolve, reject) => {
        resolve({status: "ERROR", result: null, message: "Message"});
    })
}