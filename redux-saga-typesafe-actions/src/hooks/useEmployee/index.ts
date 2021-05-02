import { useDispatch, useSelector } from "react-redux";

import Employee from "../../store/modules/employee";
import { RootState } from "../../store";

function useEmployee() {
  const dispatch = useDispatch();
  const employeeState = useSelector(
    (store: RootState) => store.employee.employees
  );

  const fetchEmployees = () => {
    dispatch(Employee.actions.fetch.request(""));
  };

  return {
    employeeState,
    fetchEmployees,
  };
}

export default useEmployee;
