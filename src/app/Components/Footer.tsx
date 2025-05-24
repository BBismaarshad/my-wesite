const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  px-4">
      <div className="max-w-6xl mx-auto">
        {/* Copyright section */}
        <div className="border-t border-gray-800 w-full pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bisma Arshad. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs  py-5 mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
