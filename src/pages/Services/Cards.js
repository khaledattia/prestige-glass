
import shower_box from '@assets/imgs/services/shower-box.png';
import door from '@assets/imgs/services/door.png';
import mirror from '@assets/imgs/services/mirror.png';
import stairs from '@assets/imgs/services/stairs.png';
import face from '@assets/imgs/services/face.png';

import styles from './Services.module.css';

export const Cards = () => {

    const { row, col } = styles;
    return (
        <div className = { row } >

            <div className = { col }>
                <Card tapText = "هاندريل" src = { stairs  } />
            </div>

            <div className = { col }>
                <Card tapText = "كابين" src = { shower_box } />

            </div>

            <div className = { col }>
                <Card tapText = "باب" src = { door } />

            </div>

            <div className = { col }>
                <Card tapText = "مرايات مضيئة" src = { mirror  } />

            </div>

            <div className = { col }>
                <Card tapText = "واجهات" src = { face  } />
            </div>

        </div>
    );
};

const Card = ({ tapText, src }) => {

    const { tap , card } = styles;
    
    return (
        <div className = { card }>

            <div className = { tap } >{ tapText }</div>
            <img src = { src } />
        </div>
    );
};