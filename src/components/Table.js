import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import classes from "../styles/Table.module.css";

const Table = ({ table, tableHead }) => {
  const [users, setUsers] = useState([]);
  const [sortArr, setSortArr] = useState("");

  useEffect(() => {
    setUsers(table);
  }, [table]);

  console.log(sortArr);

  const tableHeadArr = [
    "Name",
    "City",
    "Email Address",
    "Joining Date",
    "Role",
  ];

  if (sortArr === "role") {
    users.sort((a, b) => a?.role.localeCompare(b?.role));
  }
  if (sortArr === "person") {
    users.sort((a, b) => a?.person?.name.localeCompare(b?.person?.name));
  }
  if (sortArr === "city") {
    users.sort((a, b) => a?.city.localeCompare(b?.city));
  }
  if (sortArr === "email") {
    users.sort((a, b) => a?.email.localeCompare(b?.email));
  }
  if (sortArr === "joiningDate") {
    users.sort(
      (a, b) =>
        !isNaN(new Date(b.joiningDate)) - !isNaN(new Date(a.joiningDate))
    );
  }

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {tableHead.map((th, i) => (
            <th key={i} onClick={() => setSortArr(th)}>
              {th.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase() + th.replace(/([A-Z])/g, " $1").slice(1)} <FontAwesomeIcon icon={faUpLong} />
              <FontAwesomeIcon icon={faDownLong} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, i) => (
            <tr key={i}>
              {user?.person && (
                <td className={classes.flex}>
                  <img src={user?.person?.avatar} alt={user?.person?.name} />
                  {user?.person?.name}
                </td>
              )}
              {user.city && <td>{user.city}</td>}
              {user.email && (
                <td style={{ color: "#0071CC", textDecoration: "underline" }}>
                  {user.email}
                </td>
              )}
              {user.joiningDate && <td>{user.joiningDate}</td>}
              {user.role && <td>{user.role}</td>}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
