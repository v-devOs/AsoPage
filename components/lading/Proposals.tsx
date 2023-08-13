import React from 'react'
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { DecoredTitle } from '../ui'
import { proposalsAso } from '../../data/proposalsAso';

export const Proposals = () => {
  return (
    <Grid container sx={{ background: '#101010', p: 2 }} spacing={4}>

      <Grid item xs={12} md={6} sx={{ color: 'white', display: { xs: 'block', md: 'none' } }}>
        <DecoredTitle title='Propuestas'>
          <Typography variant='body1'>
            Elit sunt deserunt duis esse tempor ea. Consequat ullamco elit esse ut exercitation sit ullamco ea non deserunt aliqua dolore aliquip dolore. Ut velit Lorem enim laboris velit cupidatat tempor. Sint culpa officia culpa eu commodo magna anim aute. Sunt fugiat reprehenderit labore veniam ad est est enim. Id aliqua consectetur officia nisi commodo laboris quis tempor incididunt reprehenderit pariatur amet ullamco ad.
          </Typography>
        </DecoredTitle>
      </Grid>


      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>

          {
            proposalsAso.map(p => (
              <Grid item xs={12} md={6} key={p._id}>
                <Card className='appearAndIncrementWidth'>
                  <CardContent>
                    <Typography variant='body1'>{p.nameProposal}</Typography>
                    <Divider />
                    <Typography variant='body2'>{p.desc}</Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))
          }

        </Grid>
      </Grid>

      <Grid item xs={12} md={6} sx={{ color: 'white', display: { xs: 'none', md: 'block' } }}>
        <DecoredTitle title='Propuestas'>
          <Typography variant='body1'>
            Elit sunt deserunt duis esse tempor ea. Consequat ullamco elit esse ut exercitation sit ullamco ea non deserunt aliqua dolore aliquip dolore. Ut velit Lorem enim laboris velit cupidatat tempor. Sint culpa officia culpa eu commodo magna anim aute. Sunt fugiat reprehenderit labore veniam ad est est enim. Id aliqua consectetur officia nisi commodo laboris quis tempor incididunt reprehenderit pariatur amet ullamco ad.
          </Typography>
        </DecoredTitle>
      </Grid>
    </Grid>
  )
}
