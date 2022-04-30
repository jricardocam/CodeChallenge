const ExplorerService=require("../lib/services/ExplorerService")

describe("Test para primer servicio",()=>{
    test("Comprobar explorers" ,()=>{
        const explorer1={name: "Warren"}
        const listaExplorers = ExplorerService.explorerlist(explorer1);
        expect(listaExplorers).toBe(explorer1)
    });
});

describe("Test para emails de los partners",()=>{
    test("Comprobar email partners" ,()=>{
        const partner1={haveCertification:true,email:"partner1@launchx.com"}
        const partner2={haveCertification:false,email:"partner2@launchx.com"}        
        const listaExplorers = ExplorerService.emailsByCertification([partner1,partner2]);
        expect(listaExplorers).toContain("partner1@launchx.com")
    });
});