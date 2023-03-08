function Player({ children, isSelected }) {
    const className = isSelected ? 'selected' : ''
    return (
        <span className={className}>{children}</span>
    );
}

export default Player