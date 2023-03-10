import React from "react";

function CustomModal({isOpen,onClose,title,details}) {
const handleRefresh = (event) =>{
event.preventDefault()
window.location.reload(true)
}
    return (
<div>
{isOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 "></div>
          <div className="bg-white rounded-lg overflow-hidden max-w-md mx-auto z-10">
            <div className="px-4 py-4 flex justify-between items-center bg-gray-100">
              <h2 className="text-lg font-medium">{title}</h2>
              <button onClick={handleRefresh}>
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
            {details}
            </div>
          </div>
        </div>
      )}
</div>

        );
}

export default CustomModal;