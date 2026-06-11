import { Page, expect } from '@playwright/test';
export class ButtonPage {
    constructor(private page: Page) { }

    async clickComprar() {
        await this.page.getByRole('button', { name: 'Buy Now' }).click();
    }

    async clickHome() {
        await this.page.locator('a.button.special').click();
    }

    async clickPagar() {
        await this.page.getByRole('button', { name: 'Pay' }).click();
    }

    async clickSubmit() {
        await this.page.getByRole('button', { name: 'submit' }).click();
    }

}