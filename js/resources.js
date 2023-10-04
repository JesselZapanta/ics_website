const resources = [
  {
    id: 0,
    thumbnail: "/images/res_1.png",
    title: "W3shool",
    body: "W3Schools is a freemium educational website for learning coding online. W3Schools offers courses covering many aspects of web development. W3Schools also publishes free HTML templates.",
    link: "https://www.w3schools.com/",
  },
  {
    id: 2,
    thumbnail: "/images/res_2.png",
    title: "Ms Teams",
    body: "Microsoft Teams for education brings everyone and everything together in one powerful communication app for schools–and it’s free for students and teachers of all grade levels with a valid email address.",
    link: "https://teams.microsoft.com/",
  },
  {
    id: 3,
    thumbnail: "/images/res_3.png",
    title: "Github",
    body: "GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, It makes it easy for developers to share code files and collaborate with fellow developers.",
    link: "https://github.com/",
  },
  {
    id: 4,
    thumbnail: "/images/res_4.png",
    title: "YouTube",
    body: "The popular video sharing platform YouTube has become widely used in educational settings.",
    link: "https://youtube.com/",
  },
  {
    id: 5,
    thumbnail: "/images/res_5.png",
    title: "Stack Overflow",
    body: "Stack Overflow is a question-and-answer website for programmers. It is the flagship site of the Stack Exchange Network.",
    link: "https://stackoverflow.com/",
  },
  {
    id: 6,
    thumbnail: "/images/res_6.png",
    title: "Vs Code",
    body: " VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS.",
    link: "https://code.visualstudio.com/docs/editor/whyvscode",
  },
];

const container = document.querySelector(".content_container");

resources.forEach((item) => {
  const newsItem = document.createElement("div");
  newsItem.classList.add("content");
  newsItem.setAttribute("data-aos", "fade-up");

  newsItem.innerHTML = `
                    <div class="content_img">
                    <img src="${item.thumbnail}" alt="" />
                    </div>
                    <div class="content_info">
                    <div class="info">
                        <h1>${item.title}</h1>
                        <p>
                        ${item.body}
                        </p>
                    </div>
                    <div class="view">
                        <a href="${item.link}" target=”_blank” >View Details</a>
                    </div>
                    </div>
    `;

  container.appendChild(newsItem);
});
