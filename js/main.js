import displayBannerSlide from './component/banner.js';
import DisplayServices from './component/services.js';
import DisplayMainPlanSection from './component/plan.js';
import DisplayTeamMembers from './component/team.js';
import displayAboutSection, { initAccordionEvents , initTabsEvents } from './component/about.js';
import displayPosts from './component/posts.js';


// عرض الخدمات
const servicesContainer = document.querySelector('#servicesContainer');
if (servicesContainer) {
    servicesContainer.innerHTML = DisplayServices();
}

// عرض قسم الخطة
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

// عرض فريق العمل
let teamContainer = document.querySelector('#teamContainer');
if (teamContainer) {
    DisplayTeamMembers();
}


// تشغيل عرض البوستات بعد تحميل الصفحة
let postsContainer = document.querySelector('#postsContainer');
if (postsContainer){
    postsContainer.innerHTML = displayPosts();
}





