import React from 'react';

class Layers extends React.Component{
    state = {
        // list: ['option 1', 'option 2', 'option 3'],
        list: [
            {
                id: 1,
                name: 'option 1',
                arr: ['wow', 'cool', 'sick'],
                show: false
            }, 
            {
                id: 2,
                name: 'option 2',
                arr: ['wow', 'cool', 'sick'],
                show: false
        }, 
            {
                id: 3,
                name: 'option 3',
                arr: ['wow', 'cool', 'sick'],
                show: false
            }
        ]
    }

    handleSort = (el) => {
       const newArr = this.state.list.map(item => {
           if(item.id === el.id) {
               item.show = !item.show
           }
           return item;
       })
       this.setState({ list: newArr})
    }
    render() {
        return (
            <ol>
               {this.state.list.map(item => {
                   return (
                    <li key={item.id} onClick={() => this.handleSort(item)}>
                        {item.name}
                        {item.show && item.arr.map(el => <ul><li key={el}>{el}</li></ul>)}
                    </li>
                   )
               })}
               
            </ol>
        )
    }
}
export default Layers