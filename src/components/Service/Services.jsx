import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  return (
    <>
      <section id="services" className="services-section p-block-70">
        <section className="section-title">
          <h2>Services</h2>
          <p>Holistic Services Offered By Enat Health Care Solutions.</p>
        </section>
        {/* <!--======= section title end ======= --> */}
        <section className="service-container">
          <ServiceCard
            icon={<i className="fas fa-heartbeat"></i>}
            title="Primary Care"
            subtitle="Your Health, Our Priority"
            description="Comprehensive check-ups, screenings, and ongoing health management
              for a healthier life."
          />

          <ServiceCard
            icon={<i className="fas fa-pills"></i>}
            title="Maternal and Child Health"
            subtitle="Your Health, Our Priority"
            description="Specialized care for mothers, infants, and children to ensure
              healthy beginnings and lifelong well-being."
          />

          <ServiceCard
            icon={<i className="fas fa-hospital-user"></i>}
            title="Chronic Disease Management"
            subtitle="Managing Health, Empowering Lives"
            description="Support for managing conditions like diabetes, hypertension, and
              more for improved quality of life."
          />

          <ServiceCard
            icon={<i className="fa-solid fa-brain"></i>}
            title="Mental Health Services"
            subtitle="Balancing Minds, Promoting Wellness"
            description="Counseling and support for emotional well-being to help you thrive
              in everyday life."
          />

          <ServiceCard
            icon={<i className="fas fa-wheelchair"></i>}
            title="Community Health Initiatives"
            subtitle="Stronger Communities, Healthier Lives"
            description="Workshops and outreach programs to promote health education and
              awareness in our community."
          />

          <ServiceCard
            icon={<i className="fas fa-notes-medical"></i>}
            title="Preventive Health Screenings"
            subtitle="Stay Ahead of Health Issues"
            description="Routine screenings and assessments to catch potential health risks
              early and ensure proactive care."
          />
        </section>
      </section>
    </>
  );
};

export default Services;
