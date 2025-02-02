import { combineReducers } from "redux";
import faqs from "./faqsReducer";
import works from "./worksReducer";
import reviews from "./reviewsReducer";
import services from "./servicesReducer";
import menifestos from "./manifestosReducer";
import homeContent from "./homeContentReducer";
import aboutContent from "./aboutContentReducer";

const rootReducer = combineReducers({
      homeContent, reviews, services, aboutContent, menifestos, faqs, works
});

export default rootReducer;