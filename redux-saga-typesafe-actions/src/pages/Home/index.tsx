import React, { useEffect } from "react";

import Employee from "../../components/Employee";
import useEmployee from "../../hooks/useEmployee";

const Home: React.FC = () => {
  const { employeeState, fetchEmployees } = useEmployee();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div>
      Home!
      {employeeState.map((employee, index) => (
        <Employee {...employee} key={index} />
      ))}
    </div>
  );
};

export default Home;
