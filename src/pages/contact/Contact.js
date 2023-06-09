import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location, mobile }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form />
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo name={name} location={location} email={email} mobile={mobile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
