import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";

const Reducers = combineReducers(
      {
            1: reducer1,
            2: reducer2
      }
)

export default Reducers;