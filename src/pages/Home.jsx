import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero / Banner */}
      <section className="hero text-center text-white bg-primary py-5">
        <div className="container">
          <h1 className="display-4">Your Smile, Our Passion</h1>
          <p className="lead">Providing quality, gentle, and affordable dental care for the whole family.</p>
          <Link to="/contact" className="btn btn-light mt-3">Book Appointment</Link>
        </div>
      </section>

      {/* About Summary */}
      <section className="container mt-5">
        <h2>Welcome to Our Dental Clinic</h2>
        <p>
          With over 15 years of experience, our clinic combines modern dental technology
          with a personalized, gentle approach. We’re dedicated to making every visit comfortable
          and helping you maintain a healthy, confident smile.
        </p>
      </section>

      {/* Our Services Highlights */}
      <section className="container mt-5">
        <h2>Our Services</h2>
        <div className="row mt-3">
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cosmetic Dentistry</h5>
                <p className="card-text">Brighten, straighten, and enhance your smile with veneers, whitening, and more.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pediatric Dentistry</h5>
                <p className="card-text">Gentle, friendly dental care for children, ensuring healthy smiles from an early age.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Orthodontics</h5>
                <p className="card-text">Advanced braces and clear aligners to help you achieve beautifully aligned teeth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light mt-5 py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-heart-fill text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2">Personalized Care</h5>
              <p>We treat every patient as family, with treatments tailored to your needs.</p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-shield-check text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2">Modern Technology</h5>
              <p>State-of-the-art equipment for precise diagnosis and comfortable treatment.</p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-people-fill text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2">Experienced Team</h5>
              <p>Skilled dentists and staff with years of expertise in all aspects of dental care.</p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-emoji-smile-fill text-primary" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-2">Comfort First</h5>
              <p>Warm, welcoming environment to make your dental visits stress-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container text-center my-5">
        <h2>Ready to Transform Your Smile?</h2>
        <Link to="/contact" className="btn btn-primary mt-2">Book Your Appointment Today</Link>
      </section>
    </div>
  );
};

export default Home;
