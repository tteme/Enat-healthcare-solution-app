const ServiceCard = ({icon, title, subtitle,description}) => {
  return (
    <>
      {/* <!--======= service section start ======= --> */}

      <section className="service-item">
        <section className="service-icon">{icon}</section>
        <a href="#" className="stretched-link">
          <h3>{title} </h3>
        </a>
        <p className="tag-line">{subtitle}</p>
        <p className="description">{description}</p>
      </section>
    </>
  );
};

export default ServiceCard;
