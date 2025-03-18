import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { toggleAddNewAdminPopup } from "./popUpSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    fetchAllUserRequest(state) {
      state.loading = true;
    },
    fetchAllUserSuccess(state, action) {
      (state.loading = false), (state.users = action.payload);
    },
    fetchAllUserFailed(state) {
      state.loading = false;
    },
    addNewAdminRequest(state) {
      state.loading = true;
    },
    addNewAdminSuccess(state) {
      state.loading = false;
    },
    addNewAdminFailed(state) {
      state.loading = false;
    },
  },
});

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(userSlice.actions.fetchAllUserRequest());
  await axios
    .get("http://localhost:4000/api/v1/user/all", { withCredentials: true })
    .then((res) => {
      dispatch(userSlice.actions.fetchAllUserSuccess(res.data.users));
    })
    .catch((err) => {
      dispatch(userSlice.actions.fetchAllUserFailed(err.response.data.message));
    });
};
export const addNewAdmin = (data) => async (dispatch) => {
  dispatch(userSlice.actions.addNewAdminRequest());
  await axios
    .post("http://localhost:4000/api/v1/user/add/new-admin",data, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch(userSlice.actions.addNewAdminSuccess(res.data.users));
      toast.success(res.data.message)
      dispatch(toggleAddNewAdminPopup())
    })
    .catch((err) => {
      dispatch(userSlice.actions.addNewAdminFailed(err.response.data.message));
      toast.error(err.response.data.message)
    });
};
export default userSlice.reducer