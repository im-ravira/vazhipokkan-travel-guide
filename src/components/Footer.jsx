import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white w-full m-0 px-0 py-4">
      <div className="flex justify-center space-x-6 mb-2">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-blue-500" />
        </a>
        <a href="https://github.com/ravira-01" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-slate-100" />
        </a>
        <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:text-pink-600" />
        </a>
        <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={24} className="hover:text-red-500" />
        </a>
      </div>
      <hr className="border-gray-700 mb-2" />
      <div className="mt-3 text-center text-sm block md:hidden">
        <p>&copy; Vazhipokkan | tamilnadutourism.gov.in 2024</p>
      </div>
      <div className="text-center text-xs mt-3">
        <p>If you'r facing any bug or issue while using<br className="md:hidden block" /> this site feel free to contact</p>
      </div>
      <div className="mt-3 text-center text-sm hidden md:block">
        <p>&copy; Vazhipokkan | tamilnadutourism.gov.in 2024</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
