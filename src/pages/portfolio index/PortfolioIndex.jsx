import Navigation from "../../components/navigation/Navigation";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import ProjectExample from "../../components/project example/ProjectExample";
import { projectsData } from "../../data.js";
import "./portfolioIndex.scss";

export default function PortfolioIndex() {
  return (
    <>
      <Navigation />
      <main className="portfolioIndex container">
        {projectsData.map((project, index) => (
          <ProjectExample
            key={project.id}
            image={project.image}
            heading={project.heading}
            body={project.body}
            isReversed={index % 2 !== 0}
          />
        ))}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
