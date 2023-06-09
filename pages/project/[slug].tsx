import React, { FC } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'

import { Grid, Typography } from '@mui/material';
import { LandingLayout, ProjectLayout } from '@/components/layouts'

import { projectsAso } from '@/components/AsoPage/basicData';

import { IProject } from '../../interfaces/IProject';

interface Props{
  project: IProject
}


const ProjectPage: FC<Props> = ({ project }) => {

  console.log(project)
  return (
    <ProjectLayout title={project.nameProject} pageDescription={project.desc}>
      <Grid container>

        <Grid item sm={12}>
          
        </Grid>
        <Grid item sm={12}>
          <Typography variant='h1' component='h1' color='#252525'>{project.nameProject}</Typography>
        </Grid>
      </Grid>
    </ProjectLayout>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

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