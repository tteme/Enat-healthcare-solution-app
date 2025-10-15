import { Link } from "react-router";

const ServiceCard = ({icon, title, subtitle,description}) => {
  return (
    <>
      {/* <!--======= service section start ======= --> */}

      <section className="service-item">
        <section className="service-icon">{icon}</section>
        <Link to="/" className="stretched-link">
          <h3>{title} </h3>
        </Link>
        <p className="tag-line">{subtitle}</p>
        <p className="description">{description}</p>
      </section>
    </>
  );
};

export default ServiceCard;
