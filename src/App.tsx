import styles from "./App.css"
import Banner from "./components/organisms/Banner/Banner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import MiniatureRow from "./components/organisms/MiniatureRow"

function App() {
  return (
    <>
      <Banner title="N1 mundial" description="Un profesor de química con cáncer terminal se asocia con un exalumno suyo para fabricar y vender metanfetamina a fin de que su familia no pase apuros económicos" backgroundImage="https://media.a24.com/p/d05dedb6d03cf6d673575911bbddfc3a/adjuntos/296/imagenes/008/530/0008530982/breaking-badjpg.jpg" />
      <MiniatureRow title="Nuevo en Netflix" movies={["https://img.etimg.com/thumb/width-1200,height-1200,imgsize-2411572,resizemode-75,msid-115029000/news/international/us/stranger-things-season-5-see-release-date-episode-titles-and-cast.jpg",
      "https://miro.medium.com/v2/resize:fit:660/1*dwtfAs7U9kfZqdIHAi8fIQ.png",
      "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg",
      "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/showimages/ed4fcf7d94e4a9dffb049bdba8f3e9c5/1600x900-Q90_ed4fcf7d94e4a9dffb049bdba8f3e9c5.jpg",
      "https://m.media-amazon.com/images/M/MV5BMGY4MWIyMzAtMTA1OS00NDc3LWE2ZTktMTQ4NTZmZjIxZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      ]}>
      </MiniatureRow>
    </>

  );
}

export default App
