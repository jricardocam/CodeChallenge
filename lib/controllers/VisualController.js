const Reader=require("../utils/Reader");
const ExplorerService =require("../services/ExplorerService");

class VisualController{
    static getVisualPartners(){
        const lista = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.explorerlist(lista)
    }
}
module.exports = VisualController;