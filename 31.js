var areArraysSame = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        return false;
    } else if (arr1[i] === arr2[i]) {
        return true;
    }
    }
}

