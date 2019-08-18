import React, { Component } from "react";

class Books extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Tropic of Cancer",
        author: "Henry Miller",
        publication_date: "1934",
        genre: "Autobiographical Fiction",
        description:
          "Tropic of Cancer is a novel by Henry Miller that has been described as notorious for its candid sexuality and as responsible for the free speech that we now take for granted in literature",
        translator: "n/a",
        quote:
          "I am living at the Villa Borghese. There is not a crumb of dirt anywhere, nor a chair misplaced. We are all alone here and we are dead.",
        pages: "318",
        country: "France",
        language: "English",
        followed_by: "Black Spring",
        publisher: "Obelisk Press",
        image: "/"
      },
      {
        id: 1,
        title: "Notes from the Underground",
        author: "Fyodor Dostoevsky",
        publication_date: "1864",
        genre: "Philosophical Fiction",
        description:
          "Notes is considered by many to be one of the first existentialist novels.",
        translator: "n/a",
        quote: "I am an ugly man.",
        pages: "136",
        country: "Russia",
        language: "Russian",
        followed_by: "",
        publisher: "Epoch",
        image: "/"
      },
      {
        id: 1,
        title: "No Longer Human",
        author: "Osamu Dazai",
        publication_date: "1948",
        genre: "Autobiographical Fiction",
        description:
          "This novel, despite being serialized as a work of fiction in 1948, is narrated in the first person and contains several elements which betray an autobiographical basis, such as suicide—a recurring theme in the author's life. ",
        translator: "Donald Keene",
        quote: "",
        pages: "177",
        country: "Japan",
        language: "Japanese",
        followed_by: "",
        publisher: "New Directions",
        image: "/"
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div>
        <h1>Books</h1>
      </div>
    );
  }
}

export default Books;
