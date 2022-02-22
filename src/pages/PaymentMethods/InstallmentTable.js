
import styles from './PaymentMethods.module.css';

export const InstallmentTable = () => {


    const { tabel_wrapper, headline, sticky_row } = styles;


    return (
        <>
            <div className = { headline }>جدول تقسيط كل بنك</div>
            <div className = { tabel_wrapper } >
                <table>
                    <thead>
                        <tr>
                            <th className = { sticky_row }>Month</th>
                            <th>CIB</th>
                            <th>MISR</th>
                            <th>Mashreq</th>
                            <th>BDC</th>
                            <th>NBE</th>
                            <th>Audi</th>
                            <th>NBD</th>
                            <th>NBK</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className = { sticky_row }>3 M</td>
                            <td>4.9%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>6M</td>
                            <td>6.2%</td>
                            <td>5.0%</td>
                            <td>5.5%</td>
                            <td>6.1%</td>
                            <td>5.65%</td>
                            <td>4.8%</td>
                            <td>4.0%</td>
                            <td>4.0%</td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>9M</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>7.8%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>10M</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>12M</td>
                            <td>10.3%</td>
                            <td>8.5%</td>
                            <td>8.5%</td>
                            <td>9.6%</td>
                            <td>9.79%</td>
                            <td>6.8%</td>
                            <td>6.5%</td>
                            <td>6.5%</td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>18M</td>
                            <td>14.5%</td>
                            <td>11.7%</td>
                            <td>10.5%</td>
                            <td></td>
                            <td></td>
                            <td>9.8%</td>
                            <td>9.5%</td>
                            <td>9.0%</td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>24M</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>17.36%</td>
                            <td>11.8%</td>
                            <td>12.5%</td>
                            <td>12.0%</td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>30M</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className = { sticky_row }>36M</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>24.09%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};