import Axios from "axios"
import { notification } from "antd";


const MEMO_BASE_API = "http://127.0.0.1:8000"


const Notification_Saved = (t) => {
  notification.open({
    message: 'Memo Saved!',
    description: "< " + t + "  >",
    onClick: () => {
    },
  });
};


const Notification_Deleted = (t) => {
  notification.open({
    message: 'Memo Deleted!',
    description: "< " + t + "  >",
    onClick: () => {
    },
  });
};


export const addMemo = (t, c, notify) => {
  console.log("Adding memo in API.js, title:" + t);
  Axios.post(`${MEMO_BASE_API}/update`, {
    title: t,
    content: c
  })
    .then(function (response) {
      console.log(response);
      if (response.status == 200) {
        if (notify) {
          Notification_Saved(t);
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}


export const deleteMemo = (t) => {
  console.log("Deleting memo in API.js, title:" + t);
  Axios.post(`${MEMO_BASE_API}/delete-memo-by-topic`, {
    title: t,
    content: ''
  })
    .then(function (response) {
      console.log(response);
      if (response.status == 200) {
        Notification_Deleted(t);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getAllMemo = () =>
  Axios.get(`${MEMO_BASE_API}/get-all-memo`);