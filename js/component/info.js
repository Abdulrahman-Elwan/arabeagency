import Social_links from '../data/infoData.js';

export default function Display_Social_links(){
    let box = `
        <ul class="clearfix">
            <li>
                <a href="tel:+966${Social_links.whatsapp}" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </li>
            <li>
                <a href="${Social_links.instagram}" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="${Social_links.tiktok}" target="_blank">
                    <i class="fa-brands fa-tiktok"></i>
                </a>
            </li>
            <li>
                <a href="${Social_links.twitter}" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
            </li>
            <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${Social_links.email}" target="_blank">
                    <i class="fa-regular fa-envelope"></i>
                </a>
            </li>
        </ul>
        `
    return box;
}

export function display_data_contact_page(){
    return (`
            <div class="row clearfix py-5">
                <!--Block-->
                <div class="info-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="inner">
                            <div class="icon-box"><span class="fa fa-phone"></span></div>
                            <h5>الواتساب</h5>
                            <div class="info"><a href="tel:+966${Social_links.whatsapp}" target="_blank">+966 ${Social_links.whatsapp}</a></div>
                        </div>
                    </div>
                </div>
                <!--Block-->
                <div class="info-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="inner">
                            <div class="icon-box">
                                <span class="far fa-clock"></span>
                            </div>
                            <h5>الإيميل</h5>
                            <div class="info"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${Social_links.email}" target="_blank">${Social_links.email}</a></div>
                        </div>
                    </div>
                </div>
                <!--Block-->
                <div class="info-block col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div class="inner-box">
                        <div class="inner">
                            <div class="icon-box"><span class="fa fa-map-marker-alt"></span></div>
                            <h5>العنوان</h5>
                            <div class="info">${Social_links.address}</div>
                        </div>
                    </div>
                </div>
            </div>
        `)
}