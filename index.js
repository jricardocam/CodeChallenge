const Reader=require("./lib/utils/reader");
const ExplorerService=require("./lib/services/ExplorerService");

const listaExplorers = Reader.readJsonFile("visualpartners.json");
console.log(ExplorerService.explorerlist(listaExplorers));
console.log(ExplorerService.emailsByCertification(listaExplorers));
console.log(ExplorerService.creditsUp500(listaExplorers));


