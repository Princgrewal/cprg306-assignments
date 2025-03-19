export default function Item(props) {
  
    return(
        <div className="flex-auto border-2 border-black p-2 m-2 bg-gray-900 w-1/4">
            <p className="font-bold text-xl text-white">{props.name}</p>
            <p className="text-white">Buy {props.quantity} in {props.category}</p>
            </div>   
       
    );
}