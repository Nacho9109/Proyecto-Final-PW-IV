import { Page, expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

export class SelectPage {
    constructor(private page: Page, private world: CustomWorld) { }

    async seleccionarCantidadProductos(amount: number) {
        this.world.totalAmount = this.world.precioUnitario * amount;
        console.log("Total: ", this.world.totalAmount);
        await this.page.getByRole('combobox').selectOption({ label: amount.toString() });
    }

}
