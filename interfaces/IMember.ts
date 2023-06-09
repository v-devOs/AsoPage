

export interface IMember{
  _id: number,
  name: string,
  charge: string,
  img: string
  links?: linksSocialMedia[]
}

interface linksSocialMedia{
  linkFacebook?: string,
  linkInstagram?: string,
  linkWebSite?: string
}



