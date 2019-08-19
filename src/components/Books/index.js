import React, { Component } from "react";

import AllBooks from "./AllBooks";

import bookStyles from "../../modules/books.module.scss";

class Books extends Component {
  state = {
    books: [
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
        image: "./miller.jpg",
        read: false,
        reading: true,
        want_to_read: false
      },
      {
        id: 2,
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
        image: "./underground.jpg",
        read: false,
        reading: true,
        want_to_read: false
      },
      {
        id: 3,
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
        image: "./human.jpg",
        read: false,
        reading: true,
        want_to_read: false
      },
      {
        id: 4,
        title: "The Unbearable Lightness of Being",
        author: "Milan Kundera",
        publication_date: "1864",
        genre: "Philosophical Fiction",
        description:
          "1984 novel by Milan Kundera, about two women, two men, a dog and their lives in the 1968 Prague Spring period of Czechoslovak history. Although written in 1982, the novel was not published until two years later, in a French translation (as L'Insoutenable légèreté de l'être). The original Czech text was published the following year.",
        translator: "n/a",
        quote: "",
        pages: "396",
        country: "Czech Republic",
        language: "Czech",
        followed_by: "",
        publisher: "",
        image: "./milan.jpg",
        read: false,
        reading: true,
        want_to_read: false
      },
      {
        id: 5,
        title: "Journey to the End of the Night",
        author: "Louis-Ferdinand Celine",
        publication_date: "1932",
        genre: "Autobiographical Fiction",
        description:
          "Journey to the End of the Night is an autobiographical novel. It tells the story of Bardamyu and his doppelganger Robenson in a grotesque journey through life, through the world and through death. Bardamyu survives the First World War, wanders through the jungles of colonial Africa, lives in the unnatural world of Industrial America, heals the poor in a Parisian suburb, all the while constantly encoutering Robenson.",
        translator: "Jogn H.P Marks",
        quote: ".",
        pages: "4117",
        country: "France",
        language: "French",
        followed_by: "",
        publisher: "",
        image: "./journey.jpg",
        read: false,
        reading: true,
        want_to_read: false
      },
      {
        id: 6,
        title: "Steppenwolf",
        author: "Herman Hesse",
        publication_date: "1",
        genre: "Existential",
        description:
          "Originally published in Germany in 1927, it was first translated into English in 1929. Combining autobiographical and psychoanalytic elements, the novel was named after the German name for the steppe wolf. The story in large part reflects a profound crisis in Hesse's spiritual world during the 1920s while memorably portraying the protagonist's split between his humanity and his wolf-like aggression and homelessness.",
        translator: "n/a",
        quote: "",
        pages: "237",
        country: "Germany",
        language: "German",
        followed_by: "",
        publisher: "",
        image: "./hesse.jpg",
        read: false,
        reading: true,
        want_to_read: false
      },
      {
        id: 7,
        title: "The Myth of Sisyphus",
        author: "Albert Camus",
        publication_date: "1942",
        genre: "Philosophy",
        description:
          "n the essay Camus introduces his philosophy of the absurd, man's futile search for meaning, unity, and clarity in the face of an unintelligible world devoid of God and eternal truths or values. Does the realization of the absurd require suicide? Camus answers He then outlines several ",
        translator: "n/a",
        quote: "",
        pages: "175",
        country: "France",
        language: "French",
        followed_by: "",
        publisher: "",
        image: "./camus.jpg",
        read: false,
        reading: true,
        want_to_read: false
      },
      {
        id: 8,
        title: "The Man Without Qualities",
        author: "Robert Musil",
        publication_date: "1930-1943",
        genre: "Philosophical Fiction",
        description:
          "The novel is a story of ideas, which takes place in the time of the Austro-Hungarian monarchy's last days, and the plot often veers into allegorical dissections on a wide range of existential themes concerning humanity and feelings. It has a particular concern with the values of truth and opinion and how society organizes ideas about life and society, though the book is well over a thousand pages long in its entirety, and so no one single theme dominates.",
        translator: "n/a",
        quote: "",
        pages: "1130",
        country: "Austria",
        language: "Austrian",
        followed_by: "",
        publisher: "",
        image: "./musil.jpg",
        read: false,
        reading: true,
        want_to_read: false
      }
    ]
  };

  markRead = id => {
    this.setState({
      books: this.state.books.map(book => {
        if (book.id === id) {
          book.read = !book.read;
        }
        return book;
      })
    });
  };

  render() {
    return (
      <div>
        <h1 className={bookStyles.title}>Books</h1>
        <div>
          <AllBooks books={this.state.books} markRead={this.markRead} />
        </div>
      </div>
    );
  }
}

export default Books;
