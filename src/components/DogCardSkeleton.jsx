import { Card, CardContent, Skeleton, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function DogCardSkeleton() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        height: isMobile ? 240 : 360,
        width: isMobile ? 150 : 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '16px',
        overflow: 'hidden',
        p: 1,
        boxShadow: 'none'
      }}
    >
      <Skeleton variant="rectangular" height={180} sx={{ borderRadius: '12px' }} />
      <CardContent>
        <Skeleton variant="text" width="60%" height={28} />
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="80%" height={20} />
        <Box mt={2}>
          <Skeleton variant="rounded" height={36} />
        </Box>
      </CardContent>
    </Card>
  );
}
