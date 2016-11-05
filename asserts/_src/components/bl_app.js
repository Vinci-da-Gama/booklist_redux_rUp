import React from 'react';
const { Component } = React;
import Booklist from '../containers/book-list';
import SelectedBook from '../containers/book-detail';

class BooklistApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
            	<Booklist />
                <SelectedBook />
            </div>
        );
    }
}

export default BooklistApp;
