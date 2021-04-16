import { Container } from "react-bootstrap";
import "./style/Section7.css"

const Section7 = () => {
    return (
        <div className="section7-body">
          <Container className="text-center">
         <video className="vido" poster={'https://trav4college.com/assets/images/home/hero-2.jpg'} src={"https://www.youtube.com/watch?v=dgZHx2xD-B8&t=32sY"}/>
         <div className="section6-header-text-container">
                <p className="section6-topic-text  pt-5 text-center">About Trav4College</p>
            </div>
          </Container>
           
        </div>
    );
};
export default Section7;
