/* eslint-disable no-undef */
import {Container, CssBaseline, Paper , Typography} from "@mui/material";

const Notifications = () => {
    return(
 
        <Container maxWidth="xl" >
        <CssBaseline />
            <Paper elevation={10} style={{ margin:'150px', padding: "200px", textAlign: "center" , width:"75%", backgroundColor: "#afd4d5"}}>
                <Typography variant="h5" gutterBottom>
                    No New Notifications.
                </Typography>
            </Paper>
        </Container>
    )
}
export default Notifications;