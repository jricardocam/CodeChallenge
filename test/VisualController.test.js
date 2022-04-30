const VisualController=require("../lib/controllers/VisualController")

describe("Test 1 en Controller",()=>{
    test("Comprobar email partners" ,()=>{
        const lista = VisualController.getEmailsWithCertification();
        expect(lista).notToBeUndefined
    });
});