class ExplorerService{
    static explorerlist(listaExplorers){
        return listaExplorers
    }
    static emailsByCertification(listaExplorers){
        const partnersWithCertification=listaExplorers.filter((partner)=>partner.haveCertification==true)
        return partnersWithCertification.map((partner)=>partner.email)
    }
}
module.exports=ExplorerService;