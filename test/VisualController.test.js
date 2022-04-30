const VisualController=require("../lib/controllers/VisualController");

describe("Test 1 en Controller",()=>{
    test("Comprobar email partners" ,()=>{
        const lista = VisualController.getEmailsWithCertification();
        expect(lista).notToBeUndefined;
    });
});

describe("Test 2 en Controller",()=>{
    test("Comprobar credits partners" ,()=>{
        const lista = VisualController.getCreditsUp500();
        expect(lista).notToBeUndefined;
    });
});