const Reader=require("../lib/utils/reader");

describe("Test para el Reader",()=>{
    test("Comprobar que se lea el archivo visualpartners.jsob" ,()=>{
        const listaExplorers = Reader.readJsonFile("visualpartners.json");
        expect(listaExplorers).tobeDefinded;
    });
});