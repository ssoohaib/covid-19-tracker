import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'


function CardBtn(props) {
  return (
    <Card onClick= {props.onClick} className={`info-box ${props.click && 'red-clicked'} ${props.isGreen && 'green-clicked'}`}>
        <CardContent>
            <Typography color="textSecondary">{props.title}</Typography>
            <h2 style={{color:props.color}}>{props.cases}</h2>
            <Typography color="textSecondary">{props.total} Total</Typography>
        </CardContent>
    </Card>
  )
}

export default CardBtn
