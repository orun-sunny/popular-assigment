const ScheduleCard = ({ allItems, titleAllData }) => {
  return (
    <div className="md:px-20">
      <h1>{allItems?.message}</h1>

      <div className="">
        <table className="w-full bg-white  rounded my-8 ">
          <thead>
            <tr className="bg-gray-400">
              {/* title all data*/}
              {titleAllData?.map((data, index) => (
                <th key={index} className="border px-6 py-3">
                  {data?.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allItems?.flightOffer.map((flightOfferData, index) => (
              <tr key={index} className="text-center bg-gray-60  ">
                <td className="border-b border-red-200 px-4 py-2">
                  {flightOfferData?.itineraries.map(
                    (itinerariesDatas, index) => (
                      <h1 key={index}>
                        {itinerariesDatas?.segments.map(
                          (segmentsData, index) => (
                            <div key={index} className="flex gap-4">
                              <p>{segmentsData?.carrierCode}</p>
                              <h1>{segmentsData?.aircraft}</h1>
                            </div>
                          )
                        )}
                      </h1>
                    )
                  )}
                </td>

                {/* AIRCRAFT  */}
                <td className="border-b border-red-300 px-6 py-3">
                  {flightOfferData?.itineraries.map(
                    (itinerariesDatas, index) => (
                      <h1 key={index}>
                        {itinerariesDatas?.segments.map(
                          (segmentsData, index) => (
                            <p key={index}>{segmentsData?.flightNumber}</p>
                          )
                        )}
                      </h1>
                    )
                  )}
                </td>

                <td className="border-b border-red-300 px-6 py-3">
                  {flightOfferData?.seat.map((seatDatas, index) => (
                    <h1 key={index}>
                      {seatDatas.map((seatData, index) => (
                        <p key={index}>{seatData}</p>
                      ))}
                    </h1>
                  ))}
                </td>
                {/* CLASS DATA  */}
                <td className="border-b border-red-200 px-6 py-3">
                  {flightOfferData?.class.map((classDatas, index) => (
                    <h1 key={index}>
                      {classDatas.map((classData, index) => (
                        <p key={index}>{classData}</p>
                      ))}
                    </h1>
                  ))}
                </td>
                {/* FARE DATA */}
                <td className="border-b border-red-200 px-4 py-2">
                  {flightOfferData?.fareBasis.map((fareBasisData, index) => (
                    <h1 key={index}>
                      {fareBasisData.map((fareBasisData, index) => (
                        <p key={index}>{fareBasisData}</p>
                      ))}
                    </h1>
                  ))}
                </td>

                {/* ROUTE DATA */}
                <td className="border-b border-red-200 px-6 py-3">
                  {flightOfferData?.itineraries.map(
                    (itinerariesDatas, index) => (
                      <h2 key={index}>
                        {itinerariesDatas?.segments.map(
                          (segmentsData, index) => (
                            <p key={index} className="flex">
                              <h3>{segmentsData?.departure?.iataCode}</h3>-
                              <h2>{segmentsData?.arrival?.iataCode}</h2>
                            </p>
                          )
                        )}
                      </h2>
                    )
                  )}
                </td>

                {/* DEPARTURE DATA  */}

                <td className="border-b border-red-200 px-4 py-2">
                  {flightOfferData?.itineraries.map(
                    (itinerariesDatas, index) => (
                      <h1 key={index}>
                        {itinerariesDatas?.segments.map(
                          (segmentsData, index) => (
                            <p key={index}>{segmentsData?.departure?.at}</p>
                          )
                        )}
                      </h1>
                    )
                  )}
                </td>
                {/* ARRIVAL DATA */}
                <td className="border-b border-red-300 px-6 py-3">
                  {flightOfferData?.itineraries.map(
                    (itinerariesDatas, index) => (
                      <div key={index}>
                        {itinerariesDatas?.segments.map(
                          (segmentsData, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-12"
                            >
                              <h1>{segmentsData?.arrival?.at}</h1>
                              <h1 className="ml-6">--</h1>{" "}
                              {/* Double dash  added*/}
                            </div>
                          )
                        )}
                      </div>
                    )
                  )}
                </td>

                <td className="border-b border-red-300 px-8 py-3 ">
                  {flightOfferData?.itineraries.map(
                    (itinerariesData, index) => (
                      <h2 key={index} className="flex pl-4">
                        {itinerariesData?.duration}
                      </h2>
                    )
                  )}
                </td>

                {/* PRICE DATA  */}
                <td className="border-b border-red-200 px-4 py-2">
                  <p>{flightOfferData?.price}</p>
                  <button className="bg-blue-800 text-white px- p-2 rounded-md text-xs font-bold">
                    SELECT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleCard;
