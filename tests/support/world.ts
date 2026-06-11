import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext } from '@playwright/test';
//Agrego page objets
import { TextPage } from '../pages/TextPage';
import { ClickPage } from '../pages/ClickPage';
import { SelectPage } from '../pages/SelectPage';
import { ButtonPage } from '../pages/ButtonPage';

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    browserName!: string;

    //Variable para almacenar la intancia de las clases page
    textPage!: TextPage;
    clickPage!: ClickPage;
    selectPage!: SelectPage;
    buttonPage!: ButtonPage;

    //Variables compartidas
    //Cambio a otra pagina o tab (popup)
    generateCardPage?: Page;

    //Tarjeta
    tarjetaFormateada?: string;
    cvvFormateado?: string;
    month?: string;
    year?: string;

    //Compra
    precioUnitario?: number;
    totalAmount?: number;
    orderId?: string;

    //Validacion de datos
    validarCardNumber?: string;
    validarAmount?: string;
    validarMonth?: string;
    validarYear?: string;
    validarCvv?: string;
    validarOrderId?: string;

}

setWorldConstructor(CustomWorld);
