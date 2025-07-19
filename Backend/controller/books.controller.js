const bookModel = require("../models/books.model");
const studentModel = require("../models/student.model");
const bookService = require("../services/book.service")

module.exports.addBook = async (req, res, next) => {
    // console.log(req.body);
    const { name, author, status, qty } = req.body;

    try {
        const isBook = await bookModel.findOne({ name });

        if (isBook) {
            await bookModel.findOneAndUpdate({ name }, { $inc: { "qty.total": 1, "qty.available": 1 } }, { new: true });
            return res.status(200).json({ message: "Book already present. Quantity updated." });
        }

        const book = await bookService.addBook({
            name,
            author,
            qty
        });

        return res.status(201).json({ book, message: "New Book Added Successfully" });
    } catch (err) {
        next(err);
    }
};

module.exports.getAvailableBooks = async (req, res, next) => {
    try {
        const availBooks = await bookService.getAvailableBooks()
        // console.log(availBooks)
        return res.status(200).json({ books: availBooks, message: "Available Books fetched successfully.." })
    } catch (err) {
        next(err)
    }
}

module.exports.issueBook = async (req, res, next) => {
    const { bookName, rollNo } = req.body
    try {
        if (!bookName || !rollNo) {
            console.log(bookName + '++' + rollNo)
            throw new Error("Book name or Student rollNo missing");
        }
        const isBookAvailable = await bookModel.findOne({ name: bookName })
        if (!isBookAvailable || isBookAvailable.status != "Available") {
            console.log(isBookAvailable)
            return res.status(404).json({ message: "No Book found.." })
        }
        const isStudent = await studentModel.findOne({ rollNo })
        if (!isStudent) {
            return res.status(501).json({ message: "No Student found.." })
        }
        const issuedBook = await bookService.issueBook({
            bookId: isBookAvailable._id,
            studentId: isStudent._id
        })
        res.status(200).json({
            issuedBook,
            message: "Book issued successfully"
        });

    } catch (err) {
        next(err);
    }

}

module.exports.returnBook = async (req, res, next) => {
    const { bookName, rollNo } = req.body

    try {
        if (!bookName || !rollNo) {
            console.log(bookName + '++' + rollNo)
            throw new Error("Book name or Student rollNo missing");
        }
        const isBookAvailable = await bookModel.findOne({ name: bookName })
        if (!isBookAvailable ) {
            console.log(isBookAvailable)
            return res.status(404).json({ message: "No Book found.." })
        }
        const isStudent = await studentModel.findOne({ rollNo })
        if (!isStudent) {
            return res.status(501).json({ message: "No Student found.." })
        }
        const returnBook = await bookService.returnBook({
            bookId: isBookAvailable._id,
            studentId: isStudent._id
        })
        res.status(200).json({
            returnBook,
            message: "Book returned successfully"
        });

    } catch (err) {
        next(err);
    }

}