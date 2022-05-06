import React from 'react';

const UserCard = () => {
  return (
    <div className="col-span-full flex flex-col rounded-sm border border-gray-200 bg-gray-200 shadow-lg xl:col-span-4">
      <div className="my-8 flex w-full flex-col items-center space-y-8 px-12">
        <div className="h-32 w-32 rounded-full bg-white" />
        <div className="text-center">
          <h2 className="font-inter text-lg text-gray-900">Name</h2>
          <p className="font-inter">@username</p>
        </div>
        <button className="w-full bg-white py-4 px-6 font-inter text-lg text-gray-900">
          Ethereum Wallet Address
        </button>
        <button className="w-full bg-white py-4 px-6 font-inter text-lg text-gray-900">
          Solana Wallet Address
        </button>
      </div>
    </div>
  );
};

export default UserCard;
