import TestProps from "../ServiceCard/ServiceCard";

const testProps2 = () => {
  return (
    <>
      <section id="services" className="services-section p-block-70">
        <section className="section-title">
          <h2>Services</h2>
          <p>Holistic Services Offered By Enat Health Care Solutions.</p>
        </section>
        {/* <!--======= section title end ======= --> */}
        <section className="service-container">
          <TestProps
            icon={<i className="fas fa-heartbeat"></i>}
            h3="Primary Care"
            tagline="Your Health, Our Priority"
            description="Comprehensive check-ups, screenings, and ongoing health management
              for a healthier life."
          />

          <TestProps
            icon={<i className="fas fa-pills"></i>}
            h3="Maternal and Child Health"
            tagline="Your Health, Our Priority"
            description="Specialized care for mothers, infants, and children to ensure
              healthy beginnings and lifelong well-being."
          />

          <TestProps
            icon={<i className="fas fa-hospital-user"></i>}
            h3="Chronic Disease Management"
            tagline="Managing Health, Empowering Lives"
            description="Support for managing conditions like diabetes, hypertension, and
              more for improved quality of life."
          />

          <TestProps
            icon={<i className="fa-solid fa-brain"></i>}
            h3="Mental Health Services"
            tagline="Balancing Minds, Promoting Wellness"
            description="Counseling and support for emotional well-being to help you thrive
              in everyday life."
          />

          <TestProps
            icon={<i className="fas fa-wheelchair"></i>}
            h3="Community Health Initiatives"
            tagline="Stronger Communities, Healthier Lives"
            description="Workshops and outreach programs to promote health education and
              awareness in our community."
          />

          <TestProps
            icon={<i className="fas fa-notes-medical"></i>}
            h3="Preventive Health Screenings"
            tagline="Stay Ahead of Health Issues"
            description="Routine screenings and assessments to catch potential health risks
              early and ensure proactive care."
          />
        </section>
      </section>
    </>
  );
};

export default testProps2;
