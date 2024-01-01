import { DataLawangSewu, DataKotaLama } from 'layouts/visit/today/data/ChartData';
import bg1 from "assets/images/img-2.jpg";
import bg2 from "assets/images/img-1.jpg";
import bg3 from "assets/images/img-3.jpg";
import bg4 from "assets/images/img-4.jpg";
import bg5 from "assets/images/img-5.jpg";

const DataToday = [
    {
        key: 1,
        title: "Visitors Today's sLawang Sewu",
        desc: 'hallo',
        img: bg2,
        data : DataLawangSewu
    },
    {
        key: 2,
        title: "Visitors Today's Kota Lama",
        desc: 'Kota lama nih',
        img: bg1,
        data : DataKotaLama
    }
];

export default DataToday;