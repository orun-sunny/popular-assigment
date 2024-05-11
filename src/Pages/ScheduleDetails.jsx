import { useState } from "react";
import ScheduleCard from "./ScheduleCard";
import titleInfo from "../utils/titleData";

const ScheduleDetails = () => {
  const [allData, setAllData] = useState();
  const [titleDetails, setTitleDetails] = useState();

  const handaleFormSubit = async (event) => {
    event.preventDefault();

    await fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((error) => {
        console.log(error.message);
      });

    setTitleDetails(titleInfo);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold border-b-2 md:px-20 ">Master Price </h3>

      <div className="px-24">
        {/* top section  */}
        <div className="flex justify-center border-b border-blue-400 py-6 ">
          <button className="border-black border px-8 font-bold text-sm p-2">
            Round Trip
          </button>
          <button className="border-black bg-blue-900 text-white  border px-8 font-bold text-sm p-2 ">
            One Way
          </button>
          <button className="border-black btn border px-8 font-bold text-sm p-2">
            Multi City
          </button>
        </div>

        {/* Search Section  */}
        <form onSubmit={handaleFormSubit}>
          <div className="grid md:grid-cols-8 gap-2 mx-10 md:mx-auto border-b border-blue-400 py-3 ">
            <select
              name="lhr"
              className="rounded appearance-none border-2 bg-white px-4 py-2"
            >
              <option>LHR</option>
              <option value="dubai">Dubai</option>
              <option value="india">India</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="Australia">Australia</option>
            </select>
            <select
              name="cdg"
              className="rounded appearance-none border-2 bg-white px-4 py-2"
            >
              <option>CDG</option>
              <option value="Dubai">Dubai</option>
              <option value="india">India</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="australia">Australia</option>
            </select>

            <input
              className="border-2  px-4 py-2"
              type="date"
              name="date"
              id=""
            />

            <select name="Day" className="rounded border-2 bg-white  px-4 py-2">
              <option value="">Day-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <select name="rDay" className="rounded border-2 bg-white px-4 py-2">
              <option value="">Day+</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <select
              name="time"
              className=" rounded border-2 bg-white px-4 py-2"
            >
              <option value="">Any time</option>
              <option value="9am">9am</option>
              <option value="12am">12am</option>
              <option value="3pm">3pm</option>
            </select>

            <select name="adt" className=" rounded border-2 bg-white px-4 py-2">
              <option>ADT</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <select
              name="count"
              className=" rounded  border-2 bg-white px-4 py-2"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* bottom chaeckbox */}
          <div className="md:flex font-bold mx-12 md:mx-auto items-center py-4 justify-between border-b border-blue-400 pb-4  ">
            <div>
              <input type="checkbox" className="mr-4" />
              Extra Options
            </div>
            <div className="flex items-center gap-4">
              Environment
              <input type="radio" name="radio" defaultChecked />
              Dummy
              <input type="radio" name="radio" />
              DDT
            </div>
            <button
              type="submit"
              className="bg-blue-800 md:w-36 w-full p-2 text-white font-bold"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <ScheduleCard
        allItems={allData}
        titleAllData={titleDetails}
      ></ScheduleCard>
    </div>
  );
};

export default ScheduleDetails;
