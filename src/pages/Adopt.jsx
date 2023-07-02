import React from 'react';
import AdoptBanner from '../components/Adopt/AdoptBanner';
import { useState } from "react";
import dayjs from "dayjs";

import PersonItem from '../components/Adopt/PersonItem';
import { data } from '../components/Adopt/data'
import Filter from '../components/Adopt/Filter';

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const Home = () => {
  const [allData, setData] = useState(data);

  const generateGenderDataForDropdown = () => {
    return [...new Set(data.map((item) => item.gender))];
  };

  const generateSizeDataForDropdown = () => {
    return [...new Set(data.map((item) => item.size))];
  };


  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterEmail = (email) => {
    const filteredData = data.filter((item) => {
      if (item.email.toLowerCase().includes(email.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterGender = (gender) => {
    const filteredData = data.filter((item) => {
      if (item.gender === gender) {
        return item;
      }
    });

    setData(filteredData);
  };
  
  const handleFilterSize = (size) => {
    const filteredData = data.filter((item) => {
      if (item.size === size) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setData(filteredData);
  };
    return(
      <div>
        <AdoptBanner/>
        <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <Filter
            genders={generateGenderDataForDropdown()}
            sizes = {generateSizeDataForDropdown}
            onNameFilter={handleFilterName}
            onEmailFilter={handleFilterEmail}
            onGenderFilter={handleFilterGender}
            onDateFilter={handleFilterDate}
            onSizeFilter={handleFilterSize}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  };

export default Home;