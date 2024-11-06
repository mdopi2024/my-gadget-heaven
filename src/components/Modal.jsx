
import { useNavigate } from "react-router-dom";
import { MdOutlineDoneOutline } from "react-icons/md";


const Modal = ({price}) => {

    const navigate = useNavigate()
    const handleModal = ()=>{
        navigate('/')
       localStorage.removeItem('card')
       localStorage.removeItem('wishlist')
    
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
           
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center">
                    <div className="flex justify-center items-center mb-6">
                        <MdOutlineDoneOutline className="text-4xl text-green-600"></MdOutlineDoneOutline>
                    </div>
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p className="py-4">Thanks for purchasing. <br />
                    Total: {price}</p>
                    <div className="w-full px-10 ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleModal}  className="bg-gray-400 w-full py-2 rounded-2xl text-black font-bold">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;