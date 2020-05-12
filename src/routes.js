import { registerScreen, registerScreenRedux, setRoot } from './utils/navigation'
import { HomeScreen, HOME_SCREEN } from './modules/Core/Home'

import {
  ProfileScreen,
  PROFILE_SCREEN,
} from './modules/Core/Profile'

import {
    LoginScreen,
    LOGIN_SCREEN,
  } from './modules/Core/Login'

import {
  RegisterScreen,
  REGISTER_SCREEN,
} from './modules/Core/Register'


export const registerScreens = (Provider, store) => {
  registerScreen(HOME_SCREEN.name, HomeScreen)
  registerScreen(PROFILE_SCREEN.name, ProfileScreen)
  registerScreenRedux(LOGIN_SCREEN.name, LoginScreen, Provider, store)
  registerScreenRedux(REGISTER_SCREEN.name, RegisterScreen, Provider, store)

}