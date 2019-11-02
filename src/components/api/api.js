import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "93ecaf48-b0fe-4a38-b1d7-c9531ace3edb"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`)

    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)

    }

}

export const profileAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data
            });
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})

    }
}

export const authAPI ={
    me(){
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe })
    },

    logOut(){
        return instance.delete(`auth/login`)
    }
}