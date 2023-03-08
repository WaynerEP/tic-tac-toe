function Square({ children, handleClick, index }) {
  return (
    <div onClick={() => handleClick(index)} className='square'>
      {children}
    </div>
  );
}

export default Square