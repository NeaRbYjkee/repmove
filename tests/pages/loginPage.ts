import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    get signInButton() {
        return this.page.getByRole('button', {name: "Sign In", exact: true})
    }

    async login(email: string, password: string) {
        await this.getTextBoxByName("Email").fill(email)
        await this.getTextBoxByName("Password").fill(password)
        await this.signInButton.click()
    }
}