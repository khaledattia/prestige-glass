
import styles from './PaymentMethods.module.css';

export const InstallmentTable = () => {


    const { tabel_wrapper, headline, sticky_row } = styles;


    return (
        <>
            <div className = { headline } id = "installment">جدول تقسيط كل بنك</div>
            <div className = { tabel_wrapper } >
                <table>
                    <thead>
                        <tr>
                            <th className = { sticky_row }>Month</th>
                            <th>سى آى بى CIB</th>
                            <th>بنك مصر MISR</th>
                            <th>بنك المشرق Mashreq</th>
                            <th>بنك القاهرة BDC</th>
                            <th>البنك الاهلى المصرى NBE</th>
                            <th>بنك عوده Audi</th>
                            <th>بنك الإمارات دبي الوطني NBD</th>
                            <th>بنك الكويت الوطني NBK</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className = { sticky_row }>3 M</td>
                            <td>7%</td> {/** CIB */}
                            <td></td> {/** MISR */}
                            <td></td> {/** Mashreq */}
                            <td></td> {/** BDC */}
                            <td></td> {/** NBE */}
                            <td></td> {/** Audi */}
                            <td></td> {/** NBD */}
                            <td></td> {/** NBK */}
                        </tr>

                        <tr>
                            <td className = { sticky_row }>6M</td>
                            <td>8%</td> {/** CIB */} 
                            <td>6%</td> {/** MISR */}
                            <td>10%</td> {/** Mashreq */}
                            <td>10%</td> {/** BDC */}
                            <td>7%</td> {/** NBE */}
                            <td>8.25%</td> {/** Audi */}
                            <td>7%</td> {/** NBD */}
                            <td>7%</td> {/** NBK */}
                        </tr>

                        <tr>
                            <td className = { sticky_row }>9M</td>
                            <td></td> {/** CIB */}
                            <td></td> {/** MISR */}
                            <td></td> {/** Mashreq */}
                            <td></td> {/** BDC */}
                            <td></td> {/** NBE */}
                            <td></td> {/** Audi */}
                            <td></td> {/** NBD */}
                            <td></td> {/** NBK */}
                        </tr>

                        <tr>
                            <td className = { sticky_row }>10M</td>
                            <td></td> {/** CIB */} 
                            <td></td> {/** MISR */} 
                            <td></td> {/** Mashreq */} 
                            <td></td> {/** BDC */} 
                            <td></td> {/** NBE */} 
                            <td></td> {/** Audi */} 
                            <td></td> {/** NBD */} 
                            <td></td> {/** NBK */} 
                        </tr>

                        <tr>
                            <td className = { sticky_row }>12M</td>
                            <td>13%</td> {/** CIB */}
                            <td>11%</td> {/** MISR */}
                            <td>13%</td> {/** Mashreq */}
                            <td>14%</td> {/** BDC */}
                            <td>12.7%</td> {/** NBE */}
                            <td>10.9%</td> {/** Audi */}
                            <td>10.4%</td> {/** NBD */}
                            <td>10.4%</td> {/** NBK */}
                        </tr>

                        <tr>
                            <td className = { sticky_row }>18M</td>
                            <td>18%</td> {/** CIB */}
                            <td>15%</td> {/** MISR */}
                            <td>15%</td> {/** Mashreq */}
                            <td></td> {/** BDC */}
                            <td></td> {/** NBE */}
                            <td>15%</td> {/** Audi */}
                            <td>14.80%</td> {/** NBD */}
                            <td>14%</td> {/** NBK */}
                        </tr>

                        <tr>
                            <td className = { sticky_row }>24M</td>
                            <td></td> {/** CIB */}
                            <td></td> {/** MISR */}
                            <td></td> {/** Mashreq */}
                            <td></td> {/** BDC */}
                            <td>24.8%</td> {/** NBE */}
                            <td>18.35%</td> {/** Audi */}
                            <td>19.4%</td> {/** NBD */}
                            <td>19.5%</td> {/** NBK */}
                        </tr>

                        <tr>
                            <td className = { sticky_row }>30M</td>
                            <td></td> {/** CIB */}
                            <td></td> {/** MISR */}
                            <td></td> {/** Mashreq */}
                            <td></td> {/** BDC */}
                            <td></td> {/** NBE */}
                            <td></td> {/** Audi */}
                            <td></td> {/** NBD */}
                            <td></td> {/** NBK */}
                        </tr>

                        <tr>
                            <td className = { sticky_row }>36M</td>
                            <td></td> {/** CIB */}
                            <td></td> {/** MISR */}
                            <td></td> {/** Mashreq */}
                            <td></td> {/** BDC */}
                            <td>38%</td> {/** NBE */}
                            <td></td> {/** Audi */}
                            <td></td> {/** NBD */}
                            <td></td> {/** NBK */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};