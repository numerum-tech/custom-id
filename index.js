"use strict";
var cryptoRandom = require("math-random");

function idGenerate() {
    var length =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    var scope =
        arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (typeof length !== "number") throw new Error("length must be a number");
    if (typeof scope !== "string") throw new Error("scope must be a string");
    var str = "";
    var l = scope.length;

    for (var i = 0; i < length; i++) {
        str += scope.charAt(Math.floor(Math.random() * l));
    }

    return str;
}

module.exports = function customId(customId) {
    if (typeof customId === "undefined") {
        throw new Error(
            "Custom Id expects an object as the argument. Make sure all values of that object are string."
        );
    }
    let multiply = customId.uniqueId || 97232;
    let crypticNotSecure = Math.floor(Math.random() * multiply);
    let crypticSecureFun = cryptoRandom() * multiply;
    let crypticSecure = Math.floor(crypticSecureFun);
    let length = customId.randomLength || 2;
    let firstId = idGenerate(
        length,
        crypticSecure.toString() || crypticNotSecure.toString()
    );

    if (customId.name) {
        var name = idGenerate(
            length,
            customId.name.replace(/[^a-zA-Z0-9]/g, "").toString() || ""
        );
    } else {
        var name = idGenerate(length, "ABCDEFGHIJKLMNOPQRSTUVXYZ");
    }

    if (customId.email) {
        var email = idGenerate(
            length,
            customId.email.replace(/[^a-zA-Z0-9]/g, "").toString() || ""
        );
    } else {
        var email = idGenerate(length, "ABCDEFGHIJKLMNOPQRSTUVXYZ");
    }

    let lastId = idGenerate(
        length,
        crypticSecure.toString() || crypticNotSecure.toString()
    );

    let prefix = customId.prefix ? customId.prefix : '';
    let sufix = customId.sufix ? customId.sufix : '';

    if (customId.alphaFirst === true) {
        var result = prefix + name + firstId + name + lastId + sufix;
    } else {
        var result = prefix + firstId + name + lastId + email + sufix;
    }

    if (customId.lowerCase) {
        return result.toLowerCase();
    } else {
        return result.toUpperCase();
    }
};
