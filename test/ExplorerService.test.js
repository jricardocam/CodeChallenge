const ExplorerService=require("../lib/services/ExplorerService")

describe("Test para primer servicio",()=>{
    test("Comprobar explorers" ,()=>{
        const explorer1={name: "Warren"}
        const listaExplorers = ExplorerService.explorerlist(explorer1);
        expect(listaExplorers).toBe(explorer1)
    });
});