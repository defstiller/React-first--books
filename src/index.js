import React from 'react';
import ReactDom from "react-dom";
import './index.css'

const books = [{
  img: "https://images-na.ssl-images-amazon.com/images/I/41E3EKUlXGS._AC_SX184_.jpg",
  title: "The Judge's List: A Novel (The Whistler Book 2)",
  author: "John Grisham",
  description: "lorem ipsum dolor sit amet, consect"
},
{
  img: "https://m.media-amazon.com/images/I/41f5N0Cd5NL._SY346_.jpg",
  title: "The Midnight Library: A Novel",
  author: 'Matt Haig'
}]

function BookList() {
  return (<>
  <section className="booklist">
    {books.map(book => {
      const {img,title,author,description} = book
      return (
        <Book image={img} title={title} author={author}>
          <Description description={description}/>  
        </Book>)
    })}
  </section>
  </>)
}

function Book(props) {
  const {image, title, author, children} = props
  return <article className="book"> 
    <Image source={image} altTitle={title}/>
    <BookName title={title}/>
    <Author author={author}/>
    {children}
  </article>
}
function Image(props) { 
  const {source, altTitle} = props
  return <img src={source} alt={`the book called ${altTitle}`} />
}
function BookName(props) {
  return <h2>{props.title}</h2>
}
function Author(props) {
  return  <h3>{props.author}</h3>
}
function Description(props) {
  return <p>{props.description}</p>
}

ReactDom.render(<BookList/>, document.getElementById("root"))