import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_mengroomingstore",
        "template_1twwqaa",
        form.current,
        "MoNGHMtErZX-Kl2CJ"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Feedback</label>
              <textarea name="message" cols="30" rows="8" placeholder="Your Feedback"></textarea>
              <button className="--btn --btn-danger">Send Message</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill out the form or contact us through the contact information below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+84 834091202</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>leminhtuong09122002@email.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Viet Nam</p>
                </span>
                <span>
                  <FaFacebook />
                  <p>Le Minh Tuong</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
