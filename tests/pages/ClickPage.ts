import { Page, expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

export class ClickPage {
    constructor(private page: Page, private world: CustomWorld) { }

    async clickGenerarTarjeta() {
        await this.page.getByRole('link', { name: 'Generate Card Number' }).click();
        this.world.generateCardPage = await this.page.waitForEvent('popup');
        await this.world.generateCardPage.waitForLoadState();
    }

    async clickRevisarlimiteCredito() {
        await this.page.getByRole('link', { name: 'Check Credit Card Limit' }).click();
    }

    async irPantallaPrincipal() {
        await this.page.getByRole('link', { name: 'Guru99 Payment Gateway' }).click();
    }

}