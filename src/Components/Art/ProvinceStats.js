import React, { useState } from "react";
import StatsVideo from "../../assets/Video/Stats.mp4";
import BGImage from "../../assets/Images/bgfolder.png";

const ProvinceStats = () => {
  const [selectedProvince, setSelectedProvince] = useState("Eastern Cape");
  const [clueFound, setClueFound] = useState(false);

  const provinceData = [
    { province: "Eastern Cape", stats: 71191 },
    { province: "Free State", stats: 39829 },
    { province: "Gauteng", stats: 181837 },
    { province: "KwaZulu-Natal", stats: 26375 },
    { province: "Limpopo", stats: 42142 },
    { province: "Mpumalanga", stats: 36565 },
    { province: "Northern Cape", stats: 18830 },
    { province: "North West", stats: 40561 },
    { province: "Western Cape", stats: 112707 },
  ];

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setClueFound(false); // Reset clue when province changes
  };

  const handleClueClick = () => {
    setClueFound(true);
  };

  const selectedProvinceData = provinceData.find(
    (data) => data.province === selectedProvince
  );

  return (
    <div
    className="dark-background"
    style={{
      backgroundImage: `url(${BGImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left",
      backgroundSize: "700px 450px",
      color: "red",
    }}
  >
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <h3>Province Statistics</h3>
      <label htmlFor="provinceSelect">Select a province:</label>
      <select
        id="provinceSelect"
        value={selectedProvince}
        onChange={handleProvinceChange}
      >
        {provinceData.map((data) => (
          <option key={data.province} value={data.province}>
            {data.province}
          </option>
        ))}
      </select>
      <p>Stats: {selectedProvinceData.stats}</p>
      {selectedProvinceData && (
        <div>
          <video
            src={StatsVideo}
            alt={selectedProvinceData.province}
            width="500"
            height="300"
            controls
            autoPlay
            loop
          />

          
        </div>
      )}
     
    </div>
  );
};

export default ProvinceStats;
