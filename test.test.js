var customId = require("./index");

describe("Is it a string?", () => {
    let custom = customId({
        name: "Masud Rana",
        email: "masudrana@gmail.com",
        randomLength: 2,
        lowerCase: true
    });

    const expected = custom;
    it("Yeah, babe ... It is a string", () => {
        expect(typeof expected).toBe("string");
    });
});

describe("Is it a prefixed id string?", () => {
    let custom = customId({
        name: "Numerum Tech",
        email: "numerum@gmail.com",
        prefix: 'PRFX'
    });

    console.log('Generated -->> ', custom);

    const expected = custom;
    it("Yeah, dude ... It starts with PRF", () => {
        expect(typeof expected).toBe("string");
        expect(expected).toMatch(/^PRFX/);
    });
});

describe("Is it a sufixed id string?", () => {
    let custom = customId({
        name: "Numerum Tech",
        email: "numerum@gmail.com",
        sufix: 'SFX'
    });

    console.log('Generated -->> ', custom);

    const expected = custom;
    it("Yeah, dude ... It ends with PRF", () => {
        expect(typeof expected).toBe("string");
        expect(expected).toMatch(/SFX$/);
    });
});

describe("Is it started with alphabetic chars?", () => {
    let custom = customId({
        name: "Numerum Tech",
        email: "numerum@gmail.com",
        alphaFirst: true
    });

    console.log('Generated -->> ', custom);

    const expected = custom;
    it("Yeah, dude ... It starts with alpha chars", () => {
        expect(typeof expected).toBe("string");
        expect(expected).toMatch(/^[a-zA-Z]/);
    });
});
