import React, { FC } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'

import { CardMedia, Grid, SxProps, Theme, Typography } from '@mui/material';
import { LandingLayout, ProjectLayout } from '@/components/layouts'


import { IProject } from '../../interfaces/IProject';
import { projectsAso } from '@/data';
import { CardMember } from '@/components/ui';

interface Props{
  project: IProject
}

const stylesProperties: SxProps<Theme>   = {
  position: "relative",
  top: '150px',
  width: '95%',
  backgroundColor: '#fff',
  borderRadius: '10px',
  margin: '0 auto 100px auto',
  padding: '10px 0 ',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  display: {sm: 'block', md: 'flex'},
}


const ProjectPage: FC<Props> = ({ project }) => {

  return (
    <LandingLayout title={project.nameProject} pageDescription={project.desc}>
      <Grid container display='flex' sx={{ justifyContent: { sm: 'left', md: 'center'}}}>
          <Typography variant='h1' color='primary' component='h1' sx={{ width: 'maxContent', padding: { sm: '0 60px'}}} mt={15}>
            {project.nameProject}
          </Typography>

          <Grid sx={stylesProperties}>
            <Grid item xs={12} md={6} display='flex' alignItems='center'>
              <CardMedia
                component='img'
                image={project.img}
                alt='Prouesta Asociacion SC'
                sx={{ width: { xs: 240, md: 440}}}
              />
            </Grid>

            <Grid item xs={12} md={6} sx={{ mr:2, ml: 2 }}>
                <Grid item mt={2}>
                  <Typography variant='body1'>{project.desc}</Typography>
                </Grid>

                <Grid item my={2}>
                  <Typography variant='h6' component='h3'>Encargados del proyecto</Typography>
                  
                  {
                    project.membersManager.map( manager => (
                      <CardMember member={manager} key={manager._id} />
                    ))
                  }

                </Grid>
            </Grid>
          </Grid>


        </Grid>
    </LandingLayout>  
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: projectsAso.map( ({slug}) => ({
      params: {
        slug
      }
    })),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const {slug} = params as { slug: string} 

  const project = projectsAso.find( p => p.slug === slug )

  if( !project ){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      project
    }
  }
}

export default ProjectPage