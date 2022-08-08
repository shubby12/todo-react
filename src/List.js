import './List.css';


function List(props) {
    const deleteItem =(key) =>{
        const updatedList = props.prevItem.filter((itemval) => {
            return itemval.key !== key;
        })
        props.updatePrevItem(updatedList);
    };
    return (
        <div>
            {props.prevItem.map((itemval)=>{
                return <div key={itemval.key} className="lists">
                        <p>{itemval.item}</p>
                        <button onClick={()=> deleteItem(itemval.key)}>X</button>
                    </div>
            })}
        </div>
    );

}

export default List;