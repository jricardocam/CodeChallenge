const Reader=require("../utils/Reader");
const ExplorerService =require("../services/ExplorerService");

class VisualController{
    static getVisualPartners(){
        const lista = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.explorerlist(lista)
    }
    static getEmailsWithCertification(){
        const lista = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.emailsByCertification(lista)
    }
}
module.exports = VisualController;