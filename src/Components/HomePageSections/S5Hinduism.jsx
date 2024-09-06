import { useEffect, useState } from "react";
import hind1 from "../../assets/images/hind1.webp";
import hind2 from "../../assets/images/hind2.webp";
import hind3 from "../../assets/images/hind3.webp";
import hind4 from "../../assets/images/hint8.webp";
import hind5 from "../../assets/images/hind5.webp";
import hind6 from "../../assets/images/hind6.webp";

const imageArray = [
    {
        id: 1,
        src: hind1,
        title: "12 Jyotirlinga",
        description: [
            "Somnath in Gujarat",
            "Mallikarjuna in Andhra Pradesh",
            "Mahakaleshwar in Madhya Pradesh",
            "Omkareshwar in Madhya Pradesh",
            "Kedarnath in Uttarakhand",
            "Bhimashankar in Maharashtra",
            "Kashi Vishwanath in Uttar Pradesh",
            "Trimbakeshwar in Maharashtra",
            "Vaidyanath in Jharkhand",
            "Nageshwar in Gujarat",
            "Rameshwar in Tamil Nadu",
            "Grishneshwar in Maharashtra",
        ],
    },
    {
        id: 2,
        src: hind2,
        title: "4 Dham Yatra",
        description: [
            "Badrinath in Uttarakhand",
            "Dwarka in Gujarat",
            "Puri in Odisha",
            "Rameswaram in Tamil Nadu",
        ],
    },
    {
        id: 3,
        src: hind3,
        title: "51 Shaktipitha",
        description: [
            "Kanchi Kamakshi Temple in Kanchipuram, Tamil Nadu",
            "Kamakhya Temple in Guwahati, Assam",
            "Vimala Temple in Puri, Odisha",
            "Tara Tarini Temple in Berhampur, Odisha",
            "Dakshineswar Kali Temple in Kolkata, West Bengal",
            "Jwalamukhi Temple in Kangra, Himachal Pradesh",
            "Maa Chhinnamasta Temple in Rajrappa, Jharkhand",
            "Mahalakshmi Temple in Kolhapur, Maharashtra"
        ],
    },
    {
        id: 4,
        src: hind4,
        title: "Important Temples",
        description: [
            "Badrinath Temple - Uttarakhand",
            "Kedarnath Temple - Uttarakhand",
            "Jagannath Temple - Puri, Odisha",
            "Somnath Temple - Gujarat",
            "Meenakshi Amman Temple - Madurai, Tamil Nadu",
            "Brihadeeswarar Temple - Thanjavur, Tamil Nadu",
            "Vaishno Devi Temple - Jammu and Kashmir",
            "Golden Temple (Harmandir Sahib) - Amritsar, Punjab",
            "Tirupati Balaji Temple - Tirumala, Andhra Pradesh",
            "Siddhivinayak Temple - Mumbai, Maharashtra"
        ],
    },
    {
        id: 5,
        src: hind5,
        title: "7 Sangam",
        description: [
            "Prayag (Triveni Sangam)",
            "Rudra Prayag",
            "Deva Prayag",
            "Karna Prayag",
            "Nanda Prayag",
            "Vishnu Prayag",
            "Tapti Prayag"
        ],
    },
    {
        id: 6,
        src: hind6,
        title: "Historic Archaeology",
        description: [
            "Harappa and Mohenjo-Daro",
            "Ajanta and Ellora Caves",
            "Hampi",
            "Sanchi Stupa",
            "Mahabalipuram",
            "Konark Sun Temple",
            "Fatehpur Sikri"
        ],
    },
    // Add more objects for other images as needed
];

const S5Hinduism = () => {
    // contact us model
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageId) => {
        setSelectedImage(imageArray.find((image) => image.id === imageId));
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            // Disable scrolling when the modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when the modal is closed
            document.body.style.overflowY = 'auto';

            // Cleanup function to restore default overflow when component unmounts
            return () => {
                document.body.style.overflowY = 'auto';
            };
        }
    }, [isOpen]);



    return (
        <>
            <div id="Rewards">
                <div className=" min-h-fit w-screen my-10  ">
                    <div className=" heading flex  flex-col items-center text-center space-y-5 px-5  py-10 ">
                        <div className=" space-y-3 ">
                            <p>Spiritual Places</p>
                            <h1 className="text-5xl font-bold  tablet:text-4xl ">
                            Virtual Reality: Experience Beyond Imagination
                            </h1>
                        </div>
                        <p className="text-sm max-w-[48rem] leading-tight text-gray-400 ">
                            Immerse yourself in captivating virtual worlds. Explore, create, and experience like never before with our cutting-edge virtual reality technology
                        </p>
                    </div>

                    <div>
                        <div id="Rewards">
                            <div className=" flex justify-center flex-wrap gap-10 phone:gap-5 min-h-fit w-screen py-10 ">
                                {/* Your existing code for images */}
                                {imageArray.map((image) => (
                                    <div key={image.id} onClick={() => openModal(image.id)}>
                                        <img
                                            className="h-auto w-auto rounded-2xl"
                                            src={image.src}
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    id="popup-modal"
                    onClick={closeModal}
                    tabIndex="-1"
                    className="fixed h-[100vh]  w-screen inset-0 z-50 bg-slate-900 bg-opacity-50"
                >
                    {/* Your existing modal code */}
                    <div className="min-h-[100vh]  flex items-center justify-center">
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative  h-fit rounded-3xl shadow bg-opacity-90"
                        >
                            <button
                                onClick={closeModal}
                                type="button"
                                className="absolute top-3 end-2.5 text-gray-100 bg-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>

                            <div className="max-w-[40rem] h-full p-4 md:p-5 text-center  ">
                                <div className="flex gap-3 flex-col items-center  justify-center">
                                    {/* Render selected image details */}
                                    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div href="#" className="" >
                                            <img
                                                className=" rounded-t-lg"
                                                src={selectedImage.src}
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-5 flex flex-col items-center ">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold text-gray-900 uppercase tracking-widest dark:text-white">
                                                    {selectedImage.title}
                                                </h5>
                                            </a>
                                            <ol className="text-left" >
                                                {selectedImage.description.map((item, index) => (
                                                    <li key={index}>{`${index + 1}. ${item}`}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default S5Hinduism;
