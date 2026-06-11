import { Given, When, Then } from '@cucumber/cucumber'; // Importamos las funciones de Cucumber para definir los pasos
import { CustomWorld } from '../support/world'; // Importamos la clase CustomWorld para acceder a las propiedades del navegador y la página
import { TextPage } from '../pages/TextPage';
import { ClickPage } from '../pages/ClickPage';
import { SelectPage } from '../pages/SelectPage';
import { ButtonPage } from '../pages/ButtonPage';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30000);

Given('ingreso a la web de DemoGuru', async function (this: CustomWorld) {
    await this.textPage.ingresoALaWeb();
});

When('doy click en generar tarjeta', async function (this: CustomWorld) {
    await this.clickPage.clickGenerarTarjeta();
});

When('copio el numero de tarjeta', async function (this: CustomWorld) {
    await this.textPage.obtenerNumeroTarjeta();
});

When('copio el numero de cvv', async function (this: CustomWorld) {
    await this.textPage.obtenerCVV();
});

When('copio la fecha de vencimiento', async function (this: CustomWorld) {
    await this.textPage.obtenerFechaVencimiento();
});

When('copio el monto limite', async function (this: CustomWorld) {
    await this.textPage.obtenerLimiteCredito();
});

When('regreso a la pagina principal', async function (this: CustomWorld) {
    await this.textPage.regresoPaginaPrincipal();
});

When('capturo el monto individual del producto', async function (this: CustomWorld) {
    await this.textPage.obtenerValorProducto();
});

When('selecciono la cantidad del producto a comprar', async function (this: CustomWorld) {
    await this.selectPage.seleccionarCantidadProductos(4);
});

When('doy click en comprar', async function (this: CustomWorld) {
    await this.buttonPage.clickComprar();
});

When('ingreso el numero de tarjeta', async function (this: CustomWorld) {
    await this.textPage.ingresoNumeroTarjeta(this.tarjetaFormateada);
});

When('ingreso el mes de vencimiento', async function (this: CustomWorld) {
    await this.textPage.ingresoMesVencimiento(this.month);
});

When('ingreso el año de vencimiento', async function (this: CustomWorld) {
    await this.textPage.ingresoAnioVencimiento(this.year);
});

When('ingreso el cvv', async function (this: CustomWorld) {
    await this.textPage.ingresoCVV(this.cvvFormateado);
});

When('doy click en pagar', async function (this: CustomWorld) {
    await this.buttonPage.clickPagar();
});

Then('me muestra el mensaje de pago exitoso', async function (this: CustomWorld) {
    await this.textPage.mensajePagoExitoso();
});

Then('el numero de orden de compra', async function (this: CustomWorld) {
    await this.textPage.obtenerNumeroOrden();
});

Then('doy click en home', async function (this: CustomWorld) {
    await this.buttonPage.clickHome();
});

Then('doy click en revisar limite de credito', async function (this: CustomWorld) {
    await this.clickPage.clickRevisarlimiteCredito();
});

Then('ingreso valor de la tarjeta', async function (this: CustomWorld) {
    await this.textPage.ingresoNumeroTarjeta(this.tarjetaFormateada);
});

Then('doy en submit', async function (this: CustomWorld) {
    await this.buttonPage.clickSubmit();
});

Then('me muestra datos de la compra', async function (this: CustomWorld) {
    await this.textPage.obtenerDatosCompra();
});

Then('compara datos con valores obtenidos anteriormente', async function (this: CustomWorld) {
    await this.textPage.compararDatosCompra();
});

Then('ir a la pantalla principal', async function (this: CustomWorld) {
    await this.clickPage.irPantallaPrincipal();
});

//Pasos que faltan de forma declarativa

When('que existe una tarjeta de crédito válida para realizar compras', async function (this: CustomWorld) {
    await this.clickPage.clickGenerarTarjeta();
    await this.textPage.obtenerNumeroTarjeta();
    await this.textPage.obtenerCVV();
    await this.textPage.obtenerFechaVencimiento();
    await this.textPage.obtenerLimiteCredito();
    await this.textPage.regresoPaginaPrincipal();
});

When('el usuario compra un juguete de Elefante', async function (this: CustomWorld) {
    await this.textPage.obtenerValorProducto();
    await this.selectPage.seleccionarCantidadProductos(4);
    await this.buttonPage.clickComprar();
    await this.textPage.ingresoNumeroTarjeta(this.tarjetaFormateada);
    await this.textPage.ingresoMesVencimiento(this.month);
    await this.textPage.ingresoAnioVencimiento(this.year);
    await this.textPage.ingresoCVV(this.cvvFormateado);
    await this.buttonPage.clickPagar();
});

Then('la compra es realizada con exito', async function (this: CustomWorld) {
    await this.textPage.mensajePagoExitoso();
});

Then('se genera una orden de compra', async function (this: CustomWorld) {
    await this.textPage.obtenerNumeroOrden();
    await this.buttonPage.clickHome();
});

Then('el detalle de la transacción queda registrado correctamente', async function (this: CustomWorld) {
    await this.clickPage.clickRevisarlimiteCredito();
    await this.textPage.ingresoNumeroTarjeta(this.tarjetaFormateada);
    await this.buttonPage.clickSubmit();
    await this.textPage.obtenerDatosCompra();
    await this.textPage.compararDatosCompra();
    await this.clickPage.irPantallaPrincipal();
});