import { Mail, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <div className=" min-h-screen py-20 text-lg px-4 sm:px-8  lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-orange-500 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Swamiji Cultural Trust is committed to serving society through spiritual, educational, cultural, and charitable initiatives. We aim to preserve and promote Indian traditions through various programs and outreach activities. Below you will find our official registration details and how to reach us in person or online.
        </p>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-500">Official Details</h2>
            <p className="text-gray-700 text-lg ">
              <strong>Registered Name:</strong> Swamiji Cultural Trust<br />
              <strong>Registration Number:</strong> 123/BLR/2020<br />
              <strong>Registered Address:</strong> #45, Spiritual Lane, Bengaluru, Karnataka, India - 560001<br />
              <strong>Email:</strong> support@swamijitrust.org<br />
              <strong>Phone:</strong> +91 12345 67890<br />
              <strong>Working Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-700 text-lg pt-4">
              The Swamiji Cultural Trust is recognized under the Indian Trusts Act and holds a commitment to cultural revivalism. Our programs range from classical arts training, Vedic education, rural development workshops, and spiritual discourse sessions. We collaborate with government and private entities to amplify cultural impact.
            </p>
            <p className="text-gray-700 text-lg">
              For partnerships, event invitations, donations, or volunteering, please reach out via the contact details above. We deeply value your support in sustaining and spreading the essence of our heritage.
            </p>
          </div>

          {/* Visit Us Section */}
          <div className="bg-orange-100 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold text-orange-500 mb-2">Visit Us</h2>
            <p className="text-gray-700 text-lg mb-4">
              We welcome you to visit our head office or one of our centers. Use the map below to find us. For large group visits, please contact us in advance.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Visitors can attend cultural performances, browse our library of ancient texts, and participate in open yoga and meditation sessions held every weekend. We encourage educational institutions and cultural enthusiasts to coordinate with us for guided tours.
            </p>
            {/* Google Map Embed */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8466.941150710485!2d86.95208388273534!3d23.691458769745356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f78dc6e6993%3A0x58a6040fd4355f40!2sSwamiji%20Cultural%20Trust!5e1!3m2!1sen!2sin!4v1749394496085!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
