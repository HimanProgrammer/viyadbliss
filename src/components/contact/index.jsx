import { Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";

const Contact = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Ensure reset is destructured here

  const onSubmit = (data) => {
    
    toast("Form data has been submited. Please check in console")
    reset(); // Reset form fields after submission
  };


  const onSubmitWithPreventDefault = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleSubmit(onSubmit)();
  };
  return (
    <>
      {/* <!-- CONTACT ADDRESS AREA START --> */}
      <ToastContainer />

    {/* CONTACT MESSAGE AREA START */}
    <div className="ltn__contact-message-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center align-items-start">

          {/* LEFT SIDE - Contact Info */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="contact-left">
              <h2 className="mb-4">Let’s Talk About Your Property</h2>
              <p className="mb-4">
                Fill out the form and our expert team will contact you shortly
                to discuss your requirements.
              </p>

              <div className="contact-info-item">
                <h6>Office Address</h6>
                <p>
                  Viyad Bliss, Dapoli Coastal Road,<br/>
                  Taluka – Dapoli, District – Ratnagiri,
                  Maharashtra, India 
                </p>
              </div>

              <div className="contact-info-item">
                <h6>Email</h6>
                <p>info@viyadbliss.com</p>
              </div>

              <div className="contact-info-item">
                <h6>Phone</h6>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="col-lg-6">
            <div className="ltn__form-box contact-form-box box-shadow white-bg small-form">

              <h4 className="title-2 text-center mb-4">Get A Quote</h4>

              <form id="contact-form" onSubmit={onSubmitWithPreventDefault}>

                <div className="row">

                  <div className="col-md-6">
                    <div className="input-item ltn__custom-icon">
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                      />
                      <span className="inline-icon"><FaUserAlt /></span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item ltn__custom-icon">
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                      />
                      <span className="inline-icon"><FaEnvelope /></span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item ltn__custom-icon">
                      <input
                        type="text"
                        {...register("phone", { required: true })}
                        placeholder="Phone"
                      />
                      <span className="inline-icon"><FaPhoneAlt /></span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item ltn__custom-icon">
                      <Form.Select {...register("serviceType", { required: true })}>
                        <option value="">Service Type</option>
                        <option>Property Management</option>
                        <option>Mortgage Service</option>
                        <option>Consulting Service</option>
                        <option>Home Buying</option>
                        <option>Home Selling</option>
                      </Form.Select>
                      <span className="inline-icon"><FaArrowDown /></span>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-item ltn__custom-icon">
                      <textarea
                        {...register("message", { required: true })}
                        placeholder="Your Message"
                      ></textarea>
                      <span className="inline-icon"><FaPencilAlt /></span>
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase w-100"
                      type="submit"
                    >
                      Submit Request
                    </button>
                  </div>

                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* CONTACT MESSAGE AREA END */}


      {/* <!-- GOOGLE MAP AREA START --> */}
      <div className="google-map mb-120 mt-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.290967147713!2d73.18203009999999!3d17.6363729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ebe93f7ca361%3A0xc3416bea2f2bbf81!2sViyad%20Bliss!5e0!3m2!1sen!2sin!4v1772197338260!5m2!1sen!2sin"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      {/* <!-- GOOGLE MAP AREA END --> */}
    </>
  );
  
};

export default Contact;
