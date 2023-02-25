

const URL= 'https://randomuser.me/api/'

const getUser=async()=>{
  try {
    const res= await fetch(URL)
    console.log(res);
    const data= await res.json()
    console.log(data);

    // start destruction
      const person = data.results[0]
      console.log(person);
      const{name:{first,last},picture:{large:image},login:{password},email,dob:{age},location:{street:{name,number}},phone}=person
      console.log(image);
      console.log(name,number);
      console.log(phone);
      console.log(email);
      return{
       phone,
       email,
       age,
       password,
       image,
       name :`${first} ${last}`,
       street:`${name} ${number}`
    
      }
  } catch (error) {
    console.log(`we have error may be in URL`);
    
  }
  
}

export default getUser