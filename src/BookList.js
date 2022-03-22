import React from 'react';
import {Book, Description} from "./Book.js"
const books = [{
    id:0,
    img: "https://images-na.ssl-images-amazon.com/images/I/41E3EKUlXGS._AC_SX184_.jpg",
    title: "The Judge's List: A Novel (The Whistler Book 2)",
    author: "John Grisham",
    description: "lorem ipsum dolor sit amet, consect"
  },
  {
    id:1,
    img: "https://m.media-amazon.com/images/I/41f5N0Cd5NL._SY346_.jpg",
    title: "The Midnight Library: A Novel",
    author: 'Matt Haig'
  }]

export default function BookList() {
    return (<>
    <section className="booklist">
      {books.map(book => {
        const {img,title,author,description,id} = book
        return (
          <Book image={img} title={title} author={author} key={id}>
            <Description description={description}/>  
          </Book>)
      })}
    </section>
    </>)
  }
