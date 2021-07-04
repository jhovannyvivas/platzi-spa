const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
console.log(getHash);
export default getHash;

