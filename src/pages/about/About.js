import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, statement, email, availability }) => {
  return (
    <section id="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe name={name} location={location} statement={statement} email={email} availability={availability} />
    </section>
  );
};

export default About;
