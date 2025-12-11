import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Games } from './pages/games/games';
import { Profile } from './pages/profile/profile';
import { Association } from './pages/association/association';

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
        path: "jogos",
        component: Games
    },
    {
        path: "perfil",
        component: Profile
    },
    {
        path: "associacao",
        component: Association
    },
    {
        path: "**",
        component: Login
    }
];
