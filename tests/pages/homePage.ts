import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    get selectPlanHeader() {
        return this.page.getByText('Select Plan', {exact: true})
    }
}