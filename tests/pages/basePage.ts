import { Page } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) {
    }

    getTextBoxByName(name: string) {
        return this.page
            .locator('app-input', {hasText: `${name}`})
            .getByRole('textbox')
    }


    getComboboxByName(name: string) {
        return this.page.locator('ng-select').filter({hasText: `${name}`}).getByRole('combobox')
    }

    getAlertToast(errorText: string) {
        return this.page.getByRole('alert', {name: `${errorText}`})
    }
}