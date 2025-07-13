import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTooth, faCog, faSmile, faStethoscope, faBaby, faWandMagicSparkles, 
  faLeaf, faCrown, faScrewdriverWrench 
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      title: 'Teeth Whitening',
      icon: faTooth,
      description: 'Brighten your smile with our professional teeth whitening treatments.'
    },
    {
      title: 'Dental Implants',
      icon: faCog,
      description: 'Permanent solutions for missing teeth to restore function and aesthetics.'
    },
    {
      title: 'Orthodontics',
      icon: faSmile,
      description: 'Straighten your teeth and improve your bite with braces or aligners.'
    },
    {
      title: 'Root Canal Treatment',
      icon: faStethoscope,
      description: 'Save infected teeth with painless modern root canal procedures.'
    },
    {
      title: 'Pediatric Dentistry',
      icon: faBaby,
      description: 'Gentle dental care tailored for children and teenagers.'
    },
    {
      title: 'Cosmetic Dentistry',
      icon: faWandMagicSparkles,
      description: 'Improve your smile with veneers, bonding, and other cosmetic treatments.'
    },
    {
      title: 'Gum Treatment',
      icon: faLeaf,
      description: 'Treatment for gum diseases to protect your oral health.'
    },
    {
      title: 'Dental Crowns & Bridges',
      icon: faCrown,
      description: 'Restore damaged or missing teeth with natural-looking crowns and bridges.'
    },
    {
      title: 'Oral Surgery',
      icon: faScrewdriverWrench,
      description: 'Minor surgical procedures including wisdom tooth removal and biopsies.'
    }
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card service-card h-100 text-center">
              <div className="card-body">
                <div className="icon-wrapper mb-3 mx-auto">
                  <FontAwesomeIcon icon={service.icon} size="2x" />
                </div>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
