/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme:{
    extend:{
        colors:{
            roxo:{
                // Cor primaria
                escuro:'#4650BD',
                claro:'#B6BCFF',
                hover:'#606ADA',

            },
            azul:{
                claro:'#C8DEEF',
            },
            cinza:{
                escuro:"#444444",
            },
            verde:{
                // BG datas
                escuro:'#008364',
                // Secundaria
                secundaria:'#304968',
                // Tercearia
                tercearia:'#36c1a0',

                // Gradiente background
                gradiente:'linear-gradient(180deg, #304968 0%, #36C1A0 52.6%, #4650BD 100%);'
            },
            gradiente:{
                inicio:'#304968',
                meio:'#36C1A0',
                fim:'#4650BD',
            }
        },
        fontFamily:{
            titulo:['Calistoga','sans-serif'],
            texto:['Raleway','sans-serif']
        },
        backgroundImage:{
            'borealmobile':"url('../img/BorealMobile.svg')",
            'borealtablet':"url('../img/BorealTablet.svg')",
            'experiencia':"linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/experiencia.jpeg')",
            'guitar':"url('../img/guitar.svg')",
            'guitardesktop':"url('../img/guitarDesktop.jpg')",
            'exp1':"url('../img/exp1.jpeg')",
            'exp2':"url('../img/exp2.jpeg')",
            'exp3':"url('../img/exp3.jpeg')",
            'setores': "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/setores.jpg')",
            'info': "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/info.jpg')",
            'ingresso': "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/gingresso.jpg')",
            'setor1':"url('../img/setor1.jpg')",
            'setor2':"url('../img/setor2.jpg')",
            'setor3':"url('../img/setor3.jpg')",

        },
        dropShadow:{
            'botao': '4px 4px 0px #444444'
        },
        fontSize:{
            '32xl': '2rem',
            '40xl': '2.5rem',
            '64xl': '4rem',
        },
        height:{
            '100':'25rem',
            '110':'28rem',
            '400':'29rem',
        },
        width:{
            '100':'25rem',
            '110':'28rem',
            '400':'29rem',
        },
        spacing: {
            'negative': '-2rem',
          }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
