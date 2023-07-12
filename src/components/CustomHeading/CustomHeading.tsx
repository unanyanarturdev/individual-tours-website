import { Box, Stack, Typography } from "@mui/material"

interface CustomHeadingProps {
  title: string;
  mb?: number;
}

export const CustomHeading = ({ title, mb }: CustomHeadingProps) => {
  return (
    <Stack gap={2} alignItems="center" mb={mb || 4}>
      <Typography variant="h3" textAlign="center" textTransform="uppercase">
        {title}
      </Typography>

      <Box 
        sx={{
          width: 64,
          height: 4,
          backgroundColor: 'info.main',
        }}
      />
    </Stack>
  )
}