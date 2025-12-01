import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path: "home",
        component: Home
    },
    {
        path: "cadastro",
        component: Register
    },
    {
        path: "iniciar-sessao",
        component: Login
    },
    {
        path: "**",
        component: Login
    }
];
