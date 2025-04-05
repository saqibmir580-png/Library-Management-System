import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, fetchAllBooks } from "../store/slices/bookSlice";
import { toggleAddBookPopup } from "../store/slices/popUpSlice";

const AddBookPopup = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("description", description);
    dispatch(addBook(formData));
    dispatch(fetchAllBooks());
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 p-5 flex items-center justify-center z-50">
        <div className="w-11/12 bg-white rounded-lg shadow-lg md:w-1/3">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Record Book</h3>
            <form onSubmit={handleAddBook}>
              <div className="mb-4">
                <label className="block text-gray-900">Book Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Book Title"
                  required
                  className="w-full px-2 py-2 border-2 border-black rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900">Book Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Book Author"
                  required
                  className="w-full px-2 py-2 border-2 border-black rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900">
                  Book Price(Price for borrowing)
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Book Price"
                  required
                  className="w-full px-2 py-2 border-2 border-black rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Book Quantity"
                  required
                  className="w-full px-2 py-2 border-2 border-black rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900">Description</label>
                <textarea
                  value={description}
                  placeholder="Book's Description"
                  className="w-full px-2 py-2 border-2 border-black rounded-md"
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 "
                  type="button"
                  onClick={() => dispatch(toggleAddBookPopup())}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBookPopup;
