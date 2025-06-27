import React from 'react';
import { useState ,useEffect} from 'react';
import linkedList from '../data/linkedlistclass.js';

const linkedInstance = new linkedList();

function LinkedListSimulator() {
    const [input, setinput] = useState("");
    const [index, setindex] = useState();
    const [display, setdisplay] = useState([]);

    const handleInputChange = (event) => {
        setinput(event.target.value);
    }
    const handleIndexChange = (event) => {
        setindex(event.target.value);
    }
    const updateList = () => {
        let arr = [];
        let current = linkedInstance.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        setdisplay(arr);
    }

    useEffect(() => {
        updateList();
      }, []);

    const handleAddAtStart = () => {
        linkedInstance.AddAtStart(input);
        updateList();
        setinput("");
    }
    const handleAddAtEnd = () => {
        linkedInstance.AddAtEnd(input);
        updateList();
        setinput("");
    }
    const handleAddAtPosition = () => {
        linkedInstance.AddAtPosition(input,index);
        updateList();
        setinput("");
        setindex(0);
    }
    const handleRemoveAtStart = () => {
        linkedInstance.RemoveAtStart();
        updateList();
    }
    const handleRemoveAtEnd = () => {
        linkedInstance.RemoveAtEnd();
        updateList();
    }
    const handleRemoveAtPosition = () => {
        linkedInstance.RemoveAtPosition(index);
        updateList();
        setindex(0);
    }
    const handleReverse = () => {
        linkedInstance.reverse();
        updateList();
    }
    

    return (
        <div>
            <h1 className="title">Linked List Visualizer</h1>
            <p className="subtitle">Visualize different Singly Linked List operations in action.</p>
            <a href="https://github.com/kbansal1111/linkedlist-visualizer" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="/github-logo.jpg" alt="View on GitHub" style={{ width: '100%', cursor: 'pointer' }} />
            </a>
            <div className="display_box">
                <div className="linked-list-container">
                    <h3 className='head'>Current List:</h3>
                    <div className="linked-list-nodes">
                        {display.map((val, idx) => (
                            <React.Fragment key={idx}>
                                <div className="linked-list-node">{val}</div>
                                {idx < display.length - 1 && <span className="linked-list-arrow">→</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <label className='input-label'>Enter the value to add:</label>
            <input className='input-box' placeholder='value' type="text" value={input} onChange={handleInputChange} />
            <label className='input-label'>Enter the index to add:</label>
            <input className='input-box' placeholder='index' type="number" value={index} onChange={handleIndexChange} />
            <div>
            <button className="sim-btn" onClick={handleAddAtStart}>AddAtStart</button>
<button className="sim-btn" onClick={handleAddAtEnd}>AddAtEnd</button>
<button className="sim-btn" onClick={handleAddAtPosition}>AddAtPosition</button>
<button className="sim-btn" onClick={handleRemoveAtStart}>RemoveAtStart</button>
<button className="sim-btn" onClick={handleRemoveAtEnd}>RemoveAtEnd</button>
<button className="sim-btn" onClick={handleRemoveAtPosition}>RemoveAtPosition</button>
<button className="sim-btn" onClick={handleReverse}>Reverse</button>
            </div>
        </div>
    );
}
export default LinkedListSimulator;