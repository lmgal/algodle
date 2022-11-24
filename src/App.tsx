import { useState, useEffect, ReactNode } from 'react'
import { Grid, Typography, AppBar, Toolbar, IconButton, Dialog, Divider,
  Autocomplete, TextField, Button, Paper, useTheme, Stack } from '@mui/material'
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Leaderboard, Settings, Help } from '@mui/icons-material'
import { DialogProps } from '@mui/material/Dialog'
import { algorithms, Algorithm } from './algorithms'
import { red, yellow, green } from '@mui/material/colors'


var Latex = require('react-latex')

// Min included and max excluded
function randomNumber(min: number, max: number) : number {
  return Math.floor(Math.random() * (max - min)) + min
}

const GuessPropertyPaper = (props : {color: string, children: ReactNode}) => {
  const { color, children } = props
  return <Paper component={Stack} elevation={6} sx={{
      minHeight: 60,
      backgroundColor: color,
      textAlign: 'center',
      justifyContent: 'center'
    }}>
    {children}
  </Paper>
}

const answer = algorithms[randomNumber(0, algorithms.length)]

function App() {
  const theme = useTheme()
  const [value, setValue] = useState<Algorithm | null>(null)
  const [guesses, setGuesses] = useState<Array<Algorithm>>([])
  const [answered, setAnswered] = useState(false)
  const [tries, setTries] = useState(0)
  const [helpOpen, setHelpOpen] = useState(false)
  const [scoreOpen, setScoreOpen] = useState(false)

  const checkGuess = () => {
    if (value === null)
      return
    const newGuesses = guesses.concat([value ? value : algorithms[0]])
    setGuesses(newGuesses)
    setAnswered(value?.id === answer.id)
    setTries(tries + 1)
    setValue(algorithms[0])
  }

  return (
    <>
      <Dialog
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        scroll={'paper'}
      >
        <DialogTitle>Tutorial</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText>           
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
                <GuessPropertyPaper color={green['A700']}>{ }</GuessPropertyPaper>
              </Grid>
              <Grid item xs={8}>
                <Typography>Indicates the property is an exact match</Typography>
              </Grid>
              <Grid item xs={4}>
                <GuessPropertyPaper color={yellow['A700']}>{ }</GuessPropertyPaper>
              </Grid>
              <Grid item xs={8}>
                <Typography>Indicates partial match</Typography>
              </Grid>
              <Grid item xs={4}>
                <GuessPropertyPaper color={red['A700']}>{ }</GuessPropertyPaper>
              </Grid>
              <Grid item xs={8}>
                <Typography>Indicates no match between the guess and the answer for this property</Typography>
              </Grid>
            </Grid>
            <Divider sx={{marginBottom: 2}}/>
          </DialogContentText>
        </DialogContent>  
      </Dialog>
      <Dialog
        open={scoreOpen}
        onClose={() => setScoreOpen(false)}
        scroll={'paper'}
      >
        <DialogTitle>Achievement</DialogTitle>
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
                <Typography textAlign='center'>0</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign='center'>0</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign='center'>0</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign='center'>0</Typography>
              </Grid>
              <Grid item xs={2}>
                <Button>Share</Button>
              </Grid>
              <Grid item xs={4}>
                <Button>Clear Data</Button>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <AppBar position='static' sx={{marginBottom: 3}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            ALGODLE
          </Typography>
          <IconButton color='inherit' onClick={() => setHelpOpen(true)}><Help /></IconButton>
          <IconButton color='inherit' onClick={() => setScoreOpen(true)}><Leaderboard /></IconButton>
          <IconButton color='inherit'><Settings /></IconButton>
        </Toolbar>
      </AppBar>
      <Grid container alignItems='center' justifyContent='center' spacing={1} direction="column" rowSpacing={3}> 
        <Grid item xs={12}>
          <Typography variant='h6'>Guess the hidden algorithm</Typography>
        </Grid>
        <Grid item container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item >
            <Autocomplete
              value={value}
              onChange={(e: any, newVal: Algorithm | null) => setValue(newVal)}
              options={algorithms}
              getOptionLabel={(algorithm: Algorithm) => algorithm.name}
              sx={{ width: '100vh' }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item>
            { (!answered && tries < 5) &&
              <Button variant='contained' onClick={checkGuess}>Submit</Button>}
          </Grid>
        </Grid>
        { guesses.length > 0 && <Grid container item rowSpacing={1} xs={12} alignItems='center' justifyContent='center' spacing={1}>
          <Grid item xs={1.5} sx={{textAlign: 'center'}}>
            Name
          </Grid>
          <Grid item xs={1.5} sx={{textAlign: 'center'}}>
            Class
          </Grid>
          <Grid item xs={1.5} sx={{textAlign: 'center'}}>
            Worst Time Complexity
          </Grid>
          <Grid item xs={1.5} sx={{textAlign: 'center'}}>
            Average Time Complexity
          </Grid>
          <Grid item xs={1.5} sx={{textAlign: 'center'}}>
            Best Time Complexity
          </Grid>
          <Grid item xs={1.5} sx={{textAlign: 'center'}}>
            Space Complexity
          </Grid>
          <Grid item xs={1.5} sx={{textAlign: 'center'}}>
            Data Structure/s
          </Grid>
        </Grid> }
        { guesses.map((guess, i: number) => {
          const classColor = answer.class === guess.class ? green['A700'] : red['A700']
          const worstTimeColor = answer.worstTime === guess.worstTime ? green['A700'] : red['A700']
          const averageTimeColor = answer.averageTime === guess.averageTime ? green['A700'] : red['A700']
          const bestTimeColor = answer.bestTime === guess.bestTime ? green['A700'] : red['A700']
          const spaceColor = answer.space === guess.space ? green['A700'] : red['A700']
          // Check if each element of guess is in the answer
          let dataStructColor: string = red['A700']
          let allStructShared = true
          const larger = guess.dataStruct.length > answer.dataStruct.length ? guess.dataStruct : answer.dataStruct
          const smaller = larger === guess.dataStruct ? answer.dataStruct : guess.dataStruct
          for (const struct of larger){
            if (smaller.includes(struct))
              dataStructColor = yellow['A700']
            else
              allStructShared = false
          }

          if (allStructShared)
            dataStructColor = green['A700']

          return (
            <Grid container key={i} item rowSpacing={1} xs={12} alignItems='center' justifyContent='center' spacing={1}>
              <Grid item xs={1.5}>
                <GuessPropertyPaper color={theme.palette.background.paper}>
                  {guess.name}
                </GuessPropertyPaper>
              </Grid>
              <Grid item xs={1.5}>
                <GuessPropertyPaper color={classColor}>
                  {guess.class}
                </GuessPropertyPaper>
              </Grid>
              <Grid item xs={1.5}>
                <GuessPropertyPaper color={worstTimeColor}>
                  <Latex>{guess.worstTime}</Latex>
                </GuessPropertyPaper>
              </Grid>
              <Grid item xs={1.5}>
                <GuessPropertyPaper color={averageTimeColor}>
                  <Latex>{guess.averageTime}</Latex>
                </GuessPropertyPaper>
              </Grid>
              <Grid item xs={1.5}>
                <GuessPropertyPaper color={bestTimeColor}>
                  <Latex>{guess.bestTime}</Latex>
                </GuessPropertyPaper>
              </Grid>
              <Grid item xs={1.5}>
                <GuessPropertyPaper color={spaceColor}>
                  <Latex>{guess.space}</Latex>
                </GuessPropertyPaper>
              </Grid>
              <Grid item xs={1.5}>
                <GuessPropertyPaper color={dataStructColor}>
                  {guess.dataStruct.join(', ') }
                </GuessPropertyPaper>
              </Grid>
            </Grid>
          )
        }) }
        { (answered || tries >= 5) && 
          <Grid item>
            <Typography>The answer is {answer.name}</Typography>
          </Grid>
        }
      </Grid>
    </>
  );
}

export default App;
