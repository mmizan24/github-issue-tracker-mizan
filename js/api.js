const BASE_URL =
"https://phi-lab-server.vercel.app/api/v1/lab";

async function fetchIssues(){

const res =
await fetch(`${BASE_URL}/issues`);

const data = await res.json();

return data.data;

}


async function fetchSingleIssue(id){

const res =
await fetch(`${BASE_URL}/issue/${id}`);

const data = await res.json();

return data.data;

}


async function searchIssueAPI(text){

const res =
await fetch(`${BASE_URL}/issues/search?q=${text}`);

const data = await res.json();

return data.data;

}