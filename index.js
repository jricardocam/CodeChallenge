const Reader=require("./lib/utils/reader")

const listaExplorers = Reader.readJsonFile("visualpartners.json");
console.log(listaExplorers);
