
import { servicesData } from "../data";

const services = servicesData.map(({icon,name,lorem,id})=>{
    return <article className="service" key={id}>
        <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
            <h4 className="service-title">{name}</h4>
            <p className="service-text">{lorem}</p>
        </div>
    </article>
})
const Service = ()=>{
    return <section className="section services" id="services">
        <div className="section-title">
            <h2>our <span>services</span></h2>
        </div>
        <div className="section-center services-center">
         {services}          
        </div>
    </section>
}

export default Service;