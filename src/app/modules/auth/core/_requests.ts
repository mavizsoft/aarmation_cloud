import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = import.meta.env.VITE_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/user/verify_token`
export const LOGIN_URL = `${API_URL}/user/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  console.log(token)
  const config ={
    headers : {
    'Content-Type': 'application/json',
    'Authorization' : token
  }
}
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    token: token,
  },config)
}
