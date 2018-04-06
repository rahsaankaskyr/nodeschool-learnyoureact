/* 

import React from 'react';
    
    export default class TodoBox extends React.Component{
      render() {
        return <div className="todoBox">
            Hello, world!
          </div>
      }
    }

    */

   import React from 'react';
    
   export default class TodoBox extends React.Component {
       render() {
           return (
               <div className="todoBox">
                   <h1>Todos</h1>
                   <TodoList />
                   <TodoForm />
               </div>
           );
       }
   }
   
   class TodoList extends React.Component {
    render() {
      return <<div className="todoList">
      I am a TodoList.
      </div>
   }
   }
   
   class TodoForm extends React.Component {
    render() {
      return class TodoForm extends React.Component {
      <div className="todoForm">
      I am a TodoForm.
      </div>
     }
   }
   
  
  
   
  

   
 // export default class MyComponent extends React.Component {/*...*/};
 //   let myElement = <MyComponent someProperty={true} />;
 //   ReactDOM.render(myElement, document.getElementById('example'));