import express from "express";
import {
  borrowedBooks,
  getBorrowedBookForAdmin,
  recordBorrowedBook,
  returnBorrowBook,
} from "../controllers/borrowController.js";
import {
  isAuthenticated,
  isAuthorized,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post(
  "/record-borrow-book/:id",
  isAuthenticated,
  isAuthorized("Admin"),
  recordBorrowedBook
);
router.get(
  "/borrowed-books-by-users",
  isAuthenticated,
  isAuthorized("Admin"),
  getBorrowedBookForAdmin
);
router.get("/my-borrowed-books", isAuthenticated, borrowedBooks);
router.put(
  "/return-borrowed-book/:bookId",
  isAuthenticated,
  returnBorrowBook
);
export default router;
