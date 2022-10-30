import React from 'react';
import TodoList from "../todoList";
import Header from "../header";
import SearchPanel from "../SearchComponent";
import ItemAddForm from "../itemAddForm";
import ItemStatusFilter from "../itemStatusFilter";


class App extends React.Component {

        constructor() {
            super();
            this.state = {
                items : [
                    {id: 1, label: 'Learn React', done: false, mark: true},
                    {id: 2, label: 'Learn Redux', done: false, mark: false},
                    {id: 3, label: 'Learn JS', done: false, mark: false},
                ],
                searchText: ''
            }
        }

        setSearchText = (text) => {
            this.setState({
                searchText: text
            })
        }

    onRemove (id) {
        this.setState((state) => {
            const index = state.items.findIndex((item) => item.id === id)
            const items = [
                ...state.items.slice(0, index),
                ...state.items.slice(index + 1)
            ]
            console.log({items})
            return {items}
        })
    }

id = 4

        onAddItem = (label) => {
            this.setState((state) => {
                const item = {id: ++this.id, label: label, done: false, mark: false}
                return {
                    items: [...state.items, item]
                }
            })
        }


    onSearchChange = (search) => {
        if (search.length === 0) {
            return this.state.items
        }

        return this.state.items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    onToggleDone = (done) => {


        this.setState((state) => {
            console.log(state.done)
            return {
                   done: !state.done
            }
        })
    }

    onMark = (mark) => {
        this.setState((state) => {
            console.log(state.mark)
            return {
                mark: !state.mark
            }
        })
    }




   render () {
          const visibleItems = this.onSearchChange(this.state.searchText)

       return (
           (<div>
               <section>
                   <Header/>
                   <SearchPanel setSearchText={this.setSearchText}/>

                   <ItemStatusFilter />
                   <TodoList items={visibleItems}
                             onToggleDone = {(done) => this.onToggleDone(done)}
                             onMark = {(mark) => this.onMark()}
                             onRemove={(id) => this.onRemove(id)}/>
                   <ItemAddForm onAddItem={this.onAddItem}/>
               </section>
           </div>)
       );
   }
   }


export default App;