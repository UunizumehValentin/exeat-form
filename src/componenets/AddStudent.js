import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

export function AddStudent() {
  const { dispatch } = useContext(StudentContext);
  const [name, setName] = useState();
  const [level, setLevel] = useState();
  const [date, setDate] = useState();
  const [indexNo, setIndexNo] = useState();
  const [gender, setGender] = useState();
  const [reason, setRea] = useState();

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADDSTUDENT",
      payload: { name, level, date, indexNo, gender },
    });
  };
  return (
    <form className="form-one" onSubmit={onsubmit}>
      <h1>EXEAT FORM</h1>
      <input
        type="text"
        placeholder="student name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="student level"
        required
        onChange={(e) => setLevel(e.target.value)}
      />
      <input
        type="date"
        placeholder="exeat date"
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="index number"
        required
        onChange={(e) => setIndexNo(e.target.value)}
      />
      <input
        type="gender"
        placeholder="enter gender"
        required
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter reason"
        required
        onChange={(e) => setGender(e.target.value)}
      />
      <button className="btn">ADD</button>
    </form>
  );
}
export default AddStudent;
