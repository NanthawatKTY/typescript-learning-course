let username:unknown;

username = "Tae nama";
console.log((username as string).toLowerCase());
console.log((<string>username).toLowerCase());