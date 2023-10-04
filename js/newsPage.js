const container = document.querySelector(".content_container");

news.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("content");
    newsItem.setAttribute("data-aos", "fade-up");

    newsItem.innerHTML = `
                        <div class="content_img">
                                    <img src="${item.thumbnail}" alt="" />
                                </div>
                                <div class="content_info">
                                    <p class="news_title">
                                        ${item.title}
                                    </p>
                                    <div class="view">
                                        <a href="newsPage.html?id=${item.id}">View Details</a>
                                    </div>
                                </div>
    `;

    container.appendChild(newsItem);
});
