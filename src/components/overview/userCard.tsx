import React from 'react';

const UserCard = () => {
  return (
    <div className="col-span-full flex flex-col rounded-lg bg-wagpay-primary shadow-lg xl:col-span-4">
      <div className="my-8 flex w-full flex-col items-center space-y-8 px-12">
        <div className="h-32 w-32 rounded-full bg-white" />
        <div className="text-center">
          <h2 className="font-inter text-lg text-white">Name</h2>
          <p className="font-inter text-gray-300">@username</p>
        </div>
        <button className="w-full rounded-lg bg-wagpay-dark py-4 px-6 font-inter text-lg text-white">
          Ethereum Wallet Address
        </button>
        <button className="w-full rounded-lg bg-wagpay-dark py-4 px-6 font-inter text-lg text-white">
          Solana Wallet Address
        </button>
      </div>
    </div>
  );
};

export default UserCard;
