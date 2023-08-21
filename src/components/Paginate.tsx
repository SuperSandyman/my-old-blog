"use client";

import { useState } from "react";
import Link from "next/link";
import { allPostsData } from "@/lib/api";

export const Paginate = ({ onPageChange }) => {
    const postsPerPage = 8; // 1ページに表示する記事の数
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(allPostsData.length / postsPerPage);
    const [inputPage, setInputPage] = useState("");

    const handleInputChange = (e) => {
        setInputPage(e.target.value);
    };

    const handlePageChange = (newPage) => {
        onPageChange(newPage);
        setInputPage("");
    };

    const startIndex = (currentPage - 1) * postsPerPage;
    const visiblePosts = allPostsData.slice(startIndex, startIndex + postsPerPage);

    return (
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                {"<-"}
            </button>

            <input type="number" value={inputPage} onChange={handleInputChange} placeholder="Jump to page" />

            <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                {"->"}
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <Link key={i} href={`/blog?page=${i + 1}`}>
                    <a className={i + 1 === currentPage ? "active" : ""}>{i + 1}</a>
                </Link>
            ))}
        </div>
    );
};
