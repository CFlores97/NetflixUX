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

      <MiniatureRow title="Seguir Viendo" movies={["https://img.etimg.com/thumb/width-1200,height-1200,imgsize-2411572,resizemode-75,msid-115029000/news/international/us/stranger-things-season-5-see-release-date-episode-titles-and-cast.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDFmODRlOTMtYWRkMy00YzE3LWFhODctMGYwM2FmNDNhOGNhXkEyXkFqcGc@._V1_.jpg",
        "https://ew.com/thmb/8oZY3_WXh8xike1v9Lt7PfaK25U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dwp_310_unit_02167r-2000-b7cbed2d5e7e4b18a38aaddd9eff9ded.jpg",
        "https://s3.r29static.com/bin/entry/1e7/720x480,85/2230847/image.webp",
        "https://cdn.theatlantic.com/thumbor/LlxcW3Fe5HQRq7hK2yUl6-9CXzM=/0x52:3378x1952/960x540/media/img/mt/2018/03/QEYE_SG_105_00162/original.jpg"
      ]}>
      </MiniatureRow>

      <MiniatureRow title="Para Ti" movies={["https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/I/81E9pxWGJPL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYzMwNzI3MWItZTIzYi00YjkxLThhOWQtYmUwYjg4NWM0ZWI1XkEyXkFqcGc@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzlmMmIxODItYzBjNC00YjMwLWIwOTAtNzVlMTBlNTNkMjZjXkEyXkFqcGc@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYWFmMWE4YTMtMWViNS00NzI5LTljZGUtMGM1YTFkNmMzZjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZjZjZGI3ZDQtODNmZC00NjE0LTlmYTUtOTljMWI2YjNmMTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ]}>
      </MiniatureRow>

      <MiniatureRow title="Tendencia Ahora" movies={["https://m.media-amazon.com/images/M/MV5BZTMxYjFhYTQtMDM1Yy00YmY5LTg5ZWEtZTBmOTEwYjIxZTUxXkEyXkFqcGc@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjY1NDA1YTItMDAxYi00ODcwLWE0MTktMDJhZmJhYjk0MDRjXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BZjQ3NjZmMDMtNWE1MS00MWNlLWE4YzEtZjRkODhiZjJkMzIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BM2VhZjk2MWMtZjc2OC00YzA4LWI0NzAtZGQ1YjVkOTk5YzVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ]}>
      </MiniatureRow>

      <MiniatureRow title= "Aclamado por la Critica" movies={["https://miro.medium.com/v2/resize:fit:660/1*dwtfAs7U9kfZqdIHAi8fIQ.png",
        "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@.V1.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        "https://m.media-amazon.com/images/I/81E9pxWGJPL.AC_UF1000,1000_QL80.jpg",
        "https://m.media-amazon.com/images/M/MV5BYzMwNzI3MWItZTIzYi00YjkxLThhOWQtYmUwYjg4NWM0ZWI1XkEyXkFqcGc@.V1.jpg",
        "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjY1NDA1YTItMDAxYi00ODcwLWE0MTktMDJhZmJhYjk0MDRjXkEyXkFqcGc@.V1_QL75_UX190_CR0,0,190,281.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg"
      ]}>
      </MiniatureRow>
    </>

  );
}

export default App
