import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {
    get signUpButton() {
        return this.page.getByRole('button', {name: "Sign Up", exact: true})
    }

    getCountryCode(code: string) {
        return this.page.getByRole('option', {name: `${code}`})
    }

    getIndustry(industry: string) {
        return this.page.getByRole('option', {name: `${industry}`})
    }

    async registration(
        {
            firstName,
            lastName,
            companyName,
            industry,
            email,
            country,
            phone,
            password
        }: RegistrationParams): Promise<void> {
        await this.getTextBoxByName("First Name").fill(firstName)
        await this.getTextBoxByName("Last Name").fill(lastName)
        await this.getTextBoxByName("Company Name").fill(companyName)
        await this.getComboboxByName("Industry").click()
        await this.getIndustry(industry).click()
        await this.getTextBoxByName("Email").fill(email)
        await this.getComboboxByName("Country").click()
        await this.getCountryCode(country).click()
        await this.getTextBoxByName("Phone").fill(phone)
        await this.getTextBoxByName("Password").fill(password)
        await this.signUpButton.click()
    }
}

type RegistrationParams = {
    firstName: string;
    lastName: string;
    companyName: string;
    industry: string;
    email: string;
    country: string;
    phone: string;
    password: string;
}