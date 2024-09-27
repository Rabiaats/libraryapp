import { useState } from "react";
import { toastSuccessNotify } from "../helpers/ToastNotify";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        toastSuccessNotify("Mesajınız alınmıştır");

        setEmail("");
        setPassword("");
        setPhone("");
        setMessage("");
    };

    return (
        <main className="relative py-28 bg-gray-100 dark:bg-gray-900">
            <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                    <h3 className="text-gray-900 dark:text-gray-100 font-semibold">
                        Contact
                    </h3>
                    <p className="text-white text-3xl dark:text-gray-950 font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        We’d love to hear from you! Please fill out the form below.
                    </p>
                </div>
                <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl dark:bg-gray-dark-main">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <input
                                placeholder="Email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 focus:text-gray-900 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg dark:focus:text-white"
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg dark:focus:text-white"
                            />
                        </div>
                        <div>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <p>TR</p>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+90 (500) 000-000"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg dark:focus:text-white"
                                />
                            </div>
                        </div>
                        <div>
                            <textarea
                                required
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg dark:focus:text-white"
                            ></textarea>
                        </div>
                        <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-900 rounded-lg duration-150 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-dark-main dark:hover:text-white">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div
                className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                style={{
                    background:
                        "linear-gradient(106.89deg, rgba(0, 0, 0, 0.11) 15.73%, rgba(128, 128, 128, 0.41) 15.74%, rgba(192, 192, 192, 0.26) 56.49%, rgba(255, 255, 255, 0.4) 115.91%)",
                }}
            ></div>
        </main>
    );
};

export default Contact;
