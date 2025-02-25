import React, { useState } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const questionsData = [
    { id: 1, user: 'Alice', question: 'How to use React hooks?', date: '2024-02-25', important: true, answered: true },
    { id: 2, user: 'Bob', question: 'What is Redux Toolkit?', date: '2024-02-24', important: false, answered: false },
    { id: 3, user: 'Charlie', question: 'How to improve performance in React?', date: '2024-02-20', important: true, answered: true },
];

const QAA = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('newest');

    // Фильтрация и сортировка
    const filteredQuestions = questionsData
        .filter(q => q.question.toLowerCase().includes(search.toLowerCase()))
        .filter(q => {
            if (filter === 'important') return q.important;
            if (filter === 'answered') return q.answered;
            if (filter === 'unanswered') return !q.answered;
            return true;
        })
        .sort((a, b) => {
            if (sort === 'newest') return new Date(b.date) - new Date(a.date);
            if (sort === 'oldest') return new Date(a.date) - new Date(b.date);
            if (sort === 'alphabetical') return a.question.localeCompare(b.question);
            return 0;
        });

    return (
        <div className="p-5">
            <div className="flex items-center border rounded-lg p-2 w-full max-w-md bg-gray-100">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search questions..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent outline-none"
                />
            </div>
            <div className="flex gap-4 my-4">
                <select className="p-2 border rounded-lg" onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="important">Important</option>
                    <option value="answered">Answered</option>
                    <option value="unanswered">Unanswered</option>
                </select>

                <select className="p-2 border rounded-lg" onChange={(e) => setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="alphabetical">Alphabetical</option>
                </select>
            </div>
            <div className="mt-4">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map(q => (
                        <div key={q.id} className="flex items-center p-4 bg-white shadow-md rounded-xl mb-3">
                            <div className="w-1/5 flex justify-center">
                                <FaUserCircle className="text-4xl text-gray-500" />
                            </div>
                            <div className="w-4/5">
                                <p className="text-lg font-semibold">{q.user}</p>
                                <p className="text-gray-700">{q.question}</p>
                                <p className="text-sm text-gray-500">{q.date}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No questions found.</p>
                )}
            </div>
        </div>
    );
};

export default QAA;
