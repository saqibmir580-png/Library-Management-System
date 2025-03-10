import { now } from "mongoose";
import cron from "node-cron";
import { Borrow } from "../models/borrowModel.js";
import { User } from "../models/userModel.js";
import { sendEmail } from "../utils/sendEmai.js";

export const notifyUser = () => {
  cron.schedule(" */30 * * * *", async () => {
    try {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const borrowers = await Borrow.find({
        dueDate: {
          $lt: oneDayAgo,
        },
        returnDate: null,
        notified: false,
      });
      for (const element of borrowers) {
        if (element.user && element.user.email) {
          sendEmail({
            email:element.user.email,
            subject: "Book Return Remaider.",
            message: `Hello ${element.user.name},\n\n This is a reminder that the book you borrowed is due for return today.Please return the book to the library as soon as possible,\n\n Thank You.`,
          });
          element.notified = true;
          await element.save();
        }
      }
    } catch (error) {
      console.log("some error occurred while notifying users", error);
    }
  });
};
