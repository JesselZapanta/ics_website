const urlParams = new URLSearchParams(window.location.search);
const newsId = parseInt(urlParams.get("id")); // Convert it to an integer

const newsContainer = document.querySelector(".viewPagecontent");

// Check if newsContainer exists before proceeding
if (newsContainer) {
    const item = news[newsId]; // Get the first news item

    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    newsItem.innerHTML = `
        <div class="content_img viewPage" data-aos="fade-up">
            <img src="${item.thumbnail}" alt="" />
        </div>
        <div class="content_info" data-aos="fade-up">
            <h1>${item.title}</h1>
            <p>${item.body}</p>
            <div class="view">
                <a href="news.html">View More</a>
            </div>
        </div>
    `;

    newsContainer.appendChild(newsItem);
}
