import { Card, CardContent, Skeleton, Box } from '@mui/material';

export default function DogCardSkeleton() {
  return (
    <Card
      sx={{
        height: 360,
        width: 240,
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
