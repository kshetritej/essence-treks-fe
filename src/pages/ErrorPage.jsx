import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import "animate.css";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-5 bg-gray-900 bg-cover bg-center">
            <Helmet>
                <title>Error | EcoExplorer.</title>
            </Helmet>
            <div className="text-center w-full max-w-lg mx-auto bg-[#23272f] bg-opacity-90 p-8 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">
                    <ReactTyped
                        strings={["404 🕵️‍♂️"]}
                        typeSpeed={100}
                        backSpeed={40}
                        loop={false}
                    />
                </h1>
                <p className="text-sm font-semibold mt-4 text-gray-200 animate__animated animate__fadeIn animate__delay-2s">
                    Whoops! This page cannot be found. 😅
                </p>
                <p className="text-sm text-gray-400 mt-3 animate__animated animate__fadeIn animate__delay-3s">
                    Looks like you’ve gone off the beaten path! 🌍
                </p>
                <div className="mt-8">
                    <a
                        href="/"
                        className="inline-block px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-700 animate__animated animate__fadeIn animate__delay-4s"
                    >
                        🏠 Head back home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
