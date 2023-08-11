# Autocomplete

The autocomplete is a normal text input enhanced by a panel of suggested options.

## Tutorial

- **Oficial Docs :** [mui.com/material-ui/react-autocomplete](https://mui.com/material-ui/react-autocomplete/)
- **Video :** [Youtube_Link](https://youtu.be/Ob0skYiC3v8)

### Combo box

The value must be chosen from a predefined set of allowed values.

**[Edit in CodeSanbox](https://codesandbox.io/s/5fxs27?file=/Demo.tsx)**

```jsx
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
```

### Grouped

You can group the options with the `groupBy` prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.

**[Edit in CodeSanbox](https://codesandbox.io/s/k984gm?file=/Demo.js)**

```jsx
  const options = top100Films.map((option) => {
    const firstLetter = option.label[0].toUpperCase()
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    }
  })

<Autocomplete
  id="grouped-demo"
  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
  groupBy={(option) => option.firstLetter}
  getOptionLabel={(option) => option.title}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="With categories" />}
/>
```

---

# Button

Buttons allow users to take actions, and make choices, with a single tap.

## Tutorial

- **Oficial Docs :** [mui.com/material-ui/react-button](https://mui.com/material-ui/react-button/)
- **Video :** [Youtube_Link](https://youtu.be/yoSmHKJ7RKQ)

