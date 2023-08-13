import React from 'react'
import { proposalsAso } from '../../data/proposalsAso';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';

export const Proposals = () => {
  return (
    <section className='bg-black white-text ph-40'>
      <div className='grid-c-2 '>
        <div>
          <h3>Impulsando la Innovación en la Era Digital</h3>
          <h2 className='f-size-50'>Nuestras propuestas</h2>
          <hr style={{ width: '30%' }} className='mb-10' />
          <p className='f-size-18 justify-text'>Nos enorgullece presentar un conjunto de propuestas que reflejan nuestro compromiso con la excelencia académica, la colaboración y el avance tecnológico. Nuestro objetivo es enriquecer la experiencia de cada miembro mientras fomentamos un ambiente que nutre el aprendizaje y la innovación en la era digital. </p>
        </div>
        <Spline scene="https://prod.spline.design/yIZkHvwJm5KNXI9g/scene.splinecode" />
      </div>
      <div className='grid-c-4 gap-15 mt-10'>
        {
          proposalsAso.map(p => (
            <div className='bg-white shadow radius black-text p-20'>
              <Image src='' alt={p.nameProposal} width={300} height={300} className='max-witdh' />
              <h5 className='center-text f-size-24'>{p.nameProposal}</h5>
              <p className='f-size-18'>{p.desc}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
