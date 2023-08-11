import Button from "@mui/material/Button"
// import { Button } from "@mui/material" not preferable
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import AlarmIcon from "@mui/icons-material/Alarm"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

const ButtonComponent = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button size="small" color="secondary">
          Secondary
        </Button>
        <Button size="large" variant="contained" color="success">
          Success
        </Button>
        <Button size="medium" variant="outlined" color="error">
          Error
        </Button>
      </Stack>

      <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>
    </div>
  )
}

export default ButtonComponent
