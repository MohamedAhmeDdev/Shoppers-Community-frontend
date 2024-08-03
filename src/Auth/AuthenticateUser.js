import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

function AuthenticateUser() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/verify/${token}`);
        if (!response.ok) {
          throw new Error('Failed to verify the user.');
        }
        const data = await response.json();
        setMessage(data.message);
        setIsVerified(true);
        console.log(data);
      } catch (error) {
        console.error('There was an error verifying your email.');
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };

    verifyUser();
  }, [token]);

  return (
    <div>
      <section className="max-w-2xl mx-auto bg-white my-20">
        <div className="h-[200px] bg-blue-500 w-full text-white flex items-center justify-center flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1px] bg-white"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
              THANKS FOR SIGNING UP!
            </div>
            <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
              Verify your E-mail
            </div>
          </div>
        </div>

        <main className="mt-8 px-5 sm:px-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <ClipLoader size={50} color={"#365CCE"} loading={loading} />
            </div>
          ) : (
            <>
              <p>{message}</p>
              {isVerified && (
                <Link to='/login'>
                  <button className="px-6 py-2 mt-6 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:none">
                    Login
                  </button>
                </Link>
              )}
            </>
          )}
        </main>
      </section>
    </div>
  );
}

export default AuthenticateUser;
