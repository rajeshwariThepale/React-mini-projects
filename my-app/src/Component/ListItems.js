import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import'../Component/ListItems.css';

export default function ListItems(){

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem.trim() !== '') {
          setItems([...items, newItem]);
          setNewItem('');
        }
      };

      //delete function
      const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
      };

    return(
        <div className='itemsList'>
            <h2>shopping list of items</h2>
            <Form>
                <input className='form-control'
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"/>
                <Button onClick={addItem}>Add</Button>
            </Form>
            <ul>
                {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <Button onClick={() => deleteItem(index)}><i class="fa fa-times"></i></Button>
                </li>
                ))}
            </ul>
        </div>
    );
}
