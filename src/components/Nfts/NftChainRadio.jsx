import React from "react";

export const NftChainRadio = ({ handleSelectedChain }) => {
  const chains = ["eth", "matic", "bsc", "fantom"];
  return (
    <React.Fragment>
      <div className='flex justify-center mt-7'>
        <h3 className='text-gray-700 dark:text-white'>Chain (optional):</h3>

        {chains.map((chainNickname) => {
          return (
            <div
              className='px-3 form-check form-check-inline'
              key={chainNickname}
            >
              <input
                className='float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none'
                type='radio'
                name='chain'
                value={chainNickname}
                id={chainNickname}
                onChange={handleSelectedChain}
              />
              <label
                className='inline-block text-gray-800 capitalize form-check-label dark:text-white'
                htmlFor={chainNickname}
              >
                {chainNickname}
              </label>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
