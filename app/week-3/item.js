export default function Item(props) {
  
    return(
        <div className="flex-auto border-2 border-black p-2 m-2 bg-gray-900 w-1/4">
            <p className="font-bold text-xl">{props.name}</p>
            <p>Buy {props.quantity} in {props.category}</p>
            </div>   
       
    );
}