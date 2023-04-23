import Cookies from "js-cookie";
import { POST_LIST_TYPE_VIEW } from "src/constants/cookiesKeys";
import { ListTypeView } from "src/types";
import { togglePostListTypeView } from "./action";

export const togglePostListTypeReducer = (builder) => {
  builder.addCase(togglePostListTypeView, (state) => {
    const activeListTypeView = state.postListTypeView;
    const changedListTypeView =
      activeListTypeView === ListTypeView.COLUMN
        ? ListTypeView.ROW
        : ListTypeView.COLUMN;

    Cookies.set(POST_LIST_TYPE_VIEW, changedListTypeView);

    state.postListTypeView = changedListTypeView;
  });
};
