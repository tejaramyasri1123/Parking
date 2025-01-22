import React from "react";

const Process = (props) => {
  const { layoutType } = props;

  const renderContent = () => {
    return (
      <div className="flex space-x-5 container mt-[3rem]">
        {layoutType === "imageFirst" ? (
          <>
            <div className="flex">
              <div className="relative p-4">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-orange-500"></div>

                <div className="z-10 relative bg-white p-4">
                  <img
                    src={props.imageurl}
                    style={{ width: "800px", height: "auto" }}
                    className="flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex items-center ml-96">
                <h1 className="text-3xl text-orange-400 p-3 font-bold border-orange-100 border-4 mb-12">
                  {props.number}
                </h1>
                <div className="ml-5">
                  <h1 className="font-bold text-3xl">{props.heading}</h1>
                  <p className="text-xl w-[300px]">{props.text}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="flex items-center">
                <h1 className="text-3xl text-orange-400 p-3 font-bold border-orange-100 border-4 mb-12">
                  {props.number}
                </h1>
                <div className="ml-5">
                  <h1 className="font-bold text-3xl">{props.heading}</h1>
                  <p className="w-1/2 text-xl">{props.text}</p>
                </div>
              </div>
            </div>
            <div className="relative p-4">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-orange-500"></div>

              <div className="z-10 relative bg-white p-4">
                <img
                  src={props.imageurl}
                  style={{ width: "600px", height: "auto" }}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return renderContent();
};

export default Process;
