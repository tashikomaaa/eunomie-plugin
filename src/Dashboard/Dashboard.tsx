import { Button, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import SendIcon from '@mui/icons-material/Send'

export default class Dashboard extends Component {
    render() {
        return (
            <Paper>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, },
                        display: "flex",
                        alignContent: "flex-start",
                        justifyContent: "space-evenly",
                        alignItems: "stretch",
                        flexWrap: "wrap",
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Nom"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <TextField
                        label="Prénom"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />

                    <TextField
                        label="Adresse"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <TextField
                        label="Emploi"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                    <TextField
                        label="Date de naissance"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                </Box>
                <div style={{
                    width: "100%",
                    marginTop: "20px",
                    display: "flex",
                    alignContent: "flex-start",
                    justifyContent: "space-evenly",
                    alignItems: "stretch",
                    flexWrap: "wrap",
                }}>
                    <TextField
                        sx={{ width: "100%" }}
                        label="Notes"
                        multiline
                        maxRows={7}
                        id="outlined-size-small"
                    />
                </div>
                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignContent: "center",
                    justifyContent: "center"
                }} >
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </div>
            </Paper>
        )
    }
}
