import React from 'react'
import { Link } from 'react-router-dom'

const DisplayCards = ({cardHeading,CardText,linkAdress,linkText}) => {
  return (
    <div className="w-[500px] h-[300px] bg-white bg-opacity-90 shadow-md max-xl:mt-6 max-xl:mr-[150px] rounded-xl">
                <h1 className="text-xl font-bold text-center mt-20">
                  Do you have free unused space?
                </h1>
                
                <p className="text-lg ml-5">
                  List that place on park vue and earn money from that unused
                  assets
                </p>
                <Link to="/listings">
                  <button className="bg-orange-400 text-white font-bold  w-[200px] p-2 rounded-2xl ml-[150px]">
                    List Now
                  </button>
                </Link>
              </div>
  )
}

export default DisplayCards
