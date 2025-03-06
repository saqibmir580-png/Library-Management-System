import { catchAsyncErrors } from "../middlewares/catchAsyncErro.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Book } from "../models/bookModel.js";

export const addBook = catchAsyncErrors(async (req, res, next) => {
  const { title, author, description, price, quantity } = req.body;
  if (!title || !author || !description || !price || !quantity) {
    return next(
        new ErrorHandler(
          "Please enter the all fields.",
          400
        )
      );
  }
  const book = Book.create({
    title,
    author,
    description,
    price,
    quantity,
  });
  res.status(202).json({
    success: true,
    message: "Book Added Successfully.",
    book,
  });
});

export const getAllBooks = catchAsyncErrors(async (req, res, next) => {
  const books = await Book.find();
  res.status(200).json({
    success: true,
    books,
  });
});
export const deleteBook = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    return next(
        new ErrorHandler(
          "Book not found.",
          400
        )
      );
  }
  await book.deleteOne();
  res.status(200).json({
    success: true,
    message: "Book Deleted Successfully.",
  });
});
