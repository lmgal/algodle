import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, Grid, Typography } from '@mui/material'

export default function ScoreDialog(props: {
    scoreOpen: boolean, setScoreOpen: (value: boolean) => void,
    clearData: () => void, gameWon: number, averageGuesses: number,
    winStreak: number, maxStreak: number
}){
    const { scoreOpen, setScoreOpen, clearData, gameWon, averageGuesses, winStreak, maxStreak } = props
    return (
        <Dialog
            open={scoreOpen}
            onClose={() => setScoreOpen(false)}
            scroll={'paper'}
        >
            <DialogTitle>Scoreboard</DialogTitle>
            <DialogContent dividers={true}>
            <DialogContentText>
                <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Typography textAlign='center'>Games Won</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign='center'>Average Guesses</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign='center'>Current Streak</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign='center'>Max Streak</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign='center'>{gameWon}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign='center'>{averageGuesses}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign='center'>{winStreak}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign='center'>{maxStreak}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button>Share</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={clearData}>Clear Data</Button>
                </Grid>
                </Grid>
            </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}