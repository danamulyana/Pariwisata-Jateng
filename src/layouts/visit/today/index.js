import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ArgonBox from "components/ArgonBox";
import RowData from "components/RowData/RowData";
import DataToday from 'layouts/visit/today/data/DataToday';

function VisitToday(){
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ArgonBox py={3}>
                {
                    DataToday.map((da,) => (
                        <RowData key={da.key} title={da.title} data={da.data} image={da.img} description={da.desc} />
                    ))
                }
            </ArgonBox>
            <Footer />
        </DashboardLayout>
    )
}

export default VisitToday;