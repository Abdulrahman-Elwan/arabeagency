const mainPlanSection = {
    image : 'images/resource/mainPlanImag.jpg',
    mainText : 'خطط واستراتيجيات مبتكرة لتعزيز حضورك الرقمي',
    secText1 : 'في وكالة عربي نضع بين يديك حلولًا تسويقية مدروسة تعكس هوية علامتك التجارية، وتساعدك على الوصول إلى جمهورك المستهدف بأكثر الطرق فاعلية واحترافية.',
    secText2 : 'نحن نؤمن أن النجاح في العالم الرقمي يحتاج إلى رؤية واضحة، محتوى متميز، وحملات إبداعية مدروسة تضمن لك التفاعل والنمو المستمر.',
    liText : [
        'إدارة حملات التسويق الرقمي باحترافية',
        'تحسين محركات البحث (SEO) لزيادة الظهور',
        'تصميم متجاوب يتوافق مع جميع الأجهزة',
    ]
}

function liTextDisplay(){
    let cartona = ``;
    mainPlanSection.liText.forEach((element)=>{
        cartona += `<li>${element}</li>`
    })
    return cartona ;
}

export default function DisplayMainPlanSection () {
    let cartona = liTextDisplay();
    let box = `
        <div class="image-col col-lg-6 col-md-12 col-sm-12">
            <div class="inner">
                <div class="image">
                    <div class="bg-pattern"></div>
                    <img src="${mainPlanSection.image}"
                        alt="خطط واستراتيجيات لتعزيز حضورك الرقمي">
                </div>
            </div>
        </div>
        <div class="text-col col-lg-6 col-md-12 col-sm-12">
            <div class="inner text-right">
                <h3>${mainPlanSection.mainText}</h3>
                <div class="text">
                    <p>${mainPlanSection.secText1}</p>

                    <p>${mainPlanSection.secText2}</p>

                    <ul>
                        ${cartona}
                    </ul>
                </div>
            </div>
        </div>
    `
    return box;
}