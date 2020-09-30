import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyThing() {
  return(
    // <div className='book'>
    //   <div className='title'>Welcome to the title</div>
    //   <div className='author'>Hello title</div>
    //   <ul className='stats'>
    //     <li className='rating'/>
    //     <li className='isbn' />
    //   </ul>
    // </div>
    <div className='book'>
            <div className='title'>
                The Title
            </div>
            <div className='author'>
                The Author
            </div>
            <ul className='stats'>
                <li className='rating'>
                    5 stars
                </li>
                <li className='isbn'>
                    12-3456-789
                </li>
            </ul>
            {/* // single lines */}
            <div>
                Newline
                Test
            </div>
            {/* // empty new lines */}
            <div>
                Empty

                Newlines

                Here
            </div>
            {/* // spaces with new lines */}
            <div>
                &nbsp;Non-breaking
                &nbsp;Spaces&nbsp;
            </div>
            {/* // inserting spaces when content spans multiple lines */}
            <div>
                Line1
                {' '}
                Line2
                </div>
        </div>
  );
}

function Greeting() {
    //var username = "root";
    //var username = undefined;
    var username = null;
    // var username = false;

  return (
    <span>{username === undefined || username === null ? 'not logged in' : 'Hello ' + username}</span>
  );
}

ReactDOM.render(
  <Greeting/>,
  document.querySelector('#root')
);
