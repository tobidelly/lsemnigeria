import React, { useState } from 'react';

interface Book {
  title: string;
  author: string;
  description: string;
  price: string;
  rating: number;
  downloads: string;
  cover: string;
  type: string;
  isFree: boolean;
  downloadUrl?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, book }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    jobTitle: '',
    referralCode: '',
    voucher: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted for:', book.title);
    console.log(formData);

    // Simulate sending an email
    alert(`Details submitted for ${book.title}. We will reach out to ${formData.email} soon.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">{book.isFree ? 'Download' : 'Purchase'} {book.title}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {!book.isFree && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Organization</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Referral Code (Optional)</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.referralCode}
                    onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Voucher (Optional)</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.voucher}
                    onChange={(e) => setFormData({ ...formData, voucher: e.target.value })}
                  />
                </div>
              </>
            )}

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {book.isFree ? 'Submit' : 'Submit Purchase'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const books: Book[] = [
  {
    title: 'Export Management Fundamentals',
    author: 'LSEM Faculty',
    description: 'A comprehensive guide to understanding the basics of export management.',
    price: 'FREE',
    rating: 4.8,
    downloads: '2.5K',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'ebook',
    isFree: true,
  },
  {
    title: 'International Trade Documentation',
    author: 'Dr. Samuel Johnson',
    description: 'Master the paperwork and documentation required for international trade.',
    price: '₦15,000',
    rating: 4.9,
    downloads: '1.8K',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'ebook',
    isFree: false
  },
  // ... other books
];

const Books = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAction = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Books & Resources</h2>
          <p className="mt-4 text-xl text-gray-600">
            Expand your knowledge with our collection of export management and international trade publications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    book.isFree ? 'bg-green-500 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {book.isFree ? 'FREE' : book.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">By {book.author}</p>
                <p className="text-gray-600 mb-4">{book.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">&#9733; {book.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="ml-1">{book.downloads} downloads</span>
                  </div>
                </div>

                <button
                  onClick={() => handleBookAction(book)}
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-lg ${
                    book.isFree ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } transition-colors duration-300`}
                >
                  {book.isFree ? 'Download Now' : 'Purchase Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          book={selectedBook}
        />
      )}
    </section>
  );
};

export default Books;