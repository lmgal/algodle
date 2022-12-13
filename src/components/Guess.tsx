import { ReactNode } from "react"
import { Theme, Grid, Paper, Tooltip, Stack } from "@mui/material"
import { Algorithm } from "../algorithms"
var Latex = require('react-latex')

export const GuessPropertyPaper = (props : {color: string, children: ReactNode, title?: string}) => {
    const { color, children, title } = props
    return <Tooltip title={title} placement="top">
      <Paper component={Stack} elevation={6} sx={{
        minHeight: 60,
        backgroundColor: color,
        textAlign: 'center',
        justifyContent: 'center'
      }}>
      {children}
    </Paper></Tooltip>
  }

export function Guess(props: {
    guess: Algorithm,
    theme: Theme,
    classColor: string,
    worstTimeColor: string,
    averageTimeColor: string,
    bestTimeColor: string,
    spaceColor: string,
    dataStructColor: string,
    key: number,
    myKey: number,
}){
    const { guess, theme, classColor, worstTimeColor, averageTimeColor, bestTimeColor, 
        spaceColor, dataStructColor, myKey } = props

    return (
        <Grid container key={myKey} item rowSpacing={1} xs={12} alignItems='center' justifyContent='center' spacing={1}>
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
}

const GuessComponents = { Guess, GuessPropertyPaper }

export default GuessComponents