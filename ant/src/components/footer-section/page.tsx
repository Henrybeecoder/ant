import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const socials = [
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "Twitter", link: "https://www.twitter.com" },
    { name: "LinkedIn", link: "https://www.linkedin.com" },
  ];
  const legals = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Refs for each section
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const locationRef = useRef(null);
  const industriesRef = useRef(null);
  const expertsRef = useRef(null);
  const socialsRef = useRef(null);
  const legalRef = useRef(null);
  const foundedRef = useRef(null);
  const copyrightRef = useRef(null);

  // Check if elements are in view
  const isLogoInView = useInView(logoRef, { once: true });
  const isTaglineInView = useInView(taglineRef, { once: true });
  const isLocationInView = useInView(locationRef, { once: true });
  const isIndustriesInView = useInView(industriesRef, { once: true });
  const isExpertsInView = useInView(expertsRef, { once: true });
  const isSocialsInView = useInView(socialsRef, { once: true });
  const isLegalInView = useInView(legalRef, { once: true });
  const isFoundedInView = useInView(foundedRef, { once: true });
  const isCopyrightInView = useInView(copyrightRef, { once: true });

  return (
    <div className="w-full min-h-[100vh] py-6 lg:px-15 px-0 mt-72">
      {/* Logo and Tagline */}
      <div className="flex border-b border-b-[#444444] pb-8 text-[#ffffff] font-[400] justify-between items-center">
        <motion.div
          ref={logoRef}
          initial="hidden"
          animate={isLogoInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="w-[50%] flex flex-row justify-start"
        >
          <img src="/assets/icons/logo.svg" alt="logo" />
        </motion.div>
        <motion.div
          ref={taglineRef}
          initial="hidden"
          animate={isTaglineInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="w-[30%] lg:text-[1rem] text-[0.9rem] flex flex-row justify-end text-end"
        >
          <p>We will be the spinal cord of the next gen billionaires</p>
        </motion.div>
      </div>

      {/* Location */}
      <motion.div
        ref={locationRef}
        initial="hidden"
        animate={isLocationInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-6 border-b pb-6 border-b-[#444444]"
      >
        <div className="flex flex-row text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start">
            <div className="flex flex-row items-center">
              <img src="/assets/icons/map.svg" alt="phone" className="w-6 h-6" />
              <p className="ml-1 text-[1.1rem]">Location</p>
            </div>
          </div>
          <div className="lg:w-[30%] w-[50%] lg:text-[1rem] text-[0.9rem] font-[400] flex flex-row justify-end text-end">
            <p>71-75, Shelton Street, Covent Garden, London, WC2H 9JQ</p>
          </div>
        </div>
        <div className="flex flex-row mt-4 lg:text-[1rem] text-[0.9rem] text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
          <div className="lg:w-[30%] w-[50%] font-[400] flex flex-row justify-end text-end">
            <p>5842+632, Grand Stand, Nad Al Sheba, Nad Al Sheba 1, Dubai</p>
          </div>
        </div>
      </motion.div>

      {/* Industries Served */}
      <motion.div
        ref={industriesRef}
        initial="hidden"
        animate={isIndustriesInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-6 border-b pb-8 border-b-[#444444]"
      >
        <div className="flex flex-row text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start">
            <div className="flex flex-row items-center">
              <img src="/assets/icons/industries.svg" alt="phone" className="w-8 h-8" />
              <p className="ml-1 text-[1rem]">Industries served</p>
            </div>
          </div>
          <div className="lg:w-[30%] w-[50%] font-[400] lg:text-[1rem] text-[0.9rem] flex flex-row justify-end text-end">
            <p>SMBs</p>
          </div>
        </div>
        <div className="flex flex-row text-[1.1rem] text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
          <div className="lg:w-[30%] w-[50%] font-[400] lg:text-[1rem] text-[0.9rem] flex flex-row justify-end text-end">
            <p>Startups</p>
          </div>
        </div>
        <div className="flex flex-row mt-4 text-[1.1rem] text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
          <div className="lg:w-[30%] w-[50%] font-[400] lg:text-[1rem] text-[0.9rem] flex flex-row justify-end text-end">
            <p>Healthcare</p>
          </div>
        </div>
        <div className="flex flex-row mt-4 text-[1.1rem] text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
          <div className="lg:w-[30%] w-[50%] font-[400] lg:text-[1rem] text-[0.9rem] flex flex-row justify-end text-end">
            <p>NGOs & Non-profits</p>
          </div>
        </div>
        <div className="flex flex-row mt-4 text-[1.1rem] text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
          <div className="lg:w-[30%] w-[50%] font-[400] lg:text-[1rem] text-[0.9rem] flex flex-row justify-end text-end">
            <p>Home services & HVAC</p>
          </div>
        </div>
        <div className="flex flex-row mt-4 text-[1.1rem] text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
          <div className="lg:w-[30%] w-[50%] font-[400] lg:text-[1rem] text-[0.9rem] flex flex-row justify-end text-end">
            <p>Government Service Businesses</p>
          </div>
        </div>
      </motion.div>

      {/* Experts */}
      <motion.div
        ref={expertsRef}
        initial="hidden"
        animate={isExpertsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-6 border-b pb-6 border-b-[#444444]"
      >
        <div className="flex flex-row text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start">
            <div className="flex flex-row items-center">
              <img src="/assets/icons/experts.svg" alt="phone" className="w-7 h-7" />
              <p className="ml-1 text-[1rem]">Experts</p>
            </div>
          </div>
          <div className="w-[30%] text-[1rem] flex flex-row justify-end text-end">
            <p>12+</p>
          </div>
        </div>
      </motion.div>

      {/* Socials */}
      <motion.div
        ref={socialsRef}
        initial="hidden"
        animate={isSocialsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-6 border-b pb-8 w-[100%] border-b-[#444444]"
      >
        <div className="flex flex-row text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-full mb-4 flex flex-row text-[#FFFFFFB2] justify-between">
            <div className="flex w-[50%] flex-row items-center">
              <img src="/assets/icons/global.svg" alt="socials" className="w-6 h-6" />
              <p className="ml-1 lg:text-[1rem] text-[0.9rem]">Socials</p>
            </div>
            <div className="w-[50%] flex flex-row justify-end text-end">
              <motion.a
                href={'#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full cursor-pointer lg:text-[1rem] text-[0.9rem] text-[#ffffff] font-[400]"
                whileHover={{ textDecoration: 'underline' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Instagram
              </motion.a>
            </div>
          </div>
        </div>
        {socials.map((social, index) => (
          <div key={index} className="flex flex-row mb-4 lg:text-[1rem] text-[0.9rem] text-[#ffffff] font-[400] justify-between items-center">
            <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
            <motion.a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[35%] cursor-pointer flex flex-row justify-end text-end"
              whileHover={{ textDecoration: 'underline' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {social.name}
            </motion.a>
          </div>
        ))}
      </motion.div>

      {/* Legal */}
      <motion.div
        ref={legalRef}
        initial="hidden"
        animate={isLegalInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-6 border-b pb-8 w-[100%] border-b-[#444444]"
      >
        <div className="flex flex-row text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-full mb-4 flex flex-row text-[#FFFFFFB2] justify-between">
            <div className="flex w-[50%] flex-row items-center">
              <img src="/assets/icons/legal.svg" alt="legal" className="w-6 h-6" />
              <p className="ml-1 lg:text-[1rem] text-[1rem]">Legal</p>
            </div>
            <div className="w-[50%] flex flex-row justify-end text-end">
              <motion.a
                href={'/cookie-policy'}
               
                className="w-full cursor-pointer lg:text-[1rem] text-[0.9rem] text-[#ffffff] font-[400]"
                whileHover={{ textDecoration: 'underline' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
        {legals.map((legal, index) => (
          <div key={index} className="flex flex-row mb-4 lg:text-[1rem] text-[0.9rem] text-[#ffffff] font-[400] justify-between items-center">
            <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start"></div>
            <motion.a
              href={legal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30%] cursor-pointer flex flex-row justify-end text-end"
              whileHover={{ textDecoration: 'underline' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {legal.name}
            </motion.a>
          </div>
        ))}
      </motion.div>

      {/* Founded */}
      <motion.div
        ref={foundedRef}
        initial="hidden"
        animate={isFoundedInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-4 border-b pb-3 border-b-[#444444]"
      >
        <div className="flex flex-row text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start">
            <div className="flex flex-row">
              <img src="/assets/icons/founded.svg" alt="founded" className="w-6 h-6" />
              <p className="ml-1">Founded</p>
            </div>
          </div>
          <div className="w-[30%] text-[1rem] flex flex-row justify-end text-end">
            <p>June 2023</p>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        ref={copyrightRef}
        initial="hidden"
        animate={isCopyrightInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="mt-4  pb-3 "
      >
        <div className="flex flex-row text-[#ffffff] font-[400] justify-between items-center">
          <div className="w-[50%] flex flex-row text-[#FFFFFFB2] justify-start">
            <div className="flex flex-row">
              <img src="/assets/icons/copyright.svg" alt="copyright" className="w-6 h-6" />
              <p className="ml-1">Copyright</p>
            </div>
          </div>
          <div className="w-[30%] text-[1rem] flex flex-row justify-end text-end">
            <p>Alphanextech2023</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}