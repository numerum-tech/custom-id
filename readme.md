# Custom ID

Forked from [github.com/fazlulkarimweb/custom-id](https://github.com/fazlulkarimweb/custom-id)

A tiny, unique but customizable,🤠 human-friendly but secure, encrypted but beautiful,🐱‍🐉intuitive string ID generator for JavaScript 🎉🎉



## Inspiration

It is built for both human and machine. We use familiar letters (from given name & email) in our randomly generated ID. **People can easily recognize those familiar letters as they use it every time, everyday, every moment.** You can randomly generate IDs with uuid or nanoid, but these are not generated for human. These are for machine. But this library is for both of them.

## Wy this fork?

Resolve deprecation warning; update dependancy packages to remove npm vulnerability warning; and added a few generation options.

```js
customId({
  name: "Jhon Doe", // Optional
  email: "jhondoe@gmail.com", // Optional
  randomLength: 2, // Optional
  lowerCase: true // Optional
  //New options are :
  prefix:'PRFX',// Optional - prefix the id
  sufix:'SFX',// Optional - sufix the id
  alphaFirst:true // Optional - start with aphabetic chars
});
```

## Wy new package name ?

Unfortunately pull requests to original custom-id are pending... In the meantime at Numerum we will be using this package name for installation : ([n-custom-id](https://www.npmjs.com/package/n-custom-id)). Feel free to do like us.

npm installation

```bash
npm i n-custom-id
```

yarn installation

```bash
yarn add n-custom-id
```

## Original version Installation

You can still download they original package from here - [custom-id npm](https://www.npmjs.com/package/custom-id)

```bash
npm i n-custom-id
```

Yarn installation

```bash
yarn add n-custom-id
```



# Use Case

As it's human-friendly you can use it as **an OTP(one-time password), transaction ID, activation code, SMS code, Invitation key, React component key, Database random ID** etc. Your imagination is your limitation. 🎉🎉

## Usage

You can generate an ID instantly by giving **an empty object as the argument**. 👀👀👀

```js
var customId = require("n-custom-id");

customId({}); // Voila... A random 8 character string will be generated automatically
```

The custom ID will be generated in this format -

✌✌** 2 Number + 2 Letter + 2 Number + 2 Letter = 8 characters ** ✌✌

All those number and letter will be generated randomly. We use cryptography to generate ids (if available).

# Customizable

The most beautiful & unique advantage of this library is its **customizability**.

```js
customId({
  name: "Jhon Doe", // Optional
  email: "jhondoe@gmail.com", // Optional
  randomLength: 2, // Optional
  lowerCase: true // Optional
  //New options
  prefix:'PRFX',// Optional - prefix the with whatever string you want
  sufix:'SFX',// Optional - sufix the id with whatever string you want
  alphaFirst:true // Optional - start with aphabetic chars
});
```

## API

## customId.name (string || optional)

You can provide a name for randomization. We sanitize the string by removing space, full stop or any special characters. Then we **randomize those characters** and select required number of characters(by default 2 characters) from those characters.

If no name is provided, we just select two random alphabet.

```js
customId({
  name: "Jhon Doe" // Optional
});
```

## customId.email (string || optional)

You can provide an email too. We sanitize the email and convert it to a string by removing space or any special characters. Then we randomize those characters and select required number of characters(by default 2 characters) from those words.

If no email is provided, we just select two random alphabet.

```js
customId({
  email: "jhondoe@gmail.com" // Optional
});
```

## customId.randomLength (number || optional)

Okay... you need flexibility too. Our by default structure is -

✌✌ 2 Number + 2 Letter + 2 Number + 2 Letter = 8 character random Id✌✌
(For example: 89KL43ZY)

We can alter this pattern too. if we pass customId.randomLength the value of 4, the result will be -

```js
customId({
  randomLength: 4 // Optional // By default it's 2
});
```

✌✌ ** 4 Number + 4 String + 4 Number + 4 String = 16 character **✌✌
(For example: 9831MKLS7621GHYX)

Power is in your hand. You can make it super strong or super easy. It's your call. Use long key combination for really important random number. And use small key combination like 4K8L for OTP or inivitaion code.

## customId.lowerCase (bool || optional)

We sanitize your string by toUpperCase() method. It's for easy readibility. So every ID created is always in uppercase format. But you may want it in lowercase format. You have the freedom. 😎😎

```js
customId({
  lowerCase: true // Optional
});
```

## customId.uniqueId ( number || Optional )

It's all about control & security. If you want to manipulate your randomly generated string, you can give an unique ID. Our encryption based algorithm will use this number to make a totally unpredictable combination of IDs. We just multiply the given number with the randomly generated number and cherrypick required characters from that multiplied number randomly. It's completely optional. You can give a static number or node js environment variable to increase unpredictabilty while generating IDs. This is how we can use both server & client machine to generate random ID. (nightmare for hackers & sniffers😂)

```js
customId({
  uniqueId: 4563 // Optional // You can provide any number
});
```

## React Use Case

![react client-id](https://i.ibb.co/THvfXW0/Screenshot-267.png)

## Example Custom ID

```js
customId({
  name: "Jhon Doe",
  email: "jhondoe@gmail.com"
});
```

Rendered ID will be like below -
**19UI91RR 69KI16LU 64IA13AG 34LA94KC 58ZU48MA**

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. 🏃‍🏃‍

## License

[MIT](https://github.com/fazlulkarimweb/custom-Id/blob/master/license)
