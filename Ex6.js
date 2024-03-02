function somaArray(arr) {
    var soma = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        soma += num;
    }
    return soma;
}
function maiorElemento(arr) {
    var maior = arr[0];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var num = arr_2[_i];
        if (num > maior) {
            maior = num;
        }
    }
    return maior;
}
