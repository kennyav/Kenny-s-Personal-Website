import React from "react";

// component imports
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Title from "./components/Title";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="flex flex-col lg:gap-20 md:gap-10 gap-5 w-full h-full mb-10">
      <Nav />
      <Hero />
      <Title id={"about-section"} title={"About me"} />
      <About />
      <Title id={"work-section"} title={"Work Experience"} />
      <Work
        image={"/AITCCertifiedMark.png"}
        company={"AITC"}
        job={"Lead Developer"}
        date={"Dec 2022 - Present"}
        location={"Agoura Hills, CA"}
        content={"In my role, I spearheaded the development and implementation of comprehensive product strategies and roadmaps, resulting in the successful beta launch of the Nostr Client product within an impressive three-month timeframe. As a leader, I effectively managed cross-functional teams consisting of talented designers, machine learning engineers, and full-stack engineers. By fostering a collaborative environment and leveraging each team member's strengths, I ensured the seamless delivery of the product while adhering to budgetary and timeline constraints. One of my key accomplishments was creating a compelling product image that resonated with both investors and users. I crafted a robust monetary incentive structure that enticed investors while maintaining a clear and compelling mission statement for utilizing our software. Additionally, I implemented a decentralized design approach, which led to a remarkable 10% reduction in production costs. Simultaneously, this approach enhanced user comfortability by implementing enhanced security measures, ensuring the utmost safety of their data. Through my strategic contributions, Nostr was able to establish a strong market presence and drive user engagement. By combining effective product planning, team leadership, and innovative design, we positioned Nostr Client as a reliable and user-friendly solution in the market, ultimately driving the company's growth and success."}
        skills={["Typescript", "Nostr", "Tailwind", "D3", "Next"]}
      />
      <Work
        image={"/systopia.png"}
        company={"Systopia: Teleoscope Team"}
        job={"Fullstack Developer"}
        date={"March 2022 - Dec -2022"}
        location={"Vancouver, BC"}
        content={"At Teleoscope, I played a crucial role in supporting the development of a powerful tool designed to enhance qualitative textual analysis and amplify human intuition across thousands of documents. On the frontend, I leveraged Next.js to implement a sleek user interface. Employing ReactForms and Yup packages, I seamlessly collected data while ensuring its accuracy. To fortify the security of user credentials, I implemented bcryptjs password hashing with salt and utilized JWT tokenization, establishing a robust and protected user entry point. Additionally, I harnessed custom SWR APIs to effortlessly retrieve JSON data from our MongoDB, streamlining information retrieval.On the backend, I orchestrated an efficient data flow by creating scripts to push relevant data onto a RabbitMQ queue. Subsequently, Celery effectively extracted information from the queue, generating tasks that were then pushed to MongoDB. This streamlined process optimized the overall functionality of our system.The impact of my contributions was far-reaching. By integrating user logins, Teleoscope seamlessly transitioned into a collaborative space, empowering research teams to extract qualitative metrics from their collective thematic analysis efforts. Through this innovation, teams were able to derive valuable insights and make informed decisions. Overall, my work at Teleoscope involved merging cutting-edge technologies and best practices to create a robust and user-friendly platform that revolutionized the way qualitative analysis is conducted."}
        skills={["React", "Redux", "Next", "SWR", "MongoDB", "Celery", "RabbitMQ"]}
        link={"https://github.com/Teleoscope/Teleoscope"} />
      <Title id={"projects-section"} title={"Projects"} />
      <Projects projects={[
        { title: "AITC", url: "https://aitc.vercel.app", image: "/AITCCertifiedMark.png" },
        { title: "Counting Cards", url: "https://counting-three.vercel.app", image: "/cards.png" }]} />
      <Title id={"contact-section"} title={"Contact"} />
      <Footer />
    </div>
  );
}

export default App;
