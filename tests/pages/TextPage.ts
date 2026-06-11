import { Page, expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import dotenv from 'dotenv';

export class TextPage {
    constructor(private page: Page, private world: CustomWorld) { }

    async ingresoALaWeb() {
        //console.log('BASE_URL =', process.env.BASE_URL);
        //await this.page.goto(process.env.BASE_URL || '');
        await this.page.goto('https://demo.guru99.com/payment-gateway/index.php');
    }

    async regresoPaginaPrincipal() {
        await this.world.generateCardPage.close();
        await this.page.bringToFront();
    }

    //Imperativo
    //Obtengo datos de la tarjeta

    async obtenerNumeroTarjeta() {
        const numeroCC = await this.world.generateCardPage.getByRole('heading', { name: 'Card Number:-' }).textContent();
        this.world.tarjetaFormateada = numeroCC.match(/\d{16}/)[0];
        console.log("Card Number: ", this.world.tarjetaFormateada);
    }

    async obtenerCVV() {
        const numeroCVV = await this.world.generateCardPage.getByRole('heading', { name: 'CVV:-' }).textContent();
        this.world.cvvFormateado = numeroCVV.match(/\d{3}/)[0];
        console.log("CVV: ", this.world.cvvFormateado);
    }

    async obtenerFechaVencimiento() {
        const expDate = await this.world.generateCardPage.getByRole('heading', { name: 'Exp:-' }).textContent();
        const expFormateado = expDate.match(/\d{2}\/\d{4}/)[0];
        const [month, year] = expFormateado.split('/');
        this.world.month = month;
        this.world.year = year;
        console.log("Month: ", this.world.month + ", Year ", this.world.year);
    }

    async obtenerLimiteCredito() {
        const creditLimit = await this.world.generateCardPage.getByRole('heading', { name: 'Credit Limit' }).textContent();
        const limitFormateado = creditLimit.match(/\d+/)[0];
        console.log("Limite de credito: ", limitFormateado);
    }

    async obtenerValorProducto() {
        const price = await this.page.getByRole('heading', { name: 'Price: $' }).textContent();
        this.world.precioUnitario = parseFloat(price.match(/\d+/)[0]);
        console.log("Price: ", this.world.precioUnitario);
    }

    async obtenerNumeroOrden() {
        this.world.orderId = await this.page.locator('td:has-text("Order ID") + td strong').textContent();
    }

    async obtenerDatosCompra() {
        const firstRow = this.page.locator('table.alt tbody tr').first();
        const values = await firstRow.locator('td').allTextContents();
        [this.world.validarCardNumber, this.world.validarAmount, this.world.validarMonth, this.world.validarYear, this.world.validarCvv, this.world.validarOrderId] = values;
        console.log("Valores obtenidos: ", values);
    }

    // Ingreso de datos 

    async ingresoNumeroTarjeta(numtarjeta: string) {
        await this.page.getByRole('textbox', { name: 'Card Number' }).fill(numtarjeta);
    }

    async ingresoMesVencimiento(mes: string) {
        await this.page.locator('#month').selectOption(mes);
    }

    async ingresoAnioVencimiento(anio: string) {
        await this.page.locator('#year').selectOption(anio);
    }

    async ingresoCVV(cvv: string) {
        await this.page.getByRole('textbox', { name: 'CVV Code' }).fill(cvv);
    }

    //Mensajes en pantalla

    async mensajePagoExitoso() {
        await expect(this.page.getByRole('heading', { name: 'Payment successfull!' })).toBeVisible();
    }

    // Comparaciones

    async compararDatosCompra() {
        await expect(this.world.validarCardNumber).toBe(this.world.tarjetaFormateada);
        await expect(this.world.validarAmount).toBe("$" + this.world.totalAmount);
        await expect(Number(this.world.validarMonth)).toBe(Number(this.world.month));
        await expect(this.world.validarYear).toBe(this.world.year);
        await expect(this.world.validarCvv).toBe(this.world.cvvFormateado);
        await expect(Number(this.world.validarOrderId)).toBe(Number(this.world.orderId));
        console.log("Los valores actuales coinciden con los datos obtenidos anteriormente.");
    }

}
