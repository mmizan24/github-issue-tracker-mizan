let allIssues = [];

window.onload = async function () {

    allIssues = await fetchIssues();

    displayIssues(allIssues);

}

function displayIssues(issues) {

    const container =
        document.getElementById("issueContainer");

    container.innerHTML = "";

    issues.forEach(issue => {

        let border =
            issue.status === "open"
                ? "border-green-500"
                : "border-purple-500";
        
                let img=
                issue.status==='open'
                ? `<img src="./assets/Open-Status.png" alt="Open">`
                : `<img src="./assets/Closed- Status .png" alt="Closed">`;

        const div = document.createElement("div");

        div.className =
            `border-t-4 ${border} shadow p-4 cursor-pointer rounded-md mt-5 text-left`;

        div.innerHTML = `

        

<h2 class="font-bold text-wrap">
${issue.title}
</h2>
<div class="flex justify-between mt-5 mb-5">
${img}

<button class="bg-red-300 opacity-50 text-red-600 rounded-md"> ${issue.priority}</button>
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


function filterIssues(type) {

    let filtered = allIssues;

    if (type === "open") {
        filtered = allIssues.filter(
            i => i.status === "open"
        );
    }

    if (type === "closed") {
        filtered = allIssues.filter(
            i => i.status === "closed"
        );
    }

    displayIssues(filtered);

    setActiveTab(type);

}

// toggling the btn 

function setActiveTab(type) {

    document.querySelectorAll(".tabBtn")
        .forEach(btn => {
            btn.classList.remove("bg-blue-500", "text-white");
        });

    document.getElementById(type + "Btn")
        .classList.add("bg-blue-500", "text-white");

}

// searching function 

async function searchIssues() {

    const text =
        document.getElementById("searchInput").value;

    const result =
        await searchIssueAPI(text);

    displayIssues(result);

}

// creating modal

async function showModal(id){

const issue =
await fetchSingleIssue(id);

document.getElementById("modalTitle")
.innerText = issue.title;

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





