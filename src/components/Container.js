import React, { useContext } from "react"
import { Box, ResponsiveContext } from "grommet"
import { InstagramPosts } from "."

export const Container = ({ nodes }) => {
  const size = useContext(ResponsiveContext)
  const extraProps =
    size !== `small` ? { style: { gridColumnStart: 2 } } : undefined
  return (
    <Box {...extraProps}>
      <InstagramPosts nodes={nodes} />
    </Box>
  )
}
