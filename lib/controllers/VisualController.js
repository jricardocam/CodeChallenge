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
    static getCreditsUp500(){
        const lista = Reader.readJsonFile("visualpartners.json");
        return ExplorerService.creditsUp500(lista)
    }
}
module.exports = VisualController;