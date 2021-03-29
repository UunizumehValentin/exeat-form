function studentReducer(state, action) {
  const { name, level, date, indexNo } = action.payload;
  switch (action.type) {
    case "ADDSTUDENT":
      return [...state, { name, level, date, indexNo }];
    case "delete":
      return state.filter((student) => student.indexNo !== indexNo);
    default:
      return state;
  }
}
export default studentReducer;
