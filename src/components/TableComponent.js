import React, { useEffect, useState } from "react";
import Table from "./Table";

const data = [
  {
    person: {
      name: "Prerna Jha",
      avatar: "./avatar.png",
    },
    city: "Mumbai",
    email: "prernajha@gmail.com",
    joiningDate: "12/02/2018",
    role: "UI Designer",
  },
  {
    person: {
      name: "Rukmini Pandit",
      avatar: "./avatar.png",
    },
    city: "Delhi",
    email: "rukminipandit@gmail.com",
    joiningDate: "09/02/2022",
    role: "Front-end Developer",
  },
  {
    person: {
      name: "Nandhini Lingesh",
      avatar: "./avatar.png",
    },
    city: "Delhi",
    email: "nandhinilingesh@gmail.com",
    joiningDate: "30/06/2019",
    role: "UX Designer",
  },
  {
    person: {
      name: "Ankit Singh",
      avatar: "./avatar.png",
    },
    city: "Kolkata",
    email: "ankitsingh@gmail.com",
    joiningDate: "11/11/2017",
    role: "Backend Developer",
  },
  {
    person: {
      name: "Amith Kumar",
      avatar: "./avatar.png",
    },
    city: "Mumbai",
    email: "amithkumar@gmail.com",
    joiningDate: "24/07/2020",
    role: "Front-end Developer",
  },
  {
    person: {
      name: "Shalini Singhla",
      avatar: "./avatar.png",
    },
    city: "Mumbai",
    email: "shalinisinghla@gmail.com",
    joiningDate: "17/09/2017",
    role: "UX Designer",
  },
  {
    person: {
      name: "Abhishek Singh",
      avatar: "./avatar.png",
    },
    city: "Kolkata",
    email: "abhisheksingh@gmail.com",
    joiningDate: "01/06/2017",
    role: "Front-end Developer",
  },
];

const table1 = [
  {
    person: {
      name: "Prerna Jha",
      avatar: "./avatar.png",
    },
    email: "prernajha@gmail.com",
    role: "UI Designer",
  },
  {
    person: {
      name: "Rukmini Pandit",
      avatar: "./avatar.png",
    },
    email: "rukminipandit@gmail.com",
    role: "Front-end Developer",
  },
  {
    person: {
      name: "Nandhini Lingesh",
      avatar: "./avatar.png",
    },
    email: "nandhinilingesh@gmail.com",
    role: "UX Designer",
  },
  {
    person: {
      name: "Ankit Singh",
      avatar: "./avatar.png",
    },
    email: "ankitsingh@gmail.com",
    role: "Backend Developer",
  },
  {
    person: {
      name: "Amith Kumar",
      avatar: "./avatar.png",
    },
    email: "amithkumar@gmail.com",
    role: "Front-end Developer",
  },
  {
    person: {
      name: "Shalini Singhla",
      avatar: "./avatar.png",
    },
    email: "shalinisinghla@gmail.com",
    role: "UX Designer",
  },
  {
    person: {
      name: "Abhishek Singh",
      avatar: "./avatar.png",
    },
    email: "abhisheksingh@gmail.com",
    role: "Front-end Developer",
  },
];
const table2 = [
  {
    email: "prernajha@gmail.com",
    joiningDate: "12/02/2018",
    role: "UI Designer",
  },
  {
    email: "rukminipandit@gmail.com",
    joiningDate: "09/02/2022",
    role: "Front-end Developer",
  },
  {
    email: "nandhinilingesh@gmail.com",
    joiningDate: "30/06/2019",
    role: "UX Designer",
  },
  {
    email: "ankitsingh@gmail.com",
    joiningDate: "11/11/2017",
    role: "Backend Developer",
  },
  {
    email: "amithkumar@gmail.com",
    joiningDate: "24/07/2020",
    role: "Front-end Developer",
  },
  {
    email: "shalinisinghla@gmail.com",
    joiningDate: "17/09/2017",
    role: "UX Designer",
  },
  {
    email: "abhisheksingh@gmail.com",
    joiningDate: "01/06/2017",
    role: "Front-end Developer",
  },
];
const table3 = [
  {
    person: {
      name: "Prerna Jha",
      avatar: "./avatar.png",
    },
    city: "Mumbai",
    joiningDate: "12/02/2018",
    role: "UI Designer",
  },
  {
    person: {
      name: "Rukmini Pandit",
      avatar: "./avatar.png",
    },
    city: "Delhi",
    joiningDate: "09/02/2022",
    role: "Front-end Developer",
  },
  {
    person: {
      name: "Nandhini Lingesh",
      avatar: "./avatar.png",
    },
    city: "Delhi",
    joiningDate: "30/06/2019",
    role: "UX Designer",
  },
  {
    person: {
      name: "Ankit Singh",
      avatar: "./avatar.png",
    },
    city: "Kolkata",
    joiningDate: "11/11/2017",
    role: "Backend Developer",
  },
  {
    person: {
      name: "Amith Kumar",
      avatar: "./avatar.png",
    },
    city: "Mumbai",
    joiningDate: "24/07/2020",
    role: "Front-end Developer",
  },
  {
    person: {
      name: "Shalini Singhla",
      avatar: "./avatar.png",
    },
    city: "Mumbai",
    joiningDate: "17/09/2017",
    role: "UX Designer",
  },
  {
    person: {
      name: "Abhishek Singh",
      avatar: "./avatar.png",
    },
    city: "Kolkata",
    joiningDate: "01/06/2017",
    role: "Front-end Developer",
  },
];

const TableComponent = () => {
  const [table, setTable] = useState(data);
  const [tableValue, setTableValue] = useState([]);

  useEffect(() =>{
    setTableValue(Object.keys(table[0]))
  }, [table])

  return (
    <>
      <div>
        <button className="btn" onClick={() => setTable(data)}>All data</button>
        <button className="btn" onClick={() => setTable(table1)}>Table 1</button>
        <button className="btn" onClick={() => setTable(table2)}>Table 2</button>
        <button className="btn" onClick={() => setTable(table3)}>Table 3</button>
      </div>
      <Table table={table} tableHead={tableValue}/>
    </>
  );
};

export default TableComponent;
