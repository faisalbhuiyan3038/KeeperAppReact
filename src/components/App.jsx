import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes.js';

function App(){
    return <div>
    <Header></Header>
        {notes.map(x => {
           return <Note 
                key={x.key}
                title={x.title}
                content={x.content}
            />
        })}
        <Footer></Footer>
    </div>
}

export default App;