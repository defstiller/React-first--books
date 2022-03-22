import React from "react"
function Book(props) {
    const {image, title, author, children} = props
    function handleBookClick() {
      console.log(title)
    }
    return <article className="book"> 
      <Image source={image} altTitle={title}/>
      <BookName title={title}/>
      <Author author={author}/>
      {children}
      <button type="button" onClick={handleBookClick}>Purchase</button>
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

export {Book, Description}