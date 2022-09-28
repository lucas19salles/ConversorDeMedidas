/* Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milimetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetros (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso).
*/

let valor = prompt("Digite um valor em metros? ");
let opcao = prompt(
  "1- Milimetro(mm) \n2- Centímetro(cm) \n3- Decímetro(dm) \n4- Decâmetros(dam) \n5- Hectômetro(hm) \n6- Quilômetro(km)"
);

let valorConvertindo = parseFloat(valor);
let opcaoNova = parseFloat(opcao);
let conversao = 0;

switch (opcaoNova) {
  case 1:
    conversao = valorConvertindo * 1000;
    alert(
      `O valor de ${valorConvertindo} metros foi convertindo em ${conversao} mm`
    );
    break;

  case 2:
    conversao = valorConvertindo * 100;
    alert(
      `O valor de ${valorConvertindo} metros foi convertindo em ${conversao} cm`
    );
    break;

  case 3:
    conversao = valorConvertindo * 10;
    alert(
      `O valor de ${valorConvertindo} metros foi convertindo em ${conversao} dm`
    );
    break;

  case 4:
    conversao = valorConvertindo / 10;
    alert(
      `O valor de ${valorConvertindo} metros foi convertindo em ${conversao} dam`
    );
    break;

  case 5:
    conversao = valorConvertindo / 100;
    alert(
      `O valor de ${valorConvertindo} metros foi convertindo em ${conversao} hm`
    );
    break;

  case 6:
    conversao = valorConvertindo / 1000;
    alert(
      `O valor em ${valorConvertindo} metros foi convertindo em ${conversao} km`
    );
    break;

  default:
    alert("Opção Inválida");
    break;
}
