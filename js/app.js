// if(localStorage.getItem("isLoggedIn") !== "true"){
// window.location.href = "index.html";
// }


let allIssues = [];

window.onload = async function(){

showSpinner();

allIssues = await fetchIssues();

displayIssues(allIssues);

updateIssueCount(allIssues);

hideSpinner();

}


// issue count 

function updateIssueCount(issues){

const countElement =
document.getElementById("count-issue");

countElement.innerText = issues.length;

}


// display issue 


function displayIssues(issues) {

    const container = document.getElementById("issueContainer");
    container.innerHTML = "";

    issues.forEach(issue => {

        let border =
            issue.status === "open"
                ? "border-green-500"
                : "border-purple-500";

        let img =
            issue.status === 'open'
                ? `<img src="./assets/Open-Status.png" class="w-6 h-6" alt="Open">`
                : `<img src="./assets/Closed- Status .png" class="w-6 h-6" alt="Closed">`;

        const div = document.createElement("div");

        div.className =
            `border-t-4 ${border} shadow p-4 cursor-pointer rounded-md text-left bg-white hover:shadow-lg transition`;

        div.innerHTML = `

<h2 class="font-bold text-lg break-words">
${issue.title}
</h2>

<div class="flex justify-between items-center mt-4 mb-4">

${img}

<button class="bg-red-200 text-red-600 text-xs sm:text-sm rounded-md px-2 py-1">
${issue.priority}
</button>

</div>

<p class="text-gray-500 text-sm break-words">
${issue.description}
</p>

<div class="flex flex-wrap gap-2 mt-3 text-xs sm:text-sm text-gray-600">

<span class="bg-red-100 shadow-sm rounded-sm px-2 text-red-400">
<i class="fa-solid fa-bug"></i>
${issue.labels[0] || "follow suggestion"}
</span>

<span class="bg-yellow-100 shadow-sm rounded-sm px-2 text-yellow-600">
${issue.labels[1] || "follow suggestion"}
</span>

</div>

<hr class="border-gray-300 my-3 w-full">

<p class="text-sm">Status: ${issue.status}</p>
<p class="text-sm">Category: ${issue.category}</p>
<p class="text-sm">Author: ${issue.author}</p>

<p class="text-xs text-gray-500 mt-1">
createdAt: ${issue.createdAt}
</p>
`;

        div.onclick = () => showModal(issue.id);

        container.appendChild(div);

    });

}

// function displayIssues(issues) {

//     const container =
//         document.getElementById("issueContainer");

//     container.innerHTML = "";

//     issues.forEach(issue => {

//         let border =
//             issue.status === "open"
//                 ? "border-green-500"
//                 : "border-purple-500";
        
//                 let img=
//                 issue.status==='open'
//                 ? `<img src="./assets/Open-Status.png" alt="Open">`
//                 : `<img src="./assets/Closed- Status .png" alt="Closed">`;

//         const div = document.createElement("div");

//         div.className =
//             `border-t-4 ${border} shadow p-4 cursor-pointer rounded-md mt-5 text-left`;

//         div.innerHTML = `

        

// <h2 class="font-bold text-wrap">
// ${issue.title}
// </h2>
// <div class="flex justify-between mt-5 mb-5">
// ${img}

// <button class="bg-red-300 opacity-50 text-red-600 rounded-md px-2"> ${issue.priority}</button>
// </div>
// <p class="text-gray-500">${issue.description}</p>

// <div class="flex gap-2 mt-3 text-sm text-gray-600">

// <span class="bg-red-100 shadow-sm rounded-sm px-2 text-red-400" ><i class="fa-solid fa-bug "></i>${issue.labels[0] || "follow suggestion "}</span>

// <span class="bg-yellow-100 shadow-sm rounded-sm px-2 text-red-400">${issue.labels[1] || "follow suggestion "}</span>

// </div>

// <hr class=" border-gray-300 p-2 mt-2 w-full">

// <p>Status: ${issue.status}</p>

// <p>Category: ${issue.category}</p>

// <p>Author: ${issue.author}</p>


// <p>createdAt:${issue.createdAt}

// `;

//         div.onclick = () => showModal(issue.id);

//         container.appendChild(div);
        

//     });


// }

function filterIssues(type){

showSpinner();

setTimeout(() => {

let filtered = allIssues;

if(type === "open"){
filtered = allIssues.filter(
i => i.status === "open"
);
}

if(type === "closed"){
filtered = allIssues.filter(
i => i.status === "closed"
);
}

displayIssues(filtered);
updateIssueCount(filtered);

setActiveTab(type);

hideSpinner();

}, 200); // setting the time to see the spin in the screen ;

}

// toggling the btn .....

function setActiveTab(type) {

    document.querySelectorAll(".tabBtn")
        .forEach(btn => {
            btn.classList.remove("bg-blue-500", "text-white");
        });

    document.getElementById(type + "Btn")
        .classList.add("bg-blue-500", "text-white");

}

// searching function 

async function searchIssues(){

const text =
document.getElementById("searchInput").value;

showSpinner();

const result =
await searchIssueAPI(text);

displayIssues(result);

updateIssueCount(result);

hideSpinner();

}

// creating modal

async function showModal(id){

const issue =
await fetchSingleIssue(id);

document.getElementById("modalTitle")
.innerText = issue.title;

// document.getElementById("label-one")
const label = document.getElementById("label-one");

label.innerHTML = `<i class="fa-solid fa-bug"></i> ${issue.labels?.[0] || "follow suggestion"}`;

document.getElementById("label-two")
.innerText = issue.labels?.[1] || "follow suggestion";


document.getElementById("modalDescription")
.innerText = issue.description;

document.getElementById("modal")
.classList.remove("hidden");

}



function closeModal(){

document.getElementById("modal")
.classList.add("hidden");

}

// spinnier option 

function showSpinner(){
document.getElementById("spinner")
.classList.remove("hidden");
}

function hideSpinner(){
document.getElementById("spinner")
.classList.add("hidden");
}

// logout function

function logout(){

localStorage.removeItem("isLoggedIn");

window.location.href = "index.html";

}






