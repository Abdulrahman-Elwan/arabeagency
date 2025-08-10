import teamMembers from "../data/teamData.js";

export default function DisplayTeamMembers() {
    const swiperWrapper = document.querySelector(".teamSwiper .swiper-wrapper");

    let content = "";
    teamMembers.forEach(member => {
        content += `
      <div class="swiper-slide">
        <div class="team-block">
          <div class="inner-box">
            <div class="image-box"><img src="${member.image}" alt="${member.name}"></div>
            <div class="cat"><span>${member.category}</span></div>
            <div class="social d-flex align-items-end flex-column">
              <a href="#"><i class="fab fa-facebook-square"></i></a>
              <a href="#"><i class="fab fa-twitter-square"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            <h3 class="name">${member.name}</h3>
          </div>
        </div>
      </div>
    `;
    });

    swiperWrapper.innerHTML = content;

    new Swiper(".teamSwiper", {
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            992: { slidesPerView: 3 },
        },
    });
}
