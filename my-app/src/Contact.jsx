

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="sub-text">
        Have questions? We’re here to help. Fill out the form and our team will contact you soon.
      </p>

      <div className="contact-box">
        <form className="contact-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea rows="4" placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>📍 Our Office</h3>
          <p>123, Main Street<br />Chennai, India</p>

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>

          <h3>✉ Email</h3>
          <p>support@shopease.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
