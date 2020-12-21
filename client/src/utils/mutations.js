import gql from 'graphql-tag';

export const LOGIN_USER = gql` 
mutation login($email:String!, $password: String!){
    login(emai: $email, password: $password){
       token
       user{
           _id
           username
           email
           bookCount
           savedBook {
               bookId
               title
               description
               authors
               image
               link
           }
       } 
    }
}
`;

export const ADD_USER = gql `
mutation addUser($username: String!, $email: String! , $password: String!){
    addUser(username, email: $email, password: $password){
        token
        user{
            _id
            username
            email
            bookCount
            savedBook {
                bookId
                title
                description
                authors
                image
                link
            }
        }
    }
}
`;

export const SAVE_BOOK = gql `
mutation saveBook ($input: bookInput!){
    saveBook(input: $input){
        _id
        username
        email
        savedBook {
            bookId
            authors
            image
            description
            title
            link
        }
    }
}
`;

export const REMOVE_BOOK = gql `
mutation removeBook($bookId: String!){
    removeBook(bookId: $bookId){
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }
}
`;
