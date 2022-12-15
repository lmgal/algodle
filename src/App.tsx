import { useState } from 'react'
import { Grid, Typography, AppBar, Toolbar, IconButton,
  Autocomplete, TextField, Button, useTheme } from '@mui/material'
import { Leaderboard, Settings, Help } from '@mui/icons-material'
import { algorithms, Algorithm } from './algorithms'
import { red, yellow, green } from '@mui/material/colors'
import { Guess } from './components/Guess'
import HelpDialog from './components/HelpDialog'
import ScoreDialog from './components/ScoreDialog'
import SettingsDialog from './components/SettingsDialog'

const reds = {
  'true': red['A700'],
  'colorBlind': '#DC3220'
}
const greens = {
  'true': green['A700'],
  'colorBlind': '#1AFF1A'
}
const yellows = {
  'true': yellow['A700'],
  'colorBlind': '#FFC20A'
}

// Min included and max excluded
function randomNumber(min: number, max: number) : number {
  return Math.floor(Math.random() * (max - min)) + min
}


function App() {
  const theme = useTheme()
  // Game
  const [value, setValue] = useState<Algorithm | null>(null)
  const [answer, setAnswer] = useState<Algorithm>(algorithms[randomNumber(0, algorithms.length)])
  const [guesses, setGuesses] = useState<Array<Algorithm>>([])
  const [answered, setAnswered] = useState(false)
  const [tries, setTries] = useState(0)
  // Help
  const [helpOpen, setHelpOpen] = useState(false)
  // Scoreboard
  const [scoreOpen, setScoreOpen] = useState(false)
  const [gameWon, setGameWon] = useState<number>(0)
  const [winStreak, setWinStreak] = useState<number>(0)
  const [maxStreak, setMaxStreak] = useState<number>(0)
  const [gamesPlayed, setGamesPlayed] = useState<number>(0)
  const [triesPlayed, setTriesPlayed] = useState<number>(0)
  // Settings
  const [settingsOpen, setSettingsOpen] = useState(false)
  // Thinking of changing this to color mode (> 2). If not, should be refactored to boolean
  const [colorBlind, setColorBlind] = useState<'true' | 'colorBlind'>('true') 
  const [maxTries, setMaxTries] = useState<number>(5)

  // Just to count how many algorithms are implemented
  console.log(algorithms.length)

  const checkGuess = () => {
    if (value === null)
      return
    const newGuesses = guesses.concat([value as Algorithm])
    const newAnswered = value?.id === answer.id
    const newTries = tries + 1

    setGuesses(newGuesses)
    setAnswered(newAnswered)
    if (newAnswered){
      setGameWon(gameWon + 1)

      const newWinStreak = winStreak + 1
      setWinStreak(newWinStreak)
      if (newWinStreak > maxStreak) setMaxStreak(newWinStreak)
    }

    setTries(newTries)
    setValue(null)
    if (newTries >= maxTries && !newAnswered)
      setWinStreak(0)
  }

  const newGame = () => {
    setTriesPlayed(triesPlayed + tries)
    setTries(0)
    setValue(null)
    setGuesses([])
    setAnswer(algorithms[randomNumber(0, algorithms.length)])
    setAnswered(false)
    setGamesPlayed(gamesPlayed + 1)
  }

  const clearData = () => {
    setGameWon(0)
    setWinStreak(0)
    setMaxStreak(0)
    setTriesPlayed(0)
    setGamesPlayed(0)
  }

  const saveSettings = (
    newColorBlind: typeof colorBlind, 
    newMaxTries: number) => {
      setColorBlind(newColorBlind)
      if (newMaxTries !== maxTries){
        newGame()
      }
      setMaxTries(newMaxTries)
  }

  // If no games played yet, output 0. Round off to two decimal places. 
  const averageGuesses = () => gamesPlayed > 0 ? 
    Math.round(((triesPlayed / gamesPlayed ) + Number.EPSILON) * 100) / 100 : 0

  return (
    <>
      <HelpDialog helpOpen={helpOpen} setHelpOpen={setHelpOpen} 
        red={reds[colorBlind]} green={greens[colorBlind]} yellow={yellows[colorBlind]} />
      <ScoreDialog scoreOpen={scoreOpen} setScoreOpen={setScoreOpen} clearData={clearData}
        gameWon={gameWon} averageGuesses={averageGuesses()} winStreak={winStreak} maxStreak={maxStreak} />
      <SettingsDialog settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} colorBlind={colorBlind}
        maxTries={maxTries} saveSettings={saveSettings} />
      <AppBar position='static' sx={{marginBottom: 3}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            ALGODLE
          </Typography>
          <IconButton color='inherit' onClick={() => setHelpOpen(true)}><Help /></IconButton>
          <IconButton color='inherit' onClick={() => setScoreOpen(true)}><Leaderboard /></IconButton>
          <IconButton color='inherit' onClick={() => setSettingsOpen(true)}><Settings /></IconButton>
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
            { (!answered && tries < maxTries) &&
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
          const classColor = answer.class === guess.class ? greens[colorBlind] : reds[colorBlind]
          const worstTimeColor = answer.worstTime === guess.worstTime ? greens[colorBlind] : reds[colorBlind]
          const averageTimeColor = answer.averageTime === guess.averageTime ? greens[colorBlind] : reds[colorBlind]
          const bestTimeColor = answer.bestTime === guess.bestTime ? greens[colorBlind] : reds[colorBlind]
          const spaceColor = answer.space === guess.space ? greens[colorBlind] : reds[colorBlind]
          // Check if each element of guess is in the answer
          let dataStructColor: string = reds[colorBlind]
          let allStructShared = true
          const larger = guess.dataStruct.length > answer.dataStruct.length ? guess.dataStruct : answer.dataStruct
          const smaller = larger === guess.dataStruct ? answer.dataStruct : guess.dataStruct
          for (const struct of larger){
            if (smaller.includes(struct))
              dataStructColor = yellows[colorBlind]
            else
              allStructShared = false
          }

          if (allStructShared)
            dataStructColor = greens[colorBlind]

          return <Guess guess={guess} theme={theme} classColor={classColor} worstTimeColor={worstTimeColor}
            averageTimeColor={averageTimeColor} bestTimeColor={bestTimeColor} spaceColor={spaceColor}
            dataStructColor={dataStructColor} key={i} myKey={i}/>
        }) }
        { (answered || tries >= maxTries) && 
          <Grid container item direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
              <Typography>The answer is {answer.name}</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={newGame}>{answered ? 'Continue' : 'New Game'}</Button>
            </Grid>
          </Grid>
        }
      </Grid>
    </>
  );
}

export default App
