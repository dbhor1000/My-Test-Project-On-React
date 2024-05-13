import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

const UserController = () => {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[username,setName]=useState('')
    const[password,setPassword]=useState('')
    const[fullName,setFullname]=useState('')
    const[role,setRole]=useState(1)
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const user={username,password,fullName,role}
        console.log(user)
        fetch("http://localhost:8080/user/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)

        }).then(()=>{
            console.log("New User added")
        })
    }

    return(

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}><u>New User</u></h1>

                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth
                               value={username}
                               onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                               value={password}
                               onChange={(e)=>setPassword(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth
                               value={fullName}
                               onChange={(e)=>setFullname(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Role" variant="outlined" fullWidth
                               value={role}
                               onChange={(e)=>setRole(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>
                </form>

            </Paper>



        </Container>

    )
}

export {UserController}