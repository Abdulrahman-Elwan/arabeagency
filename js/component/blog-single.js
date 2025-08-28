import postsData from '../data/postsData.js';

function generateSlug(title) {
    return encodeURIComponent(title.trim().replace(/\s+/g, "-"));
}

function getPostBySlug(slug) {
    // مقارنة بعد فك التشفير عشان العربي يتطابق
    return postsData.find(post => decodeURIComponent(generateSlug(post.title)) === slug);
}

export function initBlogSingle() {
    const params = new URLSearchParams(window.location.search);

    // نخليها زي ما هي من الرابط
    const slug = params.get("slug");
    console.log("Current slug from URL:", slug);

    // نجيب البوست بناءً على الـ slug
    const post = getPostBySlug(slug);

    if (post) {
        document.getElementById('postTitle').textContent = post.title;
        document.getElementById('postImage').src = post.image;
        document.getElementById('postImage').alt = post.title;
        document.getElementById('postCategory').textContent = post.category;
        document.getElementById('postTime').textContent = post.time;

        document.getElementById('postContent').innerHTML = post.content || "<p>لا يوجد محتوى</p>";
    } else {
        document.querySelector('.blog-details').innerHTML = "<p>المقال غير موجود</p>";
    }

    // آخر المقالات
    let latestPostsHTML = "";
    postsData.slice(0, 5).forEach(p => {
        const isActive = decodeURIComponent(slug) === decodeURIComponent(generateSlug(p.title)) ? "active-post" : "";
        latestPostsHTML += `
            <div class="post row align-items-start mb-3 text-right ${isActive}">
                <div class="col-8 pe-2">
                    <h6><a href="blog-single.html?slug=${generateSlug(p.title)}">${p.title}</a></h6>
                    <span class="time d-block mb-1">${p.time}</span>
                </div>
                <div class="thumb col-4 p-0">
                    <img src="${p.image}" alt="${p.title}">
                </div>
                <p>${p.content}</p>
            </div>
        `;
    });
    document.getElementById('latestPosts').innerHTML = latestPostsHTML;
}
