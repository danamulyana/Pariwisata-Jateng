import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import ArgonBox from "components/ArgonBox";
import Icon from "@mui/material/Icon";
import ArgonTypography from "components/ArgonTypography";
import typography from "assets/theme/base/typography";
import PropTypes from "prop-types";

function RowData({ title, description, data, image}){
    const { size } = typography;

    return (
        <Grid container spacing={3} mb={3}>
            <Grid item xs={12} lg={6}>
                <GradientLineChart
                title={title}
                description={
                    <ArgonBox display="flex" alignItems="center">
                    <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                        <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                    </ArgonBox>
                    <ArgonTypography variant="button" color="text" fontWeight="medium">
                        4% more{" "}
                        <ArgonTypography variant="button" color="text" fontWeight="regular">
                        in October 2025
                        </ArgonTypography>
                    </ArgonTypography>
                    </ArgonBox>
                }
                chart={data}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
                <ArgonBox
                    sx={{
                    position: "relative",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    height: "100%",
                    }}
                >
                    <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
                    <ArgonBox
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="32px"
                        height="32px"
                        bgColor="white"
                        borderRadius="md"
                        textAlign="center"
                        mb={2}
                    >
                        <ArgonTypography variant="caption" lineHeight={0}>
                        <ArgonBox component="i" color="dark" className="ni ni-camera-compact" />
                        </ArgonTypography>
                    </ArgonBox>
                    <ArgonTypography variant="h5" color="white" mb={0.5}>
                        {title}
                    </ArgonTypography>
                    <ArgonTypography variant="body2" color="white">
                        {description}
                    </ArgonTypography>
                    </ArgonBox>
                </ArgonBox>
                </Card>
            </Grid>
        </Grid>
    )
}

RowData.defaultProps = {
    title: "",
    description: "",
    data: [],
    image: "",
};

RowData.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    data: PropTypes.object,
};
export default RowData;