let allIssues = [];

window.onload = async function(){

allIssues = await fetchIssues();

displayIssues(allIssues);

}

function displayIssues(issues){

const container =
document.getElementById("issueContainer");

container.innerHTML = "";

issues.forEach(issue => {

let border =
issue.status === "open"
? "border-green-500"
: "border-purple-500";

const div = document.createElement("div");

div.className =
`border-t-4 ${border} shadow p-4 cursor-pointer rounded-md mt-5 text-left`;

div.innerHTML = `

<h2 class="font-bold text-wrap">
${issue.title}
</h2>
<div class="flex justify-between mt-5 mb-5">
 <img src="./assets/Open-Status.png" alt="">
<button class="bg-yellow-300 rounded-md"> ${issue.priority}</button>
</div>
<p>${issue.description}</p>

<p>Status: ${issue.status}</p>

<p>Category: ${issue.category}</p>

<p>Author: ${issue.author}</p>


<p>createdAt:${issue.createdAt}

`;

div.onclick = () => showModal(issue.id);

container.appendChild(div);

});

}

function filterIssues(type){

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

setActiveTab(type);

}

// toggling the btn 

function setActiveTab(type){

document.querySelectorAll(".tabBtn")
.forEach(btn => {
btn.classList.remove("bg-blue-500","text-white");
});

document.getElementById(type+"Btn")
.classList.add("bg-blue-500","text-white");

}

// searching function 

async function searchIssues(){

const text =
document.getElementById("searchInput").value;

const result =
await searchIssueAPI(text);

displayIssues(result);

}

// spinnier option 

function showSpinner(){
document.getElementById("spinner").classList.remove("hidden");
}

function hideSpinner(){
document.getElementById("spinner").classList.add("hidden");
}




