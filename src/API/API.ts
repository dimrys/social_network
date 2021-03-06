import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "51a774b8-e860-4049-a6ca-bcaa43b89b2e"
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}
export const followAPI = {
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    logMe() {
        return instance.get(`auth/me`)
    },
    logIn(email:string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login',{email, password, rememberMe})
    },
    logOut () {
        return instance.delete('auth/login')
    }

}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            // .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status`, {status: status})
    }
}

type ResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}