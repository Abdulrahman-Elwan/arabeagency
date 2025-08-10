import displayBannerSlide from './component/banner.js';
import DisplayServices from './component/services.js';
import DisplayMainPlanSection from './component/plan.js';
import DisplayTeamMembers from './component/team.js';
import displayAboutSection, { initAccordionEvents , initTabsEvents } from './component/about.js';
import displayPosts from './component/posts.js';
import { initBlogSingle } from './component/blog-single.js';


// servicesSection
const servicesContainer = document.querySelector('#servicesContainer');
if (servicesContainer) {
    servicesContainer.innerHTML = DisplayServices();
}

// planSection
const planContainer = document.querySelector('#planContainer');
if (planContainer) {
    planContainer.innerHTML = DisplayMainPlanSection();
}

// aboutSection
let aboutContainer = document.querySelector('#aboutSectionContainer');
if (aboutContainer) {
    aboutContainer.innerHTML = displayAboutSection();
    initAccordionEvents();
    initTabsEvents();
}

// bannerSection
let bannerSlide = document.querySelector('#bannerSlide');
if (bannerSlide) {
    bannerSlide.innerHTML = displayBannerSlide();

    $(document).ready(function(){
        $('#bannerSlide .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            rtl: true
        });
    });
}

// teamSecton
let teamContainer = document.querySelector('#teamContainer');
if (teamContainer) {
    DisplayTeamMembers();
}


// blog
let postsContainer = document.querySelector('#postsContainer');
if (postsContainer){
    postsContainer.innerHTML = displayPosts();
}



// شوف إذا الصفحة الحالية هي blog-single.html
if (window.location.pathname.includes("blog-single.html")) {
    initBlogSingle();
}



