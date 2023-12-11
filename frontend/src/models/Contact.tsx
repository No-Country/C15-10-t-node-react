
export interface ContactProps {
    closeForm: () => void
    title: () => string;
  }
  
  const Contact: React.FC<ContactProps> = ({ closeForm }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="popup-form absolute mt-12 text-black">
            <form className=" w-80 md:w-96 space-y-5 bg-green-400 p-5 rounded-xl">
              <h1 className="text-4xl font-semibold text-center text-black">
                LOGIN
              </h1>
              <div className=" flex flex-col">
                <input
                  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="UserName"
                />
              </div>
              <div className=" flex flex-col">
                <input
                  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div className=" flex gap-5">
                <button
                  className=" text-center mx-auto bg-green-600 text-black font-semibold px-8 rounded-md active:bg-red-500"
                  onClick={closeForm}
                >
                  Log in
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
