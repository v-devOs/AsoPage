import { useState, useEffect } from 'react';

export const useWrite = ( phraseToWrite: string) => {

  const [actualPhrase, setActualPhrase] = useState('')

  const writeLetter = ( letter: string ) => {
    let aux = actualPhrase + letter
    setActualPhrase( current => current + aux )
  }

  const writePhrase = () => {
    const arrPhrase = phraseToWrite.split('')
    let index = 0
    let aux = ''
      
      let interval: any = setInterval( () => {
        if( index === arrPhrase.length ) return clearInterval(interval)
  
        aux += arrPhrase[index]
  
        setActualPhrase( aux )
        index++
  
      },100)
  }

  useEffect(() => {
    writePhrase()
  }, [])
 

  return {
    actualPhrase,

    // Methods
    writePhrase
  }
}
