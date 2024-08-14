import SectionTitle from "../../component/SectionTitle/SectionTitle";


const ContactPage = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 py-16">
            <SectionTitle subHeading='CONTACT US' heading='Feel Free To Contact Us'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 bg-white shadow-lg p-3">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 border"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-sm bg-[#D99904] text-white shadow-sm` focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="relative h-full  bg-white shadow-lg p-3">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5225143438754!2d-122.41941548468123!3d37.77492927975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d2d4a4e5b%3A0x5f846d59456e357a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1607528386485!5m2!1sen!2sus"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
