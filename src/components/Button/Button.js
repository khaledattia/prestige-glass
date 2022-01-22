import styles from './Button.module.css';

export const Button = ({ text, herf, color, backgroundColor="transparnet", borderColor }) => {

    
    const { 
        button,
        lines_container, 
        horizontal, 
        vertical, 
    } = styles;

    return (
        <div 
        className = { button } 
        style = {{ backgroundColor, border:`1px solid ${ borderColor }` }}>
            <span className={ lines_container }>
                <span className = { horizontal } style = {{ backgroundColor: borderColor }}/>
                <span className = { vertical } style = {{ backgroundColor: borderColor }} />
            </span>

            <span className = { lines_container }>
                <span className = { horizontal } style = {{ backgroundColor: borderColor }}/>
                <span className = { vertical } style = {{ backgroundColor: borderColor }} />
            </span>

            <span style = {{ color }}>
               { text }
            </span>
        </div>
    );
};