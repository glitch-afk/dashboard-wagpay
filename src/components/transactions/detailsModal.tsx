import React, { useState } from 'react';

import ModalAction from '../common/ModalAction';

interface IDetailsModal {
  sender: string;
  receiver: string;
  storeName: string;
  customerName: string;
  productName: string;
  amount: number;
  paidIn?: string;
}

const DetailsModal = ({
  sender,
  receiver,
  storeName,
  customerName,
  productName,
  amount,
  paidIn,
}: IDetailsModal) => {
  const [integrationModalOpen, setIntegrationModalOpen] = useState(false);
  return (
    <div className="m-1.5">
      {/* Start */}
      <button
        className="btn rounded-full bg-indigo-500 text-white hover:bg-indigo-600"
        aria-controls="integration-modal"
        onClick={(e) => {
          e.stopPropagation();
          setIntegrationModalOpen(true);
        }}
      >
        View Details
      </button>
      <ModalAction
        id="integration-modal"
        modalOpen={integrationModalOpen}
        setModalOpen={setIntegrationModalOpen}
      >
        {/* Modal header */}
        <div className="mb-5 text-center">
          {/* Transaction */}
          <div className="mb-4 inline-flex items-center justify-center space-x-3">
            {/* from address */}
            <div className="cursor-pointer">{sender}</div>
            {/* Arrows */}
            <svg
              className="h-4 w-4 fill-current text-gray-400"
              viewBox="0 0 16 16"
            >
              <path d="M5 3V0L0 4l5 4V5h8a1 1 0 000-2H5zM11 11H3a1 1 0 000 2h8v3l5-4-5-4v3z" />
            </svg>
            {/* to address */}
            <div className="cursor-pointer">{receiver}</div>
          </div>
          <div className="flex items-center justify-center space-x-2 text-center text-lg font-semibold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
              <line x1="5" y1="21" x2="5" y2="10.85"></line>
              <line x1="19" y1="21" x2="19" y2="10.85"></line>
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
            </svg>
            <p>{storeName}</p>
          </div>
        </div>
        {/* Modal content */}
        <div className="mb-5 w-full text-sm">
          <ul className="mb-5 w-full space-y-3">
            <li className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <div>Customer Name</div>
              </div>
              <div>{customerName}</div>
            </li>
            <li className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="6" cy="19" r="2"></circle>
                  <circle cx="17" cy="19" r="2"></circle>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
                <div>Product Sold</div>
              </div>
              <div>{productName}</div>
            </li>
            <li className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 12l6 -9l6 9l-6 9z"></path>
                  <path d="M6 12l6 -3l6 3l-6 2z"></path>
                </svg>
                <div>Amount</div>
              </div>
              <div>
                {amount} {paidIn}
              </div>
            </li>
          </ul>
        </div>
      </ModalAction>
      {/* End */}
    </div>
  );
};

export default DetailsModal;
