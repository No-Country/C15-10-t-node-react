
export interface ContactProps {
    closeForm: () => void
    title: () => string;
  }
  
  const Contact: React.FC<ContactProps> = ({ closeForm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="popup-form absolute mt-12 text-black">
            <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
              <h1 className="text-4xl font-semibold text-center text-black">
                Usuario
              </h1>
              <div className=" flex flex-col">
                <input
                  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                  type="text"
                  name="userFirstName"
                  id="userFirstName"
                  placeholder="First Name"
                />
              </div>
              <div className=" flex flex-col">
                <input
                  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                  type="text"
                  name="userLastName"
                  id="userLastName"
                  placeholder="Last Name"
                />
              </div>
              <div className=" flex flex-col">
                <input
                  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  placeholder="Your Email"
                />
              </div>
              <div className=" flex flex-col">
                <input
                  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                  type="number"
                  name="userNumber"
                  id="userNumber"
                  placeholder="Phone No."
                />
              </div>
              <div className=" flex gap-5">
                <button
                  className=" text-center mx-auto bg-green-600 text-black font-semibold px-8 rounded-md active:bg-red-500"
                  onClick={closeForm}
                >
                  Registrarse
                </button>
                <button
                  className=" text-center mx-auto bg-red-500 text-black font-semibold px-10 rounded-md active:bg-red-500"
                  onClick={closeForm}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };
      
export default Contact
