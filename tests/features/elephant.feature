Feature: Payment Gateway

   @elephant
   Scenario: Compra juguete de Elefante
      Given ingreso a la web de DemoGuru
      When doy click en generar tarjeta
      And copio el numero de tarjeta
      And copio el numero de cvv
      And copio la fecha de vencimiento
      And copio el monto limite
      And regreso a la pagina principal
      And capturo el monto individual del producto
      And selecciono la cantidad del producto a comprar
      And doy click en comprar
      And ingreso el numero de tarjeta
      And ingreso el mes de vencimiento
      And ingreso el año de vencimiento
      And ingreso el cvv
      And doy click en pagar

      Then me muestra el mensaje de pago exitoso
      And el numero de orden de compra

      When doy click en home
      And doy click en revisar limite de credito
      Then ingreso valor de la tarjeta
      And doy en submit

      Then me muestra datos de la compra
      And compara datos con valores obtenidos anteriormente
      Then ir a la pantalla principal

   @declarativo
   Scenario: Compra juguete de Elefante - Declarativo
      Given ingreso a la web de DemoGuru
      And que existe una tarjeta de crédito válida para realizar compras

      When el usuario compra un juguete de Elefante

      Then la compra es realizada con exito
      And se genera una orden de compra
      And el detalle de la transacción queda registrado correctamente