const bookModel = require("../models/books.model");
const issuedBookModel = require("../models/issued.books.model");

module.exports.addBook = async ({
    name, author, qty
}) => {
    if (!name || !author || !qty) {
        throw new Error("All Fields are required.....")
    }

    const book = await bookModel.create({
        name,
        author,
        qty: {
            total: qty,
            available: qty,
        }
    })

    return book
}

module.exports.getAvailableBooks = async () => {
    return await bookModel.find({
        status: "Available"
    });
};

module.exports.issueBook = async ({ bookId, studentId }) => {
    if (!bookId || !studentId) {
        throw new Error("BookId or StudentId missing");
    }

    const issuedBook = await issuedBookModel.create({
        bookId: bookId,
        issuer: studentId
    });

    const book = await bookModel.findById(bookId);
    if (!book || book.qty.available <= 0) {
        throw new Error("Book is not available");
    }

    const updatedQty = book.qty.available - 1;

    await bookModel.findByIdAndUpdate(
        bookId,
        {
            "qty.available": updatedQty,
            status: updatedQty === 0 ? "Issued" : "Available"
        },
        { new: true }
    );

    return issuedBook;
};

module.exports.returnBook = async ({ bookId, studentId }) => {
    if (!bookId || !studentId) {
        throw new Error("BookId or StudentId missing");
    }

    const record = await issuedBookModel.findOne({ bookId: bookId, issuer: studentId });
    if (!record) {
        console.log(bookId, studentId, record)
        throw new Error("No such book issued to this student");
    }

    await issuedBookModel.findByIdAndDelete(record._id);
    const updatedBook = await bookModel.findByIdAndUpdate(
        bookId,
        { $inc: { "qty.available": 1 }, $set: { status: "Available" } },
        { new: true }
    );

    return updatedBook;
};