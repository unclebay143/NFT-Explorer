import React from "react";
import { NftHistoryTable } from "./NftHistoryTable";

export default function NftDescriptionModal({
  nftName,
  nftDescription,
  handleShowModal,
  token_address,
}) {
  return (
    <React.Fragment>
      <div className='fixed inset-0 z-50 flex items-center justify-center pt-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
        <div className='relative w-9/12 max-w-3xl mx-auto my-6'>
          {/*content*/}
          <div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none dark:bg-gray-700 focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200'>
              <h3 className='text-3xl font-semibold capitalize dark:text-white'>
                {nftName}
              </h3>
              <button
                className='float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none dark:bg-gray-700 focus:outline-none'
                onClick={handleShowModal}
              >
                <span className='block w-6 h-6 text-2xl text-red-500 bg-transparent outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative flex-auto p-6'>
              <p className='my-4 text-lg leading-relaxed dark:text-white'>
                {nftDescription}
              </p>
            </div>
            <h3 className='p-5 text-2xl font-semibold dark:text-white'>
              NFT Histories
            </h3>
            <div className='p-6 border-t border-solid rounded-b border-blueGray-200'>
              <NftHistoryTable nftAddress={token_address} />
            </div>
            <button
              className='px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none'
              type='button'
              onClick={handleShowModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
    </React.Fragment>
  );
}
