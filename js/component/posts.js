import postsData from '../data/postsData.js';

export default function displayPosts() {
    let container= ``;

    postsData.forEach(post => {
        container += `
        <div class="news-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="inner-box">
                <div class="image-box">
                    <a href="${post.link}">
                        <img src="${post.image}" alt="${post.title}">
                    </a>
                </div>
                <div class="lower" style="text-align:right;">
                    <h4>${post.title}</h4>
                    <div class="info">
                        <div class="cat i-block"><i class="far fa-folder"></i> ${post.category}</div>
                        <div class="time i-block"><i class="far fa-clock"></i> ${post.time}</div>
                    </div>
                    <div class="link-box d-flex">
                        <a href="${post.link}" class="theme-btn">
                            متابعة القراءة <i class="far fa-long-arrow-alt-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    return container;
}