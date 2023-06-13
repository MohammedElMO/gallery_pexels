import useGallery from "./hooks/useGallery"




function App() {

  const {data} = useGallery()
console.log(data);


  return (
    <div className="bg-red-200 font-pop h-[200vh]">App Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto incidunt beatae repudiandae dolores dolorum natus officia delectus molestiae non quo.</div>
  )
}

export default App