
import Link from "next/link"
import BookCard from "./BookCard"

import React from 'react'

export default function LibChapter({books}) {
    console.log('props >>> ', books);
    return (
    <>
    {/* <h2 id={props.catId}>{props.category}</h2> */}
    <div className='cards-grid'>
        {books.map((book, index) => (
        <BookCard key={index} book={book} />
        ))}
    </div>
  </>
  )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/books')
    const data = await res.json()
    return {
        props: {books: data}
    }
  }