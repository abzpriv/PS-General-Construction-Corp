import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './LocalLaw.css';
import './Home.css';
import LocalLawImage1 from './Pictures/Picture22.jpg';
import LocalLawImage2 from './Pictures/Picture23.jpg';
import GetInTouch from './GetInTouch';

function LocalLaw() {
    const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
  return (
    <div className="local-law-container">
    {showAlert && (
        <div className="alert">
          <img src={AlertIcon} alt="Alert Icon" /> {/* Alert icon */}
          <span>ALERT: Content is protected !!</span>
        </div>
         )}
      <div className="local-law-background">
        <div className="local-law-content">
          <h1>Local LAW 11</h1>
        </div>
      </div>

      <div className="local-law-info-section">
        <div className="local-law-info-text">
          <h2>Keep Your Building Compliant With NYC Local Law 11</h2>
          <p>
            It is important to keep your building in top-notch condition for the safety and performance of the building. People having building stories more than 6 need to essentially get their balconies, appurtenances, and exterior walls inspected in a span of five years. The upkeep of the building is imperative in order to enhance its durability. To do the process lawfully, you need to file a technical façade report with a department.
          </p>
          <p>
            If you own a property then, you must have heard about local law 11 at some point. The violation of this particular thing leads to paying off huge penalties. Most of the time, many homeowners fail to pay attention to underlying aspects that protect your building or you just get too late in getting the inspection done on time.
          </p>
        </div>
        <div className="local-law-info-image">
          <img src={LocalLawImage1} alt="Building under compliance" />
        </div>
      </div>

      <div className="local-law-blue-section">
        <div className="local-law-blue-text">
          <h2>Facade Inspection, Repair and Renovation</h2>
          <p>
            During repairs, the inspectors will keep the building under DOB violation removal under local law 11. So, it is of utmost importance for you to get the timely repairs done. If you find anything in your property unsafe owing to its dilapidated condition, get it repaired at the earliest before DOB violation gets worsened, imposing charges for multiple violations. You call the overall process facade inspection contractor safety program which is also referred to as in general local law 11 contractors New York. This is applicable to homeowners owing buildings having more than six or more stories. Leaving the problems untreated could make you pay off mammoth monetary losses in the future along with facing more catastrophic violations. The infringement of local law 11 could bring you before the court and not adhering to local law 11 could result in you having to pay substantial fines also. If in case, your building is susceptible to local law 11 violation, make sure to ponder over it profoundly and hire the experienced violation professional of PS General Construction Corp.
          </p>
        </div>
        <div className="local-law-blue-image">
          <img src={LocalLawImage2} alt="Facade inspection" />
        </div>
      </div>

      <div className="hiresection">
        <div className="hiresection-content">
          <h2>Hire Top Local Law 11 Contractors</h2>
          <p>
            We have years of experience in tackling the onus of residential and commercial buildings of NYC. We help you sail through all sorts of violations problems in a timely manner so that you don’t have to pay an unnecessary amount.
          </p>
          <p>
            Our professionals are proudly serving the needs of homeowners since inception. DOB violation unlocks the onset of bad luck for homeowners, making them pauper financially. Before you are crushed under the expenses of DOB violation, you can hire an experienced DOB violation removal specialist of PS General Construction Corp.
          </p>
          <p>
            Our team is well-versed with the intricacies of building and knows the right methods to resolve local law 11 violations of your building. With the help of visual inspections of your building, the close-up inspections of the streets are performed, encompassing the exterior of your buildings such as terraces, roofs, balconies, and appurtenances.
          </p>
          <p>
            Be it your home or nearby areas around your property, keeping in mind the local law 11 codes, we help you and pedestrians stay safe from the debris of outworn buildings.
          </p>
          <div className="hiresection-quote">
            <p>
              Every person passing by deteriorated buildings knows nothing about the vulnerability of the building and often comes in contact with falling debris of the building. To mitigate the risk of poorly maintained buildings, we meticulously renovate key areas of the building, ensuring you are protected.
            </p>
          </div>
        </div>
      </div>
      <div>
        <GetInTouch />
      </div>
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
}

export default LocalLaw;
