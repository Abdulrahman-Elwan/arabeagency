import Social_links from '../data/infoData.js';
import Display_Social_links from './info.js';

let Footer = `

    <div class="container footer-inner">
        <div class="row clearfix">

            <!-- Logo & About -->
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="footer-logo" style="margin-bottom: 20px;">
                    <a href="index">
                        <img src="images/logo_white.png" alt="وكالة عرب" style="max-width: 150px;">
                    </a>
                </div>
                <p style="line-height: 1.8; ">
                    وكالة عرب شريكك الإبداعي للانطلاق نحو القمة في عالم التسويق الرقمي، نقدم حلولًا
                    تسويقية مبتكرة لزيادة انتشارك وبناء هوية قوية لعلامتك التجارية.
                </p>
            </div>

            <!-- Quick Links -->
            <div class="col-lg-2 col-md-6 col-sm-12 mb-4">
                <h5 class="text-center mb-4">روابط سريعة</h5>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
                    <li class="text-center"><a href="index" style=" text-decoration: none;">الرئيسية</a></li>
                    <li class="text-center"><a href="about" style=" text-decoration: none;">من نحن</a></li>
                    <li class="text-center"><a href="services" style=" text-decoration: none;">خدماتنا</a></li>
                    <li class="text-center"><a href="blog" style=" text-decoration: none;">المدونة</a></li>
                    <li class="text-center"><a href="contact" style=" text-decoration: none;">اتصل بنا</a></li>
                </ul>
            </div>

            <!-- Services -->
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <h5 class="text-center mb-4">خدماتنا</h5>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
                    <li class="text-center"><a href="services" style=" text-decoration: none;">التصميم الجرافيكي والموشن</a></li>
                    <li class="text-center"><a href="services" style=" text-decoration: none;">التصوير والإخراج الفني</a></li>
                    <li class="text-center"><a href="services" style=" text-decoration: none;">إدارة التواصل الاجتماعي</a></li>
                    <li class="text-center"><a href="services" style=" text-decoration: none;">إدارة الحملات الترويجية</a></li>
                    <li class="text-center"><a href="services" style=" text-decoration: none;">كتابة المحتوى</a></li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div class="col-lg-3 col-md-6 col-sm-12">
                <h5 class="text-center">تواصل معنا</h5>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2; "
                    class="text-center">
                    <li style="color: #D4C7B6;"><i class="fa fa-map-marker" style=" margin-left: 5px;"></i> ${Social_links.address}</li>
                    <li style="color: #D4C7B6;"><i class="fa fa-phone" style=" margin-left: 5px;"></i> <a href="tel:+966${Social_links.phone}" target="_blank" style=" text-decoration: none;" dir="ltr">+966 ${Social_links.phone}</a></li>
                    <li style="color: #D4C7B6;"><i class="fa fa-envelope" style=" margin-left: 5px;"></i> <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=${Social_links.email}" target="_blank" style=" text-decoration: none;" dir="ltr">${Social_links.email}</a></li>
                </ul>

                <!-- Social Links -->
                <div class="d-flex justify-content-center pt-3 footer_social_links" id="social_links">
                    ${Display_Social_links()}
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div
            style="border-top: 1px solid #ffffffdf; margin-top: 30px; padding-top: 15px; text-align: center; color: #D4C7B6; font-size: 16px;">
            © 2025 جميع الحقوق محفوظة - وكالة عربي الابداعية
        </div>
    </div>

`
export default Footer;
