import { tabsData, accordionData } from '../data/aboutData.js';

export default function displayAboutSection() {
    const tabsButtons = tabsData.map((tab, index) =>
        `<li class="tab-btn ${index === 0 ? 'active-btn' : ''}" data-tab="#${tab.id}"><span>${tab.title}</span></li>`
    ).join('');

    const tabsContent = tabsData.map((tab, index) =>
        `
            <div class="tab ${index === 0 ? 'active-tab' : ''}" id="${tab.id}">
                <div class="row clearfix justify-content-center align-items-center">
                    <div class="image-col col-lg-5 col-md-5 col-sm-6">
                    <div class="image"><img src="${tab.image}" alt="${tab.alt}"></div>
                    </div>
                    <div class="text-col col-lg-7 col-md-7 col-sm-6">
                    <div class="text">
                        ${tab.paragraphs.map(p => `<p>${p}</p>`).join('')}
                    </div>
                    </div>
                </div>
            </div>
        `
    ).join('');

    const accordions = accordionData.map(acc =>
        `
            <div class="accordion block ${acc.active ? 'active-block' : ''}">
                <div class="acc-btn" dir="rtl">
                    <i class="${acc.icon}"></i>
                    <h3>${acc.title}</h3>
                </div>
                <div class="acc-content">
                    <div class="content">
                        <p class="text text-right">${acc.content}</p>
                    </div>
                </div>
            </div>
        `
    ).join('');


    return `
        <div class="row parent-row clearfix pt-4 align-items-center">
        <div class="tabs-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div class="tabs-box def-tabs-box">
            <ul class="tab-buttons clearfix" dir="rtl">
                ${tabsButtons}
            </ul>
            <div class="tabs-content">
                ${tabsContent}
            </div>
            </div>
        </div>
        <div class="accordions-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div class="accordion-box clearfix">
            ${accordions}
            </div>
        </div>
        </div>
    `;
}

export function initAccordionEvents() {
    const accordionBtns = document.querySelectorAll('.acc-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentAccordion = btn.parentElement;
            const isActive = currentAccordion.classList.contains('active-block');

            // اقفل كل الـ Accordions
            document.querySelectorAll('.accordion.block').forEach(acc => {
                acc.classList.remove('active-block');
            });

            // افتح الحالي لو مكنش مفتوح
            if (!isActive) {
                currentAccordion.classList.add('active-block');
            }
        });
    });
}
export function initTabsEvents() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // شيل الـ active من كل الأزرار
            tabButtons.forEach(btn => btn.classList.remove('active-btn'));
            // ضيفه للي اتضغط عليه
            button.classList.add('active-btn');

            // شيل الـ active من كل الـ tabs
            tabs.forEach(tab => tab.classList.remove('active-tab'));
            // ضيفه للتاب اللي ليه علاقة بالزرار
            const tabId = button.getAttribute('data-tab');
            document.querySelector(tabId).classList.add('active-tab');
        });
    });
}


