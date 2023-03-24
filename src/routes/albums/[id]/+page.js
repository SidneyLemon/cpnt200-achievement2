export const load = async ({ fetch, params }) => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`);


  
  const apiData = await response.json();
}
  
  return {
    
    albums: apiData, 
    
  }
