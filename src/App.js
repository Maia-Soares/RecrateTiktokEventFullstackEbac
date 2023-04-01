import './App.css'
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
        likes={111} 
        messages={222} 
        shares={333}
        name="MaiaSoares"
        description="Becker, o goleiro"
        music="Música épica!"
        url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
        />
        <Video 
        likes={231} 
        messages={234} 
        shares={231}
        name="Lekhanzinha"
        description="Bird encarando a câmera"
        music="Clap Your Hands"
        url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d" 
        />
        
      </div>
    </div>
  )
}

export default App
