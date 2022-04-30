const express = require("express");
const VisualController=require("./controllers/VisualController");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partners Api welcome!"});
});

app.listen(port, () => {
    console.log(`Visual Partners API in localhost:${port}`);
});

app.get( "/v1/students", (request, response) => {
    const list =request.params.list;
    const visualPartners = VisualController.getVisualPartners(list);
    response.json(visualPartners);
});

app.get( "/v1/students/emails", (request, response) => {
    const list =request.params.list;
    const visualPartnersMails = VisualController.getEmailsWithCertification(list);
    response.json(visualPartnersMails);
});

app.get( "/v1/students/credits", (request, response) => {
    const list =request.params.list;
    const visualPartnersCredits = VisualController.getCreditsUp500(list);
    response.json(visualPartnersCredits);
});