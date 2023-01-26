function Square (props) {
    return (
        <div className={`square ${props.x ? 'red' : (props.o ? 'blue' : '')}`} {...props}>{props.x ? 'x': (props.o ? 'o' : '') }</div>
    );
}

export default Square;