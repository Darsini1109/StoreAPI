import './App.css';

function List1({key,title,price,img}){
    return <div className="country-div">
        <h4>{title}</h4>
        <img  className= "img" src={img}/>
    </div>
}

export default List1;