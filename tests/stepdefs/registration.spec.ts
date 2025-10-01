import { test } from "../fixtures/baseFixture"
import { expect } from "@playwright/test"
import { config } from "../helpers/dotenv";

test.describe('@positive', () => {
    test('@Sign-Up (mocked companySignUp success)', async ({page, registrationPage, homePage}) => {
        test.info().annotations.push(
            {type: 'tag', description: '@registration'},
        )
        await page.route(
            /https:\/\/[^/]+cloudfunctions\.net\/companySignUp$/,
            async route => {
                await route.fulfill({
                    status: 200,
                    contentType: 'application/json; charset=utf-8',
                    body: JSON.stringify({
                        "result": {
                            "id": "ZDeKKt1FDHXtKD43xQYfyj7bHw43",
                            "userId": "ZDeKKt1FDHXtKD43xQYfyj7bHw43",
                            "accountId": "ZDeKKt1FDHXtKD43xQYfyj7bHw43",
                            "createdAt": 1759344278,
                            "updatedAt": 1759344279,
                            "updatedById": "ZDeKKt1FDHXtKD43xQYfyj7bHw43",
                            "type": 2,
                            "reportToId": null,
                            "email": config.login.email,
                            "displayName": "FirstTestChe LastTestChe",
                            "companyName": "NameChe",
                            "industry": "Distributor",
                            "phoneNumber": "380666666666",
                            "phoneCountry": "ua",
                            "photoURL": null,
                            "disabled": false
                        }
                    }),
                });
            }
        )

        await registrationPage.registration({
            firstName: "FirstTestChe",
            lastName: "LastTestChe",
            companyName: "CompanyChe",
            industry: "Distributor",
            email: config.login.email,
            country: "+380",
            phone: "666666666",
            password: config.login.password
        })

        await expect(homePage.selectPlanHeader).toHaveText('Select Plan')
    })
})

test.describe('@negative', () => {
    test('@Sign-Up with already existing email', async ({registrationPage}) => {
        test.info().annotations.push(
            {type: 'tag', description: '@registration'},
        )
        await registrationPage.registration({
            firstName: "FirstTestChe",
            lastName: "LastTestChe",
            companyName: "CompanyChe",
            industry: "Distributor",
            email: config.login.email,
            country: "+380",
            phone: "666666666",
            password: config.login.password
        })
        await expect(registrationPage.getAlertToast("Invalid to Sign up")).toBeVisible()
    })
    test('@Sign-Up with an invalid password', async ({registrationPage}) => {
        test.info().annotations.push(
            {type: 'tag', description: '@registration'},
        )
        await registrationPage.registration({
            firstName: "FirstTestChe",
            lastName: "LastTestChe",
            companyName: "CompanyChe",
            industry: "Distributor",
            email: "email@test.test",
            country: "+380",
            phone: "666666666",
            password: "12345"
        })
        await expect(registrationPage.getAlertToast("Invalid to Sign up")).toBeVisible()
    })
})

