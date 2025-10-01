import { test as base } from '@playwright/test'
import { LoginPage } from "../pages/loginPage"
import { RegistrationPage } from "../pages/registrationPage"
import { HomePage } from "../pages/homePage"

type MyFixtures = {
    loginPage: LoginPage,
    registrationPage: RegistrationPage,
    homePage: HomePage,
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        await page.goto('/auth/sign-in')
        await use(new LoginPage(page))
    },
    registrationPage: async ({page}, use) => {
        await page.goto('/auth/sign-up')
        await use(new RegistrationPage(page))
    },
    homePage: async ({page}, use) => {
        await use(new HomePage(page))
    },
})