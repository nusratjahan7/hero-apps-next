import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-gray-800 ">
      <div className="text-center p-6 max-w-lg w-full bg-gray-100 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <p className="text-xl font-medium text-gray-500 mt-4">Oops! The page you are looking for cannot be found.</p>
        <p className="mt-2 text-lg text-gray-400">It might have been moved, or it never existed in the first place.</p>
        <div className="mt-6">
          <Link href="/" className="btn btn-primary text-white font-semibold text-lg">Go Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;