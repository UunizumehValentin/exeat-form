import { createContext, useReducer } from "react";
import studentReducer from "../componenets/reducers/studentReducer";

const initialstudents = [
  {
    name: "Valentine nuobetah",
    level: "200",
    date: "01/12/12",
    indexNo: "UNV001",
  },
  {
    name: "Emelia nuobetah",
    level: "400",
    date: "14/02/19",
    indexNo: "UNV026",
  },
  {
    name: "Vitus nuobetah",
    level: "600",
    date: "23/10/21",
    indexNo: "UNV022",
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
