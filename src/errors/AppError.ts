class Error
{
  
  constructor(
     public readonly message:string,
     public readonly code:number = 400
  )
  {}

}

export default Error;