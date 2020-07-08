import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "3d043b51-ce74-4241-8285-271997b6c846"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

});
export const UsersApi = {

    getUsers: (page = 1, pageSize = 3) => {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => {
                return response.data;
            }
        )
    },

    unfollowAPI: (id) => {
        return instance.delete(`follow/${id}`);
    },
    followAPI: (id) => {
        return instance.post(`follow/${id}`);
    },

};
export const AuthAPI = {
    getAuthData: () => {
        return instance.get(`auth/me`);
    },
    login: (email, password, rememberMe) => {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout: () => {
        return instance.delete(`auth/login`);
    }
};
export const ProfileAPI = {
    getProfile: (userId=1) => {
        return instance.get(`profile/${userId}`);
    },
    getStatus: (userId=1) => {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus: (status) => {
        return instance.put(`profile/status/`, {status:status});
    }
};
