import styles from './Loader.module.css';


export const Loader = () => {

    const { 
        loader, 
        loaders_container 
    } = styles 

    return (
        <div className = { loaders_container }>
            <i className = { loader } />
            <i className = { loader } />
            <i className = { loader } />
        </div>
    );
};