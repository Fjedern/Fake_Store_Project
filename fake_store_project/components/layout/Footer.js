import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css";

export default function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <footer className="bg-gray-800 text-white body-font">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Copyright:{" "}
          </p>
          <p className="inline-flex text-gray-500 ml-1 text-sm">
            Fjedern Swala PalmquistS
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <div className="flex space-x-4">
              <Link href="/about" className="text-gray-400" passHref>
                <a className="hover:bg-gray-700 px-3 py-2 rounded-md ml-1">
                  {" "}
                  About Us
                </a>
              </Link>
              <Link href="/" className="text-gray-400" passHref>
                <a className="hover:bg-gray-700 px-3 py-2 rounded-md ml-1">
                  Sign Up
                </a>
              </Link>
            </div>
          </span>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
