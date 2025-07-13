import React from 'react';
// If you have real images, uncomment these lines and add team1.jpg & team2.jpg into src/assets/
// import team1 from '../assets/team1.jpg';
// import team2 from '../assets/team2.jpg';

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">About Us</h1>
      <p>
        Welcome to our Dental Clinic! We’ve been serving our community for over 15 years,
        offering exceptional dental care combined with compassion and modern techniques.
      </p>
      <p>
        Our mission is to help every patient achieve a healthy and confident smile
        by providing personalized treatment in a warm and friendly environment.
        We believe dental visits should be comfortable and stress-free.
      </p>

      <h2 className="mt-5">Meet Our Team</h2>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/400x300"
              // If using local images, replace the above line with: src={team1}
              className="card-img-top"
              alt="Dr. Priya Rao"
            />
            <div className="card-body">
              <h5 className="card-title">Dr. Priya Rao</h5>
              <p className="card-text">
                Chief Dentist with 12+ years of experience in restorative and cosmetic dentistry.
                Known for gentle care and attention to detail.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/400x300"
              // If using local images, replace the above line with: src={team2}
              className="card-img-top"
              alt="Dr. Ravi Kumar"
            />
            <div className="card-body">
              <h5 className="card-title">Dr. Ravi Kumar</h5>
              <p className="card-text">
                Specialist in orthodontics and pediatric dentistry. Passionate about helping kids and adults
                feel confident through straighter smiles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-5">Our Philosophy</h2>
      <p>
        At our clinic, we combine advanced technology with a patient-first approach.
        We educate, empower, and guide you toward the best oral health possible.
      </p>
    </div>
  );
};

export default About;
