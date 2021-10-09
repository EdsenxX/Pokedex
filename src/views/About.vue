<template>
  <v-container class="container">
    <div class="hero">
      <div class="hero__content">
        <img src="@/assets/img/perfil.jpg" alt="Eduardo Serrano" />
        <p class="name">Eduardo Serrano Jaime</p>
        <p class="title">Frontend Developer</p>
        <div class="social-networks">
          <div class="item">
            <a
              href="https://www.instagram.com/edsen__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="instagram"
                color="white"
                size="md"
              ></box-icon>
            </a>
          </div>
          <div class="item">
            <a
              href="https://www.linkedin.com/in/edsen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="linkedin-square"
                color="white"
                size="md"
              ></box-icon>
            </a>
          </div>
          <div class="item">
            <a
              href="https://github.com/EdsenxX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                type="logo"
                name="github"
                color="white"
                size="md"
              ></box-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <p class="description">
        Mexicano, originario de Colima, especializado en el desarrollo de
        aplicaciones web con mas de 2 años de experiencia. Apasionado de
        aprender nuevas tecnologias para innovar
      </p>
      <div class="contact">
        <div class="item">
          <box-icon type="solid" name="phone" color="white"></box-icon>
          <p>+52 312 169 82 53</p>
        </div>
        <div class="item">
          <box-icon name="envelope" type="solid" color="white"></box-icon>
          <p>eduardoserranojaime@gmail.com</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.container{
  padding-top: 90px;
}
.hero {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url("../assets/img/hero.jpg");
    filter: brightness(0.5) contrast(0.8);
    background-position: center center;
    background-size: cover;
  }
  .hero__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      border-radius: 100%;
    }
    .name {
      font-family: "Oswald", sans-serif;
      font-size: 2rem;
    }
    .title {
      font-size: 1.5rem;
    }
    .social-networks {
      margin-top: 10px;
      display: flex;
    }
  }
}
.info {
  width: 100%;
  height: 30vh;
  margin-top: 20px;
  .description {
    padding: 10px 80px;
    text-align: center;
    font-size: 1.3rem;
  }
  .contact {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 25px;
    .item {
      display: flex;
      align-items: center;
      p {
        margin-left: 10px;
      }
    }
  }
  @media only screen and (max-width: 590px) {
    .description {
      padding: 10px 20px;
    }
    .contact {
      flex-direction: column;
      gap: 10px;
      align-items: center;
      margin-bottom: 10px;
    }
  }
}
</style>
