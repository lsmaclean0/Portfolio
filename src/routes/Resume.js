import Container from "react-bootstrap/Container";
//import resume from '../data/Data';

const resume = [
  {
    company: "Olive AI",
    position: "Software Engineer I",
    dates: "Oct. 2021-Jul. 2022",
    responsibilities: "Supported the Desktop Core team in building and designing the back-end of an Electron based desktop application in Golang. " 
    + "Led the re-design of and development of the applications storage configuration, allowed users to install extensions on a per-user basis. "
    + "Increased customersatisfaction for multiple large hospitals and universities. Address bugs discovered within both the front-end and back-end of the application. "
    + "Refactored communication routes for Google Analytics tracking to make tracking more efficent. Resulted in 30% fewer false errors being reported to GA.",
  },
  {
    company: "ByteLion",
    position: "Software Engineer I",
    dates: "Jun. 2021 - Oct. 2021",
    responsibilities: 
      "Participated in the design and implementation of a large scale application using Java and the Spring Boot framework for a large grocery store and distribution center. "
      + " Designed a REST API enabling product location data to be queried and distributed to the appropriate microservices. "
      + "Implemented microservices utilizing Spring Boot to read and parse data from online orders and map the most efficient route for an employee to navigate a store or warehouse. ",
  },
  {
    company: "Strategic Mission Elements",
    position: "Intern Software Developer",
    dates: "Jun. 2019 - Aug. 2019",
    responsibilities: "Developed a Java application using Spring Boot, and Maven that scans open-source RSS news feeds, "
    + "collecting and formatting the data into a custom JSON document and storing it in an ElasticSearch sink. "
    + "\n Designed a UI in React that consumed the data from the database and displayed it in a user-friendly and useful manner to meet the user’s needs. "
    +" Led design of a REST API using JavaScript and Express to handle requests between " 
    + "the ElasticSearch sink and the UI."
  }
];

export default function Skills() {
  return (
    <Container fluid className="App">
      <Container className="resume">
        {resume.map((job) => (
          <div key={job.Company}>
            <h1 className="company">{job.company}</h1>
            <h2 className="position">{job.position}</h2>
            <h3>{job.dates}</h3>
            <h5>{job.responsibilities}</h5>
          </div>
        ))}
      </Container>
    </Container>
  );
}
