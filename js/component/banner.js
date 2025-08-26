import bannerData from '../data/bannerData.js';

export default function displayBannerSlide(){
    let slideItem = ``;

    bannerData.forEach(slid => {
        slideItem += `
            <div class="slide-item">
                <div class="image-layer" style="background-image: url(${slid.image});"></div>
                <div class="auto-container">
                    <div class="content-box">
                        <div class="content">
                            <div class="inner">
                                <h2>${slid.title}</h2>
                                <p class="text">${slid.text}</p>
                                <div class="links-box clearfix">
                                    <div class="link">
                                        <a href="${slid.link}" class="theme-btn btn-style-one">
                                            <span><i class="fa-solid fa-arrow-right"></i>${slid.linkText}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // نرجّع العنصر كله عليه owl-carousel
    return `<div class="owl-carousel owl-theme">${slideItem}</div>`;
}