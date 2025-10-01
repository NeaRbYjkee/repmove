import { test } from "../fixtures/baseFixture"
import { expect } from "@playwright/test";
import { config } from "../helpers/dotenv";

test.describe('@positive', () => {
    test("@Sign-in", async ({loginPage, homePage}) => {
        test.info().annotations.push(
            {type: 'tag', description: '@login'},
        )
        await loginPage.login(config.login.email, config.login.password)
        await expect(homePage.selectPlanHeader).toHaveText('Select Plan')
    })
})

test.describe('@negative', () => {
    test("@Sign-in with an invalid password", async ({loginPage}) => {
        test.info().annotations.push(
            {type: 'tag', description: '@login'},
        )
        await loginPage.login(config.login.email, "12345")
        await expect(loginPage.getAlertToast("Invalid to Login")).toBeVisible()
    })
})