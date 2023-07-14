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
        image={"/bank.png"}
        company={"Trademarktopia"}
        job={"Software Consultant"}
        date={"May 2023 - Present"}
        location={"Agoura Hills, CA"}
        content={"Trademarktopia is an exceptional trademark solution that addresses the challenges associated with in-person client attorney interactions. It offers a novel approach by utilizing the T3 web stack, effectively eliminating the need for physical meetings and streamlining the entire process. With Trademarktopia, the traditional complexities of information processing are bypassed, allowing for a seamless and efficient experience for both users and trademark attorneys. One of the key advantages of Trademarktopia is its ability to significantly increase user trademark filings by an impressive 50%. This remarkable achievement is made possible through the reduction of unnecessary attorney-client interactions. By providing comprehensive intake forms, Trademarktopia enables users to supply all the essential information right from the start. This eliminates the need for multiple consultations and expedites the filing process, ultimately saving time for both parties involved. Trademark attorneys also benefit from this innovative solution. The platform employs an intelligent system that automatically emails completed intake forms directly to the attorney's inbox, resulting in a 20% increase in trademark attorney filings. This enhanced efficiency allows attorneys to handle a higher volume of cases, improving their productivity and effectiveness in serving their clients. Additionally, freelance trademark attorneys stand to gain an estimated revenue boost of $400,000 per year. By reducing the time spent on client consultations, attorneys can focus on revenue-generating activities, thereby enhancing their income and providing high-quality services to their clients. To ensure a seamless user experience, Trademarktopia integrates Stripe payment processing, enabling secure and convenient payments for trademark filings. The platform also utilizes nodemailer to send users and clients confirmation emails, providing reassurance that their submissions have been successfully received and processed. Overall, Trademarktopia revolutionizes the trademark filing process, making it efficient, profitable, and hassle-free for users and trademark attorneys alike."}
        skills={["T3", "TypeScript", "TailwindCSS", "NextAuth.js", "Next.js", "Prisma", "tRPC", "Nodemailer", "Stripe", "Amazon S3", "Amazon Amplify"]}
      />
      <Work
        image={"/AITCCertifiedMark.png"}
        company={"AITC"}
        job={"Software Consultant"}
        date={"Dec 2022 - May 2023"}
        location={"Agoura Hills, CA"}
        content={"In my role, I spearheaded the development and implementation of comprehensive product strategies and roadmaps, resulting in the successful beta launch of the Nostr Client product within an impressive three-month timeframe. As a leader, I effectively managed cross-functional teams consisting of talented designers, machine learning engineers, and full-stack engineers. By fostering a collaborative environment and leveraging each team member's strengths, I ensured the seamless delivery of the product while adhering to budgetary and timeline constraints. One of my key accomplishments was creating a compelling product image that resonated with both investors and users. I crafted a robust monetary incentive structure that enticed investors while maintaining a clear and compelling mission statement for utilizing our software. Additionally, I implemented a decentralized design approach, which led to a remarkable 10% reduction in production costs. Simultaneously, this approach enhanced user comfortability by implementing enhanced security measures, ensuring the utmost safety of their data. Through my strategic contributions, Nostr was able to establish a strong market presence and drive user engagement. By combining effective product planning, team leadership, and innovative design, we positioned Nostr Client as a reliable and user-friendly solution in the market, ultimately driving the company's growth and success. ** AITC SITE PASSWORD **: AITC_Y2023_Test_Password"}
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
        { title: "Tmtopia", url: "https://trademarktopia.tmtopia.com", image: "/bank.png" }]} />
      <Title id={"contact-section"} title={"Contact"} />
      <Footer />
    </div>
  );
}

export default App;
