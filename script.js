const seal = document.getElementById("seal");
const envelope = document.getElementById("envelope");

seal.addEventListener("click", () => {
    envelope.classList.add("open");
});

const closeBtn = document.getElementById("closeLetter");
console.log(closeBtn);

closeBtn.addEventListener("click", () => {
    envelope.classList.remove("open");
});


/* ---------- NOTEBOOK ---------- */

const notebook = document.getElementById("notebook");
const notebookPage = document.getElementById("notebookPage");
const closeNotebook = document.getElementById("closeNotebook");

notebook.addEventListener("click", () => {
    notebookPage.style.display = "block";
});

closeNotebook.addEventListener("click", () => {
    notebookPage.style.display = "none";
});


/* ---------- POEMS ---------- */

const poems = [
{
    title: "The flower",

    text: `In the middle of a flower field,
One shines brightly among the others.

She is beautiful like a rose,
She is brave like an iris,
She is strong like a gladiolus,
She is sweet like a cornflower.

Every flower around is looking at her,
Her name is Eve.`
},

{
    title: "You",

    text: `I know you don't see it,
    I know you won't believe me,
    But I've talked to the sunrise this morning
    And he told me he was jealous of your smile
    The way it can illuminates even the places that haven't seen the light for a long time
    
    I know you don't see it,
    I know you won't believe me,
    But I've heard birds murmurs
    who feel themselves becoming uncertain since they heard your voice ring in their ears
    
    I know you don't see it,
    I know you won't believe me,
    But the see is strangely calm since she heard you moving
    If the moon controls the tides, 
    I'm sure that you control the moon
    
    I know you don't see it,
    I know you won't believe me
    But if I could share you my eyes and ears,
    If you could hear the rumors I hear,
    You could hear the whole world holding its breath at the mere possibility of your existence`
}
];

const poemList =
    document.getElementById("poemList");

poems.forEach((poem, index) => {

    const li =
        document.createElement("li");

    li.textContent =
        poem.title;

    li.addEventListener("click", () => {
        openPoem(index);
    });

    poemList.appendChild(li);

});

const summaryPage =
    document.getElementById("summaryPage");

const poemPage =
    document.getElementById("poemPage");

const poemTitle =
    document.getElementById("poemTitle");

const poemText =
    document.getElementById("poemText");

const backButton =
    document.getElementById("backToSummary");


function openPoem(index) {

    poemTitle.textContent =
        poems[index].title;

    poemText.textContent =
        poems[index].text;

    summaryPage.style.display = "none";

    poemPage.style.display = "block";
}


backButton.addEventListener("click", () => {

    poemPage.style.display = "none";

    summaryPage.style.display = "block";

});

const drawings = [

{
    title: "You",
    date: "18 June 2026",
    image: "YOU.jpg"
},

{
    title: "For You",
    date: "18 June 2026",
    image: "doggierose.jpg"
},

{
    title: "New flower",
    date: "26 June 2026",
    image: "doggieflower.jpg"

];

const box =
    document.getElementById("box");

const boxPage =
    document.getElementById("boxPage");

const closeBox =
    document.getElementById("closeBox");

const drawingGallery =
    document.getElementById("drawingGallery");


box.addEventListener("click", () => {

    boxPage.style.display = "block";

});


closeBox.addEventListener("click", () => {

    boxPage.style.display = "none";

});

drawings.forEach(drawing => {

    const card =
        document.createElement("div");

    card.classList.add("drawing-card");

    card.innerHTML = `
        <img src="${drawing.image}">
        <h3>${drawing.title}</h3>
        <p>${drawing.date}</p>
    `;

    drawingGallery.appendChild(card);

});
