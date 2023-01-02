import React from "react"
import Button, { ButtonProps } from '@mui/material/Button'



interface AppButtonProps extends ButtonProps {
  title: string,
}


function AppButton({ title, ...buttonProps }: AppButtonProps) {

  return (
    <Button
      {...buttonProps}
      variant="contained"
      color="primary"
    >
      {title}
    </Button>
  )
}


export { AppButton }