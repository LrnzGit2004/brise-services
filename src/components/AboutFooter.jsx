import React from 'react'
import { assets } from '../assets/assets'

const AboutFooter = () => {
  return (
    <div>
      <div className="mt-10 py-5 bg-gray-500">
        <div className="partenaire w-full bg-orange-700 py-4">
          <div className="titre text-2xl">Nos partenaires</div>
          <div className="white bg-white w-full p-10 my-4 flex ">
            <img
              className="cursor-pointer"
              src={assets.logo_délioce_naturels_new}
              alt=""
            />
            <img
              className="h-36 sylvia cursor-pointer"
              src={assets.logo_new}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFooter
