import {services} from '../data/servicesData.js'
export default function DisplayServices () {
    let box = `` ;
    services.forEach((service)=>{
        box +=`
            <div class="service-block col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div class="inner-box">
                    <div class="inner">
                        <div class="icon-box">${service.icon}</div>
                        <h3>${service.title}</h3>
                        <p class="text">${service.description}</p>
                    </div>
                </div>
            </div>
        `
    })
    return box;
}