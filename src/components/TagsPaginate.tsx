"use client";

import Link from "next/link";
import { useState } from "react";

export const TagsPaginate = ({ totalCount, currentPage, tag }) => {
    const [inputPage, setInputPage] = useState("1");
    currentPage = Number(currentPage);

    const PER_PAGE = 8;

    const totalPages = Math.ceil(totalCount / PER_PAGE);

    const handleInputPageChange = (e) => {
        const value = e.target.value;
        if (value !== "") {
            const newPage = Math.min(parseInt(value), totalPages);
            setInputPage(newPage.toString());
        } else {
            setInputPage("");
        }
    };

    return (
        <div className="flex justify-center mt-2">
            {currentPage > 1 && (
                <Link
                    href={currentPage === 2 ? `/tags/${tag}` : `/tags/${tag}/page/${currentPage - 1}`}
                    className="text-xl  p-2 hover:underline"
                >
                    &lt; Next
                </Link>
            )}
            {totalPages > 1 && ( // 1ページしかない場合は非表示
                <>
                    <input
                        type="number"
                        aria-label={`1から${totalPages}までのページ数を入力すると遷移できます`}
                        value={inputPage}
                        onChange={handleInputPageChange}
                        className="hidden lg:block text-center border-2 border-gray-300 mr-2 rounded-lg"
                        min="1"
                        max={totalPages}
                    />
                    <Link href={`/tags/${tag}/page/` + inputPage} passHref>
                        <button className="lg:text-lg text-md hidden lg:block p-2 bg-gray-900 text-white hover:bg-gray-800 rounded-lg">{`${inputPage}ページまで遷移`}</button>
                    </Link>
                </>
            )}
            {currentPage < totalPages && (
                <Link href={`/tags/${tag}/page/${currentPage + 1}`} className="text-xl p-2 hover:underline">
                    Prev &gt;
                </Link>
            )}
        </div>
    );
};

// const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

// <ul>
//     {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
//         <li key={index}>
//             <Link href={`/page/${number}`}>{number}</Link>
//         </li>
//     ))}
// </ul>
