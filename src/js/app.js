
//-------------Лабораторна по Location----------------

function transformQueryString() {
    var obj = {};
    var queryString = location.search.substring(1);
    var arrQuery = queryString.split("&");
    for (var i = 0; i < arrQuery.length; i++) {
        var temp = arrQuery[i].split("=");
        obj[temp[0]] = temp[1];
    }
    return obj;
}

console.log(transformQueryString());


