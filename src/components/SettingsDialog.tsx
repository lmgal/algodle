import { useState } from "react"
import { Dialog, DialogTitle, DialogContent, Slider, Button, Typography,
    DialogContentText, FormGroup, FormControlLabel, Checkbox } from '@mui/material'

export default function SettingsDialog(props: {
    settingsOpen: boolean,
    colorBlind: 'true' | 'colorBlind',
    maxTries: number,
    setSettingsOpen: (value: boolean) => void,
    saveSettings: (newColorBlind: 'true' | 'colorBlind', newMaxTries: number) => void
}){
    const { settingsOpen, colorBlind, maxTries, setSettingsOpen, saveSettings } = props

    const [newColorBlind, setNewColorBlind] = useState<'true' | 'colorBlind'>(colorBlind)
    const [newMaxTries, setNewMaxTries] = useState<number>(maxTries)

    const reset = () => {
        setNewColorBlind(colorBlind)
        setNewMaxTries(maxTries)
    }

    return (
        <Dialog
        open={settingsOpen}
        onClose={() => {
            setSettingsOpen(false)
            reset()
        }}
        scroll={'paper'}
        fullWidth
      >
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <DialogContentText component={'div'} >
            <FormGroup>
                <Typography variant="h6">Accessibility</Typography>
                <FormControlLabel control={
                    <Checkbox 
                    defaultChecked={newColorBlind === 'colorBlind'}
                    onChange={(e) => setNewColorBlind(e.target.checked ? 'colorBlind' : 'true')}
                    />
                } label='Color blind mode' />
                <Typography variant="h6">Game</Typography>
                <Typography variant="subtitle1">Note: Changing these settings resets for a new game</Typography>
                <Typography>Max tries</Typography>
                <Slider
                    defaultValue={maxTries}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={3}
                    max={10}
                    value={newMaxTries}
                    onChange={(e, value) => setNewMaxTries(value as number)}
                />
                <Button variant="contained" onClick={() => {
                    saveSettings(
                        newColorBlind,
                        newMaxTries)
                    setSettingsOpen(false)
                }}>Save</Button>
            </FormGroup>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    )
}