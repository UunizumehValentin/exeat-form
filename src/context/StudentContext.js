import { createContext, useReducer } from "react";
import studentReducer from "../componenets/reducers/studentReducer";

const initialstudents = [
  {
    name: "Valentine Nuobetah",
    level: "200",
    date: "01/12/12",
    indexNo: "UV001",
  },
  {
    name: "Emelia Tengan",
    level: "400",
    date: "14/02/19",
    indexNo: "UN026",
  },
  {
    name: "Vitus Uunizumehh",
    level: "600",
    date: "23/10/21",
    indexNo: "NV022",
  },
];

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [students, dispatch] = useReducer(studentReducer, initialstudents);
  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
export default StudentContextProvider;
