// api variable
const dd_api_url = 'https://www.dnd5eapi.co/api/classes/';

// fetch api
document.body.onload = getData;

async function getData() {
    try {
        const res = await fetch(dd_api_url);
        const data = await res.json();
        const clsList = document.getElementById('clsList');
        const names = data.results;

        // forEach to print all classes in <ul> element
        names.forEach(name => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const clsListEl = name.name;
            const clsListNode = document.createTextNode(clsListEl);
            li.appendChild(a);
            a.appendChild(clsListNode);

            // adding href attributes based on class names
            a.href = `/classes/${name.index}.html`;
            clsList.appendChild(li);
        });

    }
    catch (err) {
        console.log(err);
    }
}

