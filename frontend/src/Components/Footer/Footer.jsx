import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#011F5B] text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We offer the best collection of smartwatches from leading brands like Samsung, Apple, Mi, boAt, and Noise.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:text-white  transition-colors">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#products" className="hover:text-white  transition-colors">
                Mobiles
              </a>
            </li>
            <li className="mb-2">
              <a href="#products" className="hover:text-white  transition-colors">
               Earbuds
              </a>
            </li>
            <li className="mb-2">
              <a href="#products" className="hover:text-white transition-colors">
               Smartwatch
              </a>
            </li>
            <li className="mb-2">
              <a href="#products" className="hover:text-white  transition-colors">
                Speakers
              </a>
            </li>
            <li className="mb-2">
              <a href="#products" className="hover:text-white  transition-colors">
               TV
              </a>
            </li>
           
            <li>
              <a href="#contact" className="hover:text-white ">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Email: codewithankit1@gmail.com</p>
          <p className="text-sm mb-2">Phone:+91-7289093613</p>
          <p className="text-sm">Address: coming soon</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-[#AFDBF5] pt-4 text-center text-sm">
        <p>&copy; 2024 Mouryan Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
