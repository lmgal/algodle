import { Dialog, DialogTitle, DialogContent, DialogContentText, Divider, Grid, Typography } from '@mui/material'
import { GuessPropertyPaper } from './Guess'

export default function TutorialDialog(props: {
    helpOpen: boolean, setHelpOpen: (value: boolean) => void,
    red: string, green: string, yellow: string
}){
    const { helpOpen, setHelpOpen, red, green, yellow } = props

    return (
    <Dialog
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        scroll={'paper'}
        >
        <DialogTitle>Tutorial</DialogTitle>
        <DialogContent dividers={true}>
            <DialogContentText component={'div'}>           
                <Grid container spacing={1} alignItems='center' sx={{paddingBottom: 2}}>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign='center'>Algodle</Typography>
                </Grid>
                <Grid item>
                    <Typography>You gets 5 tries to guess the algorithm</Typography>
                </Grid>
                <Grid item>
                    <Typography>
                    The game shows you the class, complexities and data structures involved in your guess
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>The color of each property of the guess shows how close your guess is</Typography>
                </Grid>
                <Grid item xs={4}>
                    <GuessPropertyPaper color={green}>{ }</GuessPropertyPaper>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Indicates the property is an exact match</Typography>
                </Grid>
                <Grid item xs={4}>
                    <GuessPropertyPaper color={yellow}>{ }</GuessPropertyPaper>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Indicates partial match</Typography>
                </Grid>
                <Grid item xs={4}>
                    <GuessPropertyPaper color={red}>{ }</GuessPropertyPaper>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Indicates no match between the guess and the answer for this property</Typography>
                </Grid>
                </Grid>
                <Divider sx={{marginBottom: 2}}/>
            </DialogContentText>
        </DialogContent>  
    </Dialog>
    )
}