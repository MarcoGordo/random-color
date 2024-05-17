

export default function Button({ colorCode, onClick }){
    return(
        <button onClick={onClick}>
            {colorCode}
        </button>
    );
}