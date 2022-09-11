// api variable
const dd_api_news_url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdmdavid.com%2Ffeed%2F';

getNews();

// fetch api
async function getNews() {
    try {
        const res = await fetch(dd_api_news_url);
        const data = await res.json();
        const articles = data.items;

        articles.forEach(article => {
            const artBody = ` 
                <div class="thumbnailContainer mb-3">
                    <img width=390 height=220 src="${article.thumbnail}" class="thumbnail text-center">
                </div>
                <div class="title"><h4>${article.title}<h4></div>
                <div class="pubDate"><p><strong>Posted on:</strong> ${article.pubDate}</p></div>
                <hr />
                <div class="content"><p>${article.description}</p></div>
                <hr />
                <div class="postedBy"><p><strong>Author:</strong> ${article.author}</p></div>
                <div class="categories"><p><strong>Categories:</strong> <em>${article.categories}</em></p></div>
                <a href="${article.link}" type="button" class="btn btn-primary" target="blank">Read article</a>
            `

            const newsUl = document.getElementById('newsUl');
            const div = document.createElement('div');
            newsUl.appendChild(div);
            div.className = 'col mb-5';
            div.innerHTML = artBody;
        })
    }
    catch (err) {
        console.log(err);
    }
}

