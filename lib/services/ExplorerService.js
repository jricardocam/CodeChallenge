class ExplorerService{
    static explorerlist(listaExplorers){
        return listaExplorers;
    }
    static emailsByCertification(listaExplorers){
        const partnersWithCertification=listaExplorers.filter((partner)=>partner.haveCertification==true);
        return partnersWithCertification.map((partner)=>partner.email);
    }
    static creditsUp500(listaExplorers){
        const partnersUp500=listaExplorers.filter((partner)=>partner.credits>500);
        return partnersUp500.map((partner)=>partner.name);
    }
       
}
module.exports=ExplorerService;