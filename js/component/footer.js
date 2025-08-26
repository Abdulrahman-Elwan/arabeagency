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
                <p style="line-height: 1.8; color: #ccc;">
                    وكالة عرب شريكك الإبداعي للانطلاق نحو القمة في عالم التسويق الرقمي، نقدم حلولًا
                    تسويقية مبتكرة لزيادة انتشارك وبناء هوية قوية لعلامتك التجارية.
                </p>
            </div>

            <!-- Quick Links -->
            <div class="col-lg-2 col-md-6 col-sm-12 mb-4">
                <h5 class="text-center mb-4">روابط سريعة</h5>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
                    <li class="text-center"><a href="index" style="color: #ccc; text-decoration: none;">الرئيسية</a></li>
                    <li class="text-center"><a href="about" style="color: #ccc; text-decoration: none;">من نحن</a></li>
                    <li class="text-center"><a href="services" style="color: #ccc; text-decoration: none;">خدماتنا</a></li>
                    <li class="text-center"><a href="blog" style="color: #ccc; text-decoration: none;">المدونة</a></li>
                    <li class="text-center"><a href="contact" style="color: #ccc; text-decoration: none;">اتصل بنا</a></li>
                </ul>
            </div>

            <!-- Services -->
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <h5 class="text-center mb-4">خدماتنا</h5>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
                    <li class="text-center"><a href="services" style="color: #ccc; text-decoration: none;">التصميم الجرافيكي والموشن</a></li>
                    <li class="text-center"><a href="services" style="color: #ccc; text-decoration: none;">التصوير والإخراج الفني</a></li>
                    <li class="text-center"><a href="services" style="color: #ccc; text-decoration: none;">إدارة التواصل الاجتماعي</a></li>
                    <li class="text-center"><a href="services" style="color: #ccc; text-decoration: none;">إدارة الحملات الترويجية</a></li>
                    <li class="text-center"><a href="services" style="color: #ccc; text-decoration: none;">كتابة المحتوى</a></li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div class="col-lg-3 col-md-6 col-sm-12">
                <h5 class="text-center">تواصل معنا</h5>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2; color: #ccc;"
                    class="text-center">
                    <li><i class="fa fa-map-marker" style="color: #ccc; margin-left: 5px;"></i> ${Social_links.address}</li>
                    <li><i class="fa fa-phone" style="color: #ccc; margin-left: 5px;"></i> <a href="tel:+966${Social_links.phone}" target="_blank" style="color: #ccc; text-decoration: none;" dir="ltr">+966 ${Social_links.phone}</a></li>
                    <li><i class="fa fa-envelope" style="color: #ccc; margin-left: 5px;"></i> <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=${Social_links.email}" target="_blank" style="color: #ccc; text-decoration: none;" dir="ltr">${Social_links.email}</a></li>
                </ul>

                <!-- Social Links -->
                <div class="d-flex justify-content-center pt-3 footer_social_links" id="social_links">
                    ${Display_Social_links()}
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div
            style="border-top: 1px solid #fff; margin-top: 30px; padding-top: 15px; text-align: center; color: #e8e8e8; font-size: 16px;">
            © 2025 جميع الحقوق محفوظة - وكالة عربي الابداعيه
        </div>
    </div>

`
export default Footer;
