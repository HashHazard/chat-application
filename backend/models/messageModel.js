const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectIdj,
      ref: "User",
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectIdj,
      ref: "User",
    },
    chat: {
      type: mongoose.Schema.Types.ObjectIdj,
      ref: "Chat",
    },
  },
  { timeStamp: true }
);

const Message = mongoose.model("Message", messageModel);
module.exports = Message;
