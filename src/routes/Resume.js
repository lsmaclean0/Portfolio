import Container from "react-bootstrap/Container";
//import resume from '../data/Data';

const resume = [
  {
    company: "Olive AI",
    position: "Software Engineer I",
    dates: "Oct. 2021-Jul. 2022",
    responsibilities: "Supported the Desktop Core team in building and designing the back-end of an Electron based desktop application in Golang. Led the re-design of and development of the applications storage configuration, allowed users to install extensions on a per-user basis. Increased customersatisfaction for multiple large hospitals and universities. Address bugs discovered within both the front-end and back-end of the application. Refactored communication routes for Google Analytics tracking to make tracking more efficent. Resulted in 30% fewer false errors being reported to GA.",
  },
  {
    company: "ByteLion",
    position: "Software Engineer I",
    dates: "Jun. 2021 - Oct. 2021",
    responsibilities: 
      "Participated in the design and implementation of a large scale application using Java and the Spring Boot framework for a large grocery store and distribution center. Designed a REST API enabling product location data to be queried and distributed to the appropriate microservices. Implemented microservices utilizing Spring Boot to read and parse data from online orders and map the most efficient route for an employee to navigate a store or warehouse. ",
   
  },
];

export default function Skills() {
  console.log(resume.Company);
  return (
    <Container fluid className="App">
      <Container>
        {resume.map((job) => (
          <div key={job.Company}>
            <h1>{job.company}</h1>
            <h2>{job.position}</h2>
            <h3>{job.dates}</h3>
            <h5>{job.responsibilities}</h5>
          </div>
        ))}
      </Container>
    </Container>
  );
}
