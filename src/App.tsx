import styles from "./App.css"
import Banner from "./components/organisms/Banner/Banner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import MiniatureRow from "./components/organisms/MiniatureRow"

interface Mini {
  img: string,
  gif?: string,
  title?: string,
  loaded?: number
}

function App() {
  const nuevoEnNetflix: Array<Mini> = [
    {
      img: "https://m.media-amazon.com/images/I/A10Oh3Yw7FL.jpg",
      gif: "https://media1.giphy.com/media/h4x5JHXczHtqgvcLYs/200w.gif?cid=6c09b9528hfvw5z53iqnvu75oc00uj8ua5ltrqoyzjvfpvs4&ep=v1_gifs_search&rid=200w.gif&ct=g",
      title: "Stranger Things",
      loaded: 70,
    },
    {
      img: "https://resizing.flixster.com/Z802Pr4Ng9mwGAakWIBOG_-I4WE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8554431_p_v10_av.jpg",
      gif: "https://media0.giphy.com/media/zglFPxjeRbdm0/200w.gif?cid=8d8c0358v43u6ivji1lrrtvy0pnjk7szkcz9qn8nh4erlfk3&ep=v1_gifs_search&rid=200w.gif&ct=g",
      title: "The Crown",
      loaded: 40,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/46/c6/0d/46c60dda390d21282bbbd41c5398bbc1.gif",
      title: "One Piece",
      loaded: 30,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media1.giphy.com/media/d3HeU0IDO2jLy/200w.gif?cid=6c09b952f9rd1sfho2hp54zac5t5g4clzentaro30k9dcgae&ep=v1_gifs_search&rid=200w.gif&ct=g",
      title: "Peaky Blinders",
      loaded: 70,
    },
    {
      img: "https://i.pinimg.com/736x/a8/66/2d/a8662d603e4b8a360b87fc0927897fc5.jpg",
      gif: "https://media2.giphy.com/media/3ornk5RuEgyXqD1y6s/giphy.gif?cid=6c09b952bzif1moqi1jk9ip2j8occqkz40t560vm90wvxvzh&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "Greys Anatomy",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMGY4MWIyMzAtMTA1OS00NDc3LWE2ZTktMTQ4NTZmZjIxZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://gifdb.com/images/high/saul-goodman-jimmy-mcgill-damn-right-c8yqg57w5dn6id17.gif",
      title: "Better Call Saul",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/96/bd/57/96bd57dfd46d27a32d435ad8eb82a997.gif",
      title: "Naruto",
      loaded: 10,
    },

  ]

  const seguirViendo: Array<Mini> = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media1.giphy.com/media/R3S6MfUoKvBVS/giphy.gif?cid=6c09b952kgykirfcchy5medxozeo381x5prfia346wsldndx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "Breaking Bad",
      loaded: 75,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BODk2Nzg4OWYtODczMy00NWRkLTg5ODQtZTU1ZGRhMzRhZGZhXkEyXkFqcGc@._V1_.jpg",
      gif: "https://media0.giphy.com/media/26gsccje7r5WUrXsA/200w.gif?cid=6c09b952ku8oo6h2oxmch654qeg1p1bm1z320e20cd7ak7zv&ep=v1_gifs_search&rid=200w.gif&ct=g",
      title: "Schitts Creek",
      loaded: 40,
    },
    {
      img: "https://thehowler.org/wp-content/uploads/2018/01/Dear-White-People-for-Ryanne.jpg",
      gif: "https://media.tenor.com/J8eYx_lUsPcAAAAM/dear-white.gif",
      title: "Dear White People",
      loaded: 30,
    },
    {
      img: "https://image.tmdb.org/t/p/original/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg",
      gif: "https://media.tenor.com/LZIp3KJkHYwAAAAM/piper-chapman-taylor-schilling.gif",
      title: "Orange is the New Black",
      loaded: 70,
    },
    {
      img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQcEYlpVxc0dAXF-droDwz2tLB0CX896_A0gI2j-ZACj6hlQeQ5tzN6KaQeOcDu8AnVw--SbzxTmXY062HXxbfXWcZzxL-k-nKehakoMgikhE_p9SocvQiiWNFV07xej81o6WhWYtU4g7s0yM1-bkSMiW.jpg?r=47d",
      gif: "https://media1.giphy.com/media/RN7sS7I1mp4JHknwDF/giphy.gif?cid=6c09b9528v2bwyn5z0st6b16go2bvi3je6fi28oogm0oly34&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "Queer Eye",
      loaded: 0,
    },
    

  ]

  const paraTi: Array<Mini> = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media4.giphy.com/media/32dfpYx8kBX1bXSEu8/giphy.gif?cid=6c09b952rzm83ng07iviyotmql8e3xh1c05484xg1z9ohgdk&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      title: "Queens Gambit",
      loaded: 70,
    },
    {
      img: "https://m.media-amazon.com/images/I/81E9pxWGJPL._AC_UF1000,1000_QL80_.jpg",
      gif: "https://media.tenor.com/PM1NWm8OIyoAAAAM/waiting.gif",
      title: "Narcos",
      loaded: 40,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BYzMwNzI3MWItZTIzYi00YjkxLThhOWQtYmUwYjg4NWM0ZWI1XkEyXkFqcGc@._V1_.jpg",
      gif: "https://media4.giphy.com/media/l4Ki93SAmKFgJnObS/giphy.gif?cid=6c09b9526do3k4q5lryl4zscmxiz2udakq8tkxr1z43pel3f&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "Lucifer",
      loaded: 30,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzlmMmIxODItYzBjNC00YjMwLWIwOTAtNzVlMTBlNTNkMjZjXkEyXkFqcGc@._V1_.jpg",
      gif: "https://media2.giphy.com/media/SvEyLx1GlDxk2XR4Xn/200w.gif?cid=6c09b952b23i5pi5i2lk9tyrvsfvg66xohul1yg7jvvj1qf6&ep=v1_gifs_search&rid=200w.gif&ct=g",
      title: "Umbrella Academy",
      loaded: 70,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media1.giphy.com/media/R3S6MfUoKvBVS/giphy.gif?cid=6c09b952kgykirfcchy5medxozeo381x5prfia346wsldndx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "Breaking Bad",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BYWFmMWE4YTMtMWViNS00NzI5LTljZGUtMGM1YTFkNmMzZjE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/7d/da/bd/7ddabdf4ee6e120bff63caa38f24a2a4.gif",
      title: "Hellsing",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjZjZGI3ZDQtODNmZC00NjE0LTlmYTUtOTljMWI2YjNmMTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/e3/d5/9c/e3d59c5f1ddf800e159c37170deb58ef.gif",
      title: "Evangelion",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media.tenor.com/PhNxV3bRIwkAAAAM/death-note-light.gif",
      title: "Deathnote",
      loaded: 0,
    },
    

  ]
  const tendenciaAhora: Array<Mini> = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BZTMxYjFhYTQtMDM1Yy00YmY5LTg5ZWEtZTBmOTEwYjIxZTUxXkEyXkFqcGc@._V1_.jpg",
      gif: "https://media3.giphy.com/media/DthnuWSf3QPEX76qXQ/giphy.gif?cid=6c09b952ca3n4g2q12hatx4u0dyfgwsjpmho9t8pwyy3fa5z&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "Too Hot to Handle",
      loaded: 70,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMjY1NDA1YTItMDAxYi00ODcwLWE0MTktMDJhZmJhYjk0MDRjXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      gif: "https://media3.giphy.com/media/41yB7erevZHH3kX7wy/200.gif",
      title: "The Summer I Turned Pretty",
      loaded: 40,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media.tenor.com/1hGH4fDpH-0AAAAM/fmab-full-metal-alchemist.gif",
      title: "FMA Brotherhood",
      loaded: 30,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_.jpg",
      gif: "https://media.tenor.com/rK3k9EgLkhEAAAAM/steins-gate.gif",
      title: "Steins Gate",
      loaded: 70,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjQ3NjZmMDMtNWE1MS00MWNlLWE4YzEtZjRkODhiZjJkMzIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media0.giphy.com/media/CpSRsSAeoi5oKObak6/giphy.gif?cid=6c09b9527tyovd38dd4lbm2weyq1kq5etm6ih2kyua4k642o&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "My Brilliant Friend",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/bc/72/7d/bc727d03e9c46e2e13711f02dfdc7f04.gif",
      title: "Twilight",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BM2VhZjk2MWMtZjc2OC00YzA4LWI0NzAtZGQ1YjVkOTk5YzVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/3b/31/03/3b3103df897011165b21afd57c3aa7fa.gif",
      title: "Cowboy Bebop",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/70/b0/40/70b040cdc3356cfb8c15dfad0650a24e.gif",
      title: "Vinland Saga",
      loaded: 0,
    },
    

  ]
  const critica: Array<Mini> = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media4.giphy.com/media/32dfpYx8kBX1bXSEu8/giphy.gif?cid=6c09b952rzm83ng07iviyotmql8e3xh1c05484xg1z9ohgdk&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      title: "Queens Gambit",
      loaded: 70,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjQ3NjZmMDMtNWE1MS00MWNlLWE4YzEtZjRkODhiZjJkMzIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media0.giphy.com/media/CpSRsSAeoi5oKObak6/giphy.gif?cid=6c09b9527tyovd38dd4lbm2weyq1kq5etm6ih2kyua4k642o&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "My Brilliant Friend",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/bc/72/7d/bc727d03e9c46e2e13711f02dfdc7f04.gif",
      title: "Twilight",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzlmMmIxODItYzBjNC00YjMwLWIwOTAtNzVlMTBlNTNkMjZjXkEyXkFqcGc@._V1_.jpg",
      gif: "https://media2.giphy.com/media/SvEyLx1GlDxk2XR4Xn/200w.gif?cid=6c09b952b23i5pi5i2lk9tyrvsfvg66xohul1yg7jvvj1qf6&ep=v1_gifs_search&rid=200w.gif&ct=g",
      title: "Umbrella Academy",
      loaded: 70,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media1.giphy.com/media/R3S6MfUoKvBVS/giphy.gif?cid=6c09b952kgykirfcchy5medxozeo381x5prfia346wsldndx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      title: "Breaking Bad",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media.tenor.com/1hGH4fDpH-0AAAAM/fmab-full-metal-alchemist.gif",
      title: "FMA Brotherhood",
      loaded: 30,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZjZjZGI3ZDQtODNmZC00NjE0LTlmYTUtOTljMWI2YjNmMTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://i.pinimg.com/originals/e3/d5/9c/e3d59c5f1ddf800e159c37170deb58ef.gif",
      title: "Evangelion",
      loaded: 0,
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      gif: "https://media.tenor.com/PhNxV3bRIwkAAAAM/death-note-light.gif",
      title: "Deathnote",
      loaded: 0,
    },
    

  ]


  return (
    <>
      <Banner title="N°1 Mundial" description="Un profesor de química con cáncer terminal se asocia con un exalumno suyo para fabricar y vender metanfetamina a fin de que su familia no pase apuros económicos" backgroundImage="https://media1.giphy.com/media/R3S6MfUoKvBVS/giphy.gif?cid=6c09b952kgykirfcchy5medxozeo381x5prfia346wsldndx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
      <MiniatureRow title="Nuevo en Netflix" movies={nuevoEnNetflix} />
      <MiniatureRow title="Seguir Viendo" movies={seguirViendo} />
      <MiniatureRow title="Para ti" movies={paraTi} />
      <MiniatureRow title="Tendencia Ahora" movies={tendenciaAhora} />
      <MiniatureRow title="Aclamado por la critica" movies={critica} />

    </>

  );
}

export default App
