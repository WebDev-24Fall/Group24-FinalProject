import styles from "../styles/ContactUsPage.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactPage}>
      <div className="container mx-auto flex flex-col">
        <div className="justify-center">
          <h2 className="text-center text-xl sm:text-2xl">Contact Us</h2>
          <h1 className="mt-12 text-center text-3xl font-bold sm:text-6xl md:text-8xl">
            Get in Touch with Us
          </h1>
          <div className="mt-10 text-center">
            <p className="text-lg sm:text-xl">
              We’d love to hear from you! Whether you have questions, feedback, or just
              want to say hello, feel free to reach out.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center gap-6">
            <form className="w-full max-w-lg">
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="border py-2 px-6 rounded bg-white hover:bg-gray-200"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold">Other Ways to Contact Us</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>Email: contact@healthychoices.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Healthy Way, Wellness City, USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
