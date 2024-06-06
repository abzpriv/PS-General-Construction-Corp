import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';
import Image1 from './Pictures/Bg-Image12.jpg'
import Picture1 from './Pictures/Picture20.jpg';
import Picture2 from './Pictures/Picture22.jpg';
import Picture3 from './Pictures/Picture29.jpg';
import Picture4 from './Pictures/Picture11.jpg';
import Residentail from './Pictures/Residentail.png';
import Commercial from './Pictures/Commercial Image.png';
import Industrial from './Pictures/Industrial Image.png';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';
import emailjs from 'emailjs-com';
import AlertIcon from './Pictures/Alert-image.png';
import GetInTouch from './GetInTouch';

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState('GET FREE QUOTE');

  useEffect(() => {
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable text selection
    document.addEventListener('selectstart', event => event.preventDefault());

    // Disable copy
    document.addEventListener('copy', event => event.preventDefault());



    // Disable certain keyboard shortcuts
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 's' || event.key === 'a')) {
        event.preventDefault();
      }
    };

    const handleDoubleClick = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide alert after 3 seconds
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dblclick', handleDoubleClick);

    // Show/Hide "Back to Top" button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('contextmenu', event => event.preventDefault());
      document.removeEventListener('selectstart', event => event.preventDefault());
      document.removeEventListener('copy', event => event.preventDefault());
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setButtonText('Submitted');
        setTimeout(() => {
          setButtonText('GET FREE QUOTE');
        }, 3000); // Change the text back after 3 seconds
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="home">
      {showAlert && (
        <div className="alert">
          <img src={AlertIcon} alt="Alert Icon" />
          <span>ALERT: Content is protected !!</span>
        </div>
      )}
      <section className="home_section home__section--image">
        <img src={Image1} alt="Home background" className="home__image" />
        <div className="home__content">
          <div className="home__text">
            <h1>Licensed & Insured General Contractor In</h1>
            <h2>New York City</h2>
          </div>
          <div className="home__form">
            <h3>Get Fast & Free Estimate</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
              />
              <textarea
                name="projectDetails"
                placeholder="Project Details"
                required
              ></textarea>
              <button type="submit">{buttonText}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Second Section with White Background */}
      <section className="home__section-second home__section--info">
        <h2>Welcome to PS General Construction Corp</h2>
        <h3>Your Premier Construction Company </h3>
        <div className="home__info-content">
          <div className="home__info-images">
            <img src={Picture1} alt="Project 1" />
            <img src={Picture2} alt="Project 2" />
            <img src={Picture3} alt="Project 3" />
            <img src={Picture4} alt="Project 4" />
          </div>
          <div className="home__info-text">
            <h4>Most Trusted General Construction Corp</h4>
            <p>PS General Construction Corp stands as a premier general contractor in New York City, boasting a 30-year legacy of delivering outstanding construction services. Our expertise spans across masonry, roofing, waterproofing, power washing, and more. Our highly skilled team serves Brooklyn, Queens, and the entire NYC area with pride. Regardless of your project's size or complexity, we are dedicated to providing superior craftsmanship and unmatched customer service. PS General Construction Corp is renowned for offering top-notch construction services in NYC at competitive rates.</p>
          <Link to="/masonry-services" >
            <button>Read More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Third Section with Construction Services */}
      <section className="home__section home__section--services">
        <h3>Our Construction Services</h3>
        <div className="home__services-content">
          <div className="home__service-box animated-box">
            <img src={Residentail} alt="Residential Construction" />
            <h4>Residential Construction</h4>
            <p>We prioritize our customers, ensuring personalized attention and tailored solutions for every project. Our commitment to clear communication and exceptional service guarantees outstanding results.</p>
          </div>
          <div className="home__service-box animated-box">
            <img src={Commercial} alt="Commercial Construction" />
            <h4>Commercial Construction</h4>
            <p>Building a dedicated team focused on delivering exceptional customer service. We strive to exceed expectations with every interaction.</p>
          </div>
          <div className="home__service-box animated-box">
            <img src={Industrial} alt="Industrial Construction" />
            <h4>Property Management</h4>
            <p>Our employees are our greatest asset, and we are committed to continuously investing in their growth and development.</p>
          </div>
        </div>
        <Link to="/contact" >
           <button className="contact-button"> Contact Us</button>
           </Link>
      </section>

      {/* Fourth Section with Detailed Services */}
      <section className="home__section home__section--detailed-services">
        <h2>New York City Construction Company You Can Rely On</h2>
        <div className="home__detailed-services-content">
          <div className="home__detailed-service masonry">
          <Link to="/masonry-services" style={{ textDecoration: 'none' }}>
           <h4>Masonry</h4>
           </Link>
            <p>Our skilled masons enhance both commercial and residential spaces using top-grade materials and superior craftsmanship. From brickwork and stonework to concrete services, our team delivers exceptional results. We offer a wide range of masonry services, including brick and block installations, retaining walls, and decorative concrete work, ensuring both beauty and durability.</p>
          </div>
          <div className="home__detailed-service roofing">
          <Link to="/roofing" style={{ textDecoration: 'none' }}>
            <h4>Roofing</h4>
            </Link>
            <p>Your roof serves as the primary shield against weather conditions. Our seasoned roofing team guarantees the protection of your property with robust, long-lasting roofing solutions. Whether it's new installations, repairs, or maintenance, our services have you covered. We specialize in a variety of roofing materials, including asphalt shingles, metal, slate, and flat roofing systems.</p>
          </div>
          <div className="home__detailed-service waterproofing">
          <Link to="/waterproofing" style={{ textDecoration: 'none' }}>
            <h4>Waterproofing</h4>
            </Link>
            <p>Water damage can result in expensive repairs and possible health risks. Our waterproofing solutions offer superior protection against moisture intrusion for your building. We provide a full range of services, including foundation waterproofing and exterior wall coatings. Our specialists use advanced methods and premium materials to deliver durable waterproofing solutions for your property.</p>
          </div>
          <div className="home__detailed-service power-washing">
            <h4>Power Washing</h4>
            
            <p>Maintain the beauty and cleanliness of your property with our expert power washing services. Using advanced equipment, we effectively remove dirt, grime, and mold, restore your building's exterior to its original condition. Ideal for sidewalks, driveways, decks, and building exteriors, our power washing delivers a thorough clean that significantly enhances your property's curb appeal.</p>
          </div>
          <div className="home__detailed-service facade-restoration">
            <h4>Facade Restoration</h4>
            <p>Over time, your building’s facade can suffer from weather, pollution, and other environmental factors. Our facade restoration services are designed to maintain both the beauty and durability of your property. Our experienced team excels in restoring brick, stone, and concrete facades, ensuring a remarkable transformation that improves the structural integrity and increases the value of your building.</p>
          </div>
          <div className="home__detailed-service painting-services">
            <h4>Painting Services</h4>
            <p>Water damage can lead to expensive repairs and health hazards. Our painting services offer superior protection against moisture infiltration. We provide extensive interior and exterior painting solutions, using top-quality materials to deliver a durable and professional finish for your property. Our skilled painters ensure meticulous attention to detail, enhancing the aesthetic appeal and longevity of your building.</p>
          </div>
        </div>
      </section>

      <section className="section-six">
        <div className="highlight">
          <h4>Extensive Service Area</h4>
          <p>We proudly serve clients in Brooklyn, Queens, and throughout New York City. As a trusted general contractor, we are dedicated to providing customized, high-quality services to meet your unique requirements.</p>
        </div>
        <div className="highlight">
          <h4>Transparent Pricing and Accurate Estimates</h4>
          <p>We recognize that each project is distinct and offer clear pricing and precise estimates to facilitate your decision-making. Our dedication to transparency and integrity forms the backbone of our enduring client relationships.</p>
        </div>
        <div className="highlight">
          <h4>Proven Track Record</h4>
          <p>With more than 30 years in the construction industry, PS General Construction Corp has earned a stellar reputation for providing superior general contractor services in New York City. Our extensive portfolio of completed projects and happy clients showcases our expertise and unwavering commitment to excellence.</p>
        </div>
        <div className="highlight">
          <h4>Fully Licensed and Insured</h4>
          <p>We are a fully licensed and insured construction company in NYC, providing you with peace of mind and top-notch protection for your investment. By following rigorous safety guidelines and industry standards, we guarantee the highest quality workmanship on every project.</p>
        </div>
        <div className="highlight">
          <h4>Customized Solutions</h4>
          <p>We recognize that each project has its own set of requirements, so we offer tailored solutions to fit your particular needs. Our team of specialists collaborates with you to make sure your project is completed to your utmost satisfaction.</p>
        </div>
        <div className="highlight">
          <h4>Timely Project Completion</h4>
          <p>We are dedicated to finishing your project on schedule and within budget. Our team of experts works tirelessly to guarantee that your project meets the highest standards of quality.</p>
        </div>
        <div className="highlight">
          <h4>Unparalleled Customers Services</h4>
          <p>At PS General Construction company, we pride ourselves on delivering unparalleled customer service. Our dedicated team ensures every project is handled with the utmost care, providing tailored solutions to meet your unique needs. We are committed to exceeding your expectations with exceptional craftsmanship and transparent communication.</p>
        </div>
        <div className="highlight">
          <h4>Environmentally Conscious Practices</h4>
          <p>We prioritize environmentally conscious practices in every aspect of our construction projects. By utilizing sustainable materials and innovative techniques, we minimize our environmental footprint while maintaining the highest standards of quality. Our commitment to eco-friendly solutions ensures that we not only build for today but also preserve the planet for future generations.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home__section home__section--testimonials">
        <Testimonials />
      </section>

      {/* Get Started Section */}
      <section className="home__section home__section--get-started">
        <div className="get-start-section-container">
          <h2>Get Started with PS General Construction Corp Today</h2>
          <p>Transform your property with the assistance of PS General Construction Corp, the leading general contractor in NYC. Our unmatched expertise and dedication to customer satisfaction make us the ideal choice for all your construction needs. Contact us today to discuss your project and receive a free, no-obligation quote. We look forward to partnering with you and bringing your vision to life.</p>
          <p>Whether you require extensive construction services for a major commercial project or a small residential renovation, PS General Construction Corp has the expertise, skill, and dedication to ensure your project's success. As your reliable general contractor in Brooklyn, Queens, and the entire NYC area, we are proud of our outstanding workmanship and dedication to client satisfaction. Contact our team today and let us help you bring your vision to fruition.</p>
           <Link to="/contact" >
          <button>Contact Us</button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home__section home__section--testimonials">
        <FAQ />
      </section>

      {/* Get In Touch Section */}
      <section>
        <GetInTouch />
      </section>

      {/* WhatsApp and Back to Top */}
      <div className="home__whatsapp">
    <a href="https://wa.me/+13475748225">
        <div className="whatsapp-icon-container">
            <i className="fab fa-whatsapp whatsapp-icon"></i> {/* WhatsApp icon */}
        </div>
        <span>Need Help? <strong>Chat with us</strong></span>
    </a>
</div>
      {/* Back to Top Button */}
      <div 
        className={`home__back-to-top ${showBackToTop ? '' : 'hidden'}`} 
        onClick={scrollToTop}
      >
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Home;
